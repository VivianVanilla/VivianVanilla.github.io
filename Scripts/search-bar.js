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

fetch("https://character-storage-b28aa-default-rtdb.firebaseio.com/characters.json", {
    headers: {
        "key": "Access-Control-Allow-Origin"
    }
})
.then(res => res.json())
.then(data => {
   characters = data.map(character => {
    const card = characterTemplate.content.cloneNode(true).children[0];
    const header = card.querySelector("[data-header]");
    const body = card.querySelector("[data-body]");
    card.addEventListener("click", () => {
        window.location.href = `character-detail.html?id=${encodeURIComponent(character.id)}
        &name=${encodeURIComponent(character.name)}
        &race=${encodeURIComponent(character.race)}
        &charisma=${encodeURIComponent(character.charisma)}
        &wisdom=${encodeURIComponent(character.wisdom)}
        &dexterity=${encodeURIComponent(character.dexterity)}
        &strength=${encodeURIComponent(character.strength)}
        &constitution=${encodeURIComponent(character.constitution)}
        &intelligence=${encodeURIComponent(character.intelligence)}
        &walking=${encodeURIComponent(character.walking)}
        &flight=${encodeURIComponent(character.flight)}
        &fly=${encodeURIComponent(character.fly)}
        &health=${encodeURIComponent(character.health)}
        &maxhealth=${encodeURIComponent(character.maxhealth)}
        &cursedenergy=${encodeURIComponent(character.cursedenergy)}
        &maxcursedenergy=${encodeURIComponent(character.maxcursedenergy)}
        &rct=${encodeURIComponent(character.rct)}
        &blackflash=${encodeURIComponent(character.blackflash)}
        &armor=${encodeURIComponent(character.armor)}
        &extrainfo=${encodeURIComponent(character.extrainfo)}`;
    });
    header.textContent = character.name;
    body.textContent = character.race;
    characterCardContainer.append(card);
    return{ name: character.name, race: character.race, element:card}
    });


})
.catch(error => {
    console.error("Error fetching data:", error);
});