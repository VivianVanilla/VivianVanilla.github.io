
let stardust = 0;
let stardustClickPower = 0;
let clickPower = 1;
let sifters = 0;

function nextSifter() { 
    return Math.floor(5 * (1.2 ** sifters));
}
function powerCost() {
    return Math.floor(100 * (2 * clickPower));
}

function stardustClick(number) {
    stardust += number * stardustClickPower;
    document.getElementById("stardustcounter").innerHTML = Math.floor(stardust);
}

function stardustclickpowercounter() {
    stardustClickPower += clickPower
    
}
 
function buyPower() {
    let pCost = powerCost()
    if(stardust >= pCost){
    clickPower += clickPower + .5;
    stardust -= pCost
    stardustclickpowercounter()
    }
}

function buySifter() {
let sifterCost = nextSifter();
if(stardust >= sifterCost){
 sifters = sifters + 1;
 stardust -= sifterCost;  
};


}
//Stardust AutoMation

window.setInterval(function(){

stardustClick(sifters/10)
}, 1000);

// Update Area

window.setInterval(function(){
    document.getElementById("siftersCost").innerHTML = nextSifter(); 
    document.getElementById("powercost").innerHTML = powerCost();
    document.getElementById("stardustclickpower").innerHTML = stardustClickPower.toFixed(1);
    document.getElementById("totalSifters").innerHTML = sifters; 
    document.getElementById("stardustcounter").innerHTML = Math.floor(stardust);  
    }, 100);