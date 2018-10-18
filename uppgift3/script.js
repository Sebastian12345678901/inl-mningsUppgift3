
//tar emot cirkelns radie. Beräknar, returnerar omkrets och arean av den. 
function areaOmkrets(radie) {
    omkrets = radie * 2 * Math.PI;
    area = radie * radie * Math.PI;
    return [area, omkrets];
}
let cirkel = areaOmkrets(prompt("skriv in cirkelns radie i cm: "));
alert(`cirkelns area: ${Math.round(cirkel[0])} cm2. cirkelns omkrets: ${Math.round(cirkel[1])}cm `);