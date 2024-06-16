document.addEventListener("DOMContentLoaded", () => {
    const objectNumElement = document.getElementById("objectnum");
    const idNumElement = document.getElementById("idnum");
    const nameElement = document.getElementById("name");
    const raceElement = document.getElementById("race");
    const saveButton = document.getElementById("save-button");

    saveButton.addEventListener("click", () => {
        const objectNum = objectNumElement.value.trim();
        const idNum = idNumElement.value.trim();
        const name = nameElement.value.trim();
        const race = raceElement.value.trim();
        if (!objectNum || !idNum || !name || !race) {
            alert("Please fill out all fields.");
            return;
        }
        const characterData = {
            id: idNum,
            name: name,
            race: race 
        };
        fetch(`https://character-storage-b28aa-default-rtdb.firebaseio.com/characters/${objectNum}.json`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(characterData)
        }).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Character data saved successfully:', data);
            alert('Character data saved successfully!');
    
        })
        .catch(error => {
            console.error('Error saving character data:', error);
            alert('Failed to save character data. Please try again later.');
        });
    });
});