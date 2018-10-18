
//Tar emot katetrarna av en triangel och returnerar hypotenusan. 
function hyp(kat1, kat2) {

    let temp = (Math.pow(kat1, 2) + Math.pow(kat2, 2));
    return Math.sqrt(temp) ;
}

console.log(hyp(6, 8));