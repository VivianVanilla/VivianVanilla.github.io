document.addEventListener("DOMContentLoaded", () => {
    const characterNameElement = document.getElementById("character-name");
    const characterRaceElement = document.getElementById("character-race");
    const characterCharismaElement = document.getElementById("character-charisma");
    const characterWisdomElement = document.getElementById("character-wisdom");
    const characterDexterityElement = document.getElementById("character-dexterity");
    const characterStrengthElement = document.getElementById("character-strength");
    const characterConstitutionElement = document.getElementById("character-constitution");
    const characterIntelligenceElement = document.getElementById("character-intelligence");
    const characterWalkingElement = document.getElementById("character-walking");
    const characterFlightElement = document.getElementById("character-flight");
    const characterFlyElement = document.getElementById("character-fly");
    const characterHealthElement = document.getElementById("character-health");
    const characterMaxHealthElement = document.getElementById("character-maxhealth");
    const characterCursedEnergyElement = document.getElementById("character-cursedenergy");
    const characterMaxCursedEnergyElement = document.getElementById("character-maxcursedenergy");
    const characterRctElement = document.getElementById("character-rct");
    const characterBlackFlashElement = document.getElementById("character-blackflash");
    const characterArmorElement = document.getElementById("character-armor");
    const characterExtraInfoElement = document.getElementById("character-extrainfo");
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
    const characterStrength = urlParams.get('strength');
    const characterConstitution = urlParams.get('constitution');
    const characterIntelligence = urlParams.get('intelligence');
    const characterWalking = urlParams.get('walking');
    const characterFlight = urlParams.get('flight');
    const characterFly = urlParams.get('fly').trim() === 'true';
    const characterHealth = urlParams.get('health');
    const characterMaxHealth = urlParams.get('maxhealth');
    const characterCursedEnergy = urlParams.get('cursedenergy');
    const characterMaxCursedEnergy = urlParams.get('maxcursedenergy');
    const characterRct = urlParams.get('rct').trim() === 'true' ;
    const characterBlackFlash = urlParams.get('blackflash').trim() === 'true' ;
    const characterArmor = urlParams.get('armor');
    const characterExtraInfo = urlParams.get('extrainfo');

    //Debugging Area
    console.log("Character Charisma:", characterCharisma);
    console.log("Character Wisdom:", characterWisdom);
    console.log("Character Fly (raw):", urlParams.get('fly'));
    console.log("Character Fly (parsed):", characterFly);

    

    if (characterName && characterRace && characterCharisma && characterWisdom && characterDexterity && characterStrength && characterConstitution && characterIntelligence && characterWalking && characterFlight && characterHealth && characterMaxHealth && characterCursedEnergy && characterMaxCursedEnergy && characterArmor && characterExtraInfo) {
        characterNameElement.textContent = characterName;
        characterRaceElement.textContent = characterRace;
        characterCharismaElement.value = characterCharisma.trim();
        characterWisdomElement.value = characterWisdom.trim();
        characterDexterityElement.value = characterDexterity.trim();
        characterStrengthElement.value = characterStrength.trim();
        characterConstitutionElement.value = characterConstitution.trim();
        characterIntelligenceElement.value = characterIntelligence.trim();
        characterWalkingElement.value = characterWalking.trim();
        characterFlightElement.value = characterFlight.trim();
        characterFlyElement.checked = characterFly;
        characterHealthElement.value = characterHealth.trim();
        characterMaxHealthElement.value = characterMaxHealth.trim();
        characterCursedEnergyElement.value = characterCursedEnergy.trim();
        characterMaxCursedEnergyElement.value = characterMaxCursedEnergy.trim();
        characterRctElement.checked = characterRct;
        characterBlackFlashElement.checked = characterBlackFlash;
        characterArmorElement.value = characterArmor.trim();
        characterExtraInfoElement.value = characterExtraInfo;
        
        
    } else {
        characterNameElement.textContent = "Character not found";
        characterRaceElement.textContent = "";
        characterCharismaElement.value = "";
        characterWisdomElement.value = "";
        characterStrengthElement.value = "";
        characterIntelligenceElement.value = "";
        characterWalkingElement.value = "";
        characterFlightElement.value = "";
        characterFlyElement.checked = false;
        characterHealthElement.value = "";
        characterMaxHealthElement.value = "";
        characterCursedEnergyElement.value = "";
        characterMaxCursedEnergyElement.value = "";
        characterRctElement.checked = false;
        characterBlackFlashElement.checked = false;
    }

    saveButton.addEventListener("click", () => {

        const updatedCharisma = characterCharismaElement.value;
        const updatedWisdom = characterWisdomElement.value;
        const updatedDexterity = characterDexterityElement.value;
        const updatedStrength = characterStrengthElement.value;
        const updatedConstitution = characterConstitutionElement.value;
        const updatedIntelligence = characterIntelligenceElement.value;
        const updatedWalking = characterWalkingElement.value;
        const updatedFlight = characterFlightElement.value;
        const updatedFly = characterFlyElement.checked;
        const updatedHealth = characterHealthElement.value;
        const updatedMaxHealth = characterMaxHealthElement.value;
        const updatedCursedEnergy = characterCursedEnergyElement.value;
        const updatedMaxCursedEnergy = characterMaxCursedEnergyElement.value;
        const updatedRct = characterRctElement.checked;
        const updatedBlackFlash = characterBlackFlashElement.checked;
        const updatedArmor = characterArmorElement.value;
        const updatedExtraInfo = characterExtraInfoElement.value;
        
        const updateData = {
            charisma: updatedCharisma,
            wisdom: updatedWisdom,
            dexterity: updatedDexterity,
            strength: updatedStrength,
            constitution: updatedConstitution,
            intelligence: updatedIntelligence,
            walking: updatedWalking,
            flight: updatedFlight,
            fly: updatedFly,
            health: updatedHealth,
            maxhealth: updatedMaxHealth,
            cursedenergy: updatedCursedEnergy,
            maxcursedenergy: updatedMaxCursedEnergy,
            rct: updatedRct,
            blackflash: updatedBlackFlash,
            armor: updatedArmor,
            extrainfo: updatedExtraInfo

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
