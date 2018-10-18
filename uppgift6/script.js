let nummer = prompt("skriv in ett nummer mellan 1 - 170 för för att få veta vad fakultet är: ");

//get fakultet tar emot ett tal och gångrar det med sig själv lika många ggr som talet är stort. Returnerar resultatet.
function getFakulten(nummer){
   
    let temp = nummer;

    for(i = 1 ; i < nummer ; i++){
         temp = temp * i;
    }
        return temp;
}



//If statements för att hantera talet 0 och tal över 170(över max);-------------------------------------------------------------
if(nummer == 0){
    alert("Fakultet av 0 = 1");
}
//kontrollerar ifall nummret går att räkna ut---------------------------------------------------------------------------    q
while(nummer > 170){
    if(nummer > 170){
        alert("nummret du har skrivit in är oändligt försök igen.")
        nummer = prompt("skriv in ett nytt nummer från 1-170");
    }
    
    
}
alert("Fakultet av " + nummer + " = " + getFakulten(nummer));



//------------Här är koden som användes för att testa hur stora tal funktionen klarar av-----------------------------------------
// function getFakulten(){
//     let nummer = 1;
//     let temp = nummer;
//     let line = 1;
//     for(i = 1 ; i < 1000 ; i++){
//         temp = temp * i;
//         nummer++;
//         console.log(line +": " + temp);
//         line++;
//     }
        
// }