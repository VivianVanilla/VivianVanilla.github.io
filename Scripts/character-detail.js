document.addEventListener("DOMContentLoaded", () => {
    const characterNameElement = document.getElementById("character-name");
    const characterRaceElement = document.getElementById("character-race");
    const characterCharismaElement = document.getElementById("character-charisma");
    const characterWisdomElement = document.getElementById("character-wisdom");
    const characterDexterityElement = document.getElementById("character-dexterity");
    const saveButton = document.getElementById("save-button");
    

    const urlParams = new URLSearchParams(window.location.search);
    //debuggin area

    console.log("Full Query String:", window.location.search);

    
    //debuggin area

    console.log("URL Parameters:", window.location.search);

    const characterId = urlParams.get('id');
    const characterName = urlParams.get('name');
    const characterRace = urlParams.get('race');
    const characterCharisma = urlParams.get('charisma');
    const characterWisdom = urlParams.get('wisdom');
    const characterDexterity = urlParams.get('dexterity');

    //Debugging Area
    console.log("Character Charisma:", characterCharisma);
    console.log("Character Wisdom:", characterWisdom);

    if (characterName && characterRace && characterCharisma && characterWisdom && characterDexterity) {
        characterNameElement.textContent = characterName;
        characterRaceElement.textContent = characterRace;
        characterCharismaElement.value = characterCharisma.trim();
        characterWisdomElement.value = characterWisdom.trim();
        characterDexterityElement.value = characterWisdom.trim();
        
        
    } else {
        characterNameElement.textContent = "Character not found";
        characterRaceElement.textContent = "";
        characterCharismaElement.value = "";
        characterWisdomElement.value = "";
    }

    saveButton.addEventListener("click", () => {

        const updatedCharisma = characterCharismaElement.value;
        const updatedWisdom = characterWisdomElement.value;
        const updatedDexterity = characterDexterityElement.value;
        
        const updateData = {
            charisma: updatedCharisma,
            wisdom: updatedWisdom,
            dexterity: updatedDexterity
        };
        
        console.log("Character ID:", characterId);
        
        fetch(`https://character-storage-b28aa-default-rtdb.firebaseio.com/characters/${characterId.trim()}.json`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateData)
        })

        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json(); // Assuming Firebase responds with JSON
        })
        .then(data => {
            console.log("Character data saved successfully:", data);
            // Optionally provide feedback to the user
            alert("Character data saved successfully!");
        })
        .catch(error => {
            console.error("Error saving character data:", error);
            // Optionally handle errors and provide feedback to the user
            alert("Failed to save character data. Please try again later.");
        });    
    });
});
