
//Konstruktor för adress.
function Adress(gatuadress, postnummer, ort) {
    this.gatuadress = gatuadress;
    this.postnummer = postnummer;
    this.ort = ort;

    this.print = function() {
        return " " + this.gatuadress + " post nummer: " + this.postnummer + " post ort: " + this.ort;
    };
}
//konstruktor för person, som även tar emot objektet adress.
function Person(namn, ePost, mobil, adress) {
    this.name = namn;
    this.ePost = ePost;
    this.mobil = mobil;
    this.adress = adress;

    this.print = function() {
        console.log(`namn: ${this.name} e-post: ${this.ePost} tele: ${this.mobil} adress: ${this.adress.print()}`);
    };

}

//Skapar Objekten för adress som anges i parametrarna för person objekten.
let sebbesadress = new Adress("Skanörvägen 22", "121 51", "johanneshov");
let sebbe = new Person("Sebastian", "@", "070", sebbesadress);
let brorsansAdress = new Adress("björnlundavägen", "123123", "örby");
let brorsan = new Person("Mikael", "@idiot.com", "070", brorsansAdress);
//Print skriver ut objektet person och objektet adress.
sebbe.print();
brorsan.print();

