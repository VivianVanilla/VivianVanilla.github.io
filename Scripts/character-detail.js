document.addEventListener("DOMContentLoaded", () => {
    const characterNameElement = document.getElementById("character-name");
    const characterRaceElement = document.getElementById("character-race");
    const characterCharismaElement = document.getElementById("character-charisma");
    const saveButton = document.getElementById("save-button");
    

    const urlParams = new URLSearchParams(window.location.search);
    const characterName = urlParams.get('name');
    const characterRace = urlParams.get('race');
    const characterCharisma = urlParams.get('charisma');

    if (characterName && characterRace && characterCharisma) {
        characterNameElement.textContent = characterName;
        characterRaceElement.textContent = characterRace;
        characterCharismaElement.value = characterCharisma;
    } else {
        characterNameElement.textContent = "Character not found";
        characterRaceElement.textContent = "";
        characterCharismaElement.value = "";
    }


})
