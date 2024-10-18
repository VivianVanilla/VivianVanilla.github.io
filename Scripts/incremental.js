
let stardust = 0;
let stardustclickpower = 0.1;
let clickpower = 0;
let sifters = 0;


function stardustClick(number) {
    stardust = stardust + number;
    document.getElementById("stardustcounter").innerHTML = stardust.toFixed(1);
}

function stardustclickpowercounter() {
   
    stardustclickpower = stardustclickpower + clickpower
}
document.getElementById("stardustclickpower").innerHTML = stardustclickpower; 

function buySifter() {
let sifterCost = Math.floor(10 * (1.5 ** sifters));
if(stardust >= sifterCost){
 sifters = sifters + 1;
 stardust = stardust - sifterCost;  
document.getElementById("totalSifters").innerHTML = sifters;
document.getElementById("stardustcounter").innerHTML = stardust.toFixed(1);   
};
let nextCost = Math.floor(10 * (1.5 ** sifters));
document.getElementById("siftersCost").innerHTML = nextCost; 

}

window.setInterval(function(){
stardustClick(sifters/10)
}, 1000);

window.setInterval(function(){
    let nextCost = Math.floor(10 * (1.5 ** sifters));
    document.getElementById("siftersCost").innerHTML = nextCost; 
    document.getElementById("totalSifters").innerHTML = sifters;   
    }, 1000);