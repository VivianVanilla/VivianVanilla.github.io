const characterTemplate = document.querySelector("[data-character-template]")
const characterCardContainer = document.querySelector("[data-character-cards-container]");
const searchInput = document.querySelector("[data-search]");

let characters = [];

searchInput.addEventListener("input", (e) => {
    const value =e.target.value.toLowerCase();
    characters.forEach(character => {
        const isVisible = 
        character.name.toLowerCase().includes(value) || 
        character.race.toLowerCase().includes(value);
        character.element.classList.toggle("hide", !isVisible );
    });
});

fetch("https://api.jsonbin.io/v3/b/6669340cacd3cb34a856568a")
.then(res => res.json())
.then(data => {
   characters = data.record.map(character => {
    const card = characterTemplate.content.cloneNode(true).children[0];
    const header = card.querySelector("[data-header]");
    const body = card.querySelector("[data-body]");
    header.textContent = character.name;
    body.textContent = character.race;
    characterCardContainer.append(card);
    return{ name: character.name, race: character.race, element:card}
    });


})
.catch(error => {
    console.error("Error fetching data:", error);
});