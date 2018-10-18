//skapar en array med 100 random nummer mellan 1 och 6.
function randomDice(){
    let array = [];
    for(i = 0 ; i < 1000 ; i++){
         
            
        array.push(Math.round(Math.random() * 5 + 1));
        
    }   

    return array;


}
//skriver ut hur många ettor till sexor det är i en array.
function print(array){
        let one = 0;
        let two = 0;
        let three = 0;
        let four = 0;
        let five = 0;
        let six = 0;
        
    for(i = 0 ; i < array.length ; i++){
        
        if(array[i] == 1){one++}
        else if(array[i] == 2){two++}
        else if(array[i] == 3){three++}
        else if(array[i] == 4){four++}
        else if(array[i] == 5){five++}
        else if(array[i] == 6){six++}
    }
    
        document.write(`arrayen innehåller:${array.length} tal <br> ettor: ${one} <br> tvåor: ${two}<br> treor: ${three} <br> fyror: ${four} <br> femmor: ${five} <br> sexor: ${six}`);    
}
print(randomDice());