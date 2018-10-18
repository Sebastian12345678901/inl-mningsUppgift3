

let radie = prompt("skriv in sfärens radie för att beräkna volymen och arean: ");

//Beräknar sfärens radie och volym med hjälp av radien. returnerar en array med svaren.
function getSfär(r){
    let V = Math.round((4 * Math.PI * Math.pow(r,3)) / 3);
    let A = Math.round (4 * Math.PI * Math.pow(r,2));
    return [V,A];
}
let mySfär = getSfär(radie);

alert(`Sfärens Volymär : ${mySfär[0]}cm3 och arean är ${mySfär[1]}cm2`);