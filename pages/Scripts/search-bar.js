const characterTemplate = document.querySelector("[data-character-template]")
const characterCardContainer = document.querySelector("[data-character-cards-container]")
const searchInput = document.querySelector("[data-search]")

let characters = []

searchInput.addEventListener("input", (e) => {
    const value =e.target.value.toLowerCase()
    characters.forEach(character => {
        const isVisible = 
        character.name.toLowerCase().includes(value) || 
        character.race.toLowerCase().includes(value)
        user.element.classList.toggle("hide", !isVisible )
    })
})

fetch("")
.then(res => res.json())
.then(data => {
    character = data.map(character => {
    const card = characterTemplate.content.cloneNode(true).children[0]
    const header = card.querySelector("[data-header")
    const body = card.querySelector("[data-body]")
    header.textContent = character.name
    body.textContent = character.race
    characterCardContainer.append(card)
    return{ name: character.name, race: character.race, element:card}
    })
})