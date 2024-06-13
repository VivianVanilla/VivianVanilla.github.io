document.addEventListener("DOMContentLoaded", () => {
    const characterNameElement = document.getElementById("character-name");
    const characterRaceElement = document.getElementById("character-race");
    const characterCharismaElement = document.getElementById("character-charisma");
    const saveButton = document.getElementById("save-button");
    

    const urlParams = new URLSearchParams(window.location.search);
    const characterId = urlParams.get('id');
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

    saveButton.addEventListener("click", () => {

        const updatedCharisma = characterCharismaElement.value;  
        const updateData = {
            charisma: updatedCharisma
        };


        
        fetch(`https://character-storage-b28aa-default-rtdb.firebaseio.com/characters/${characterId}.json`, {
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
