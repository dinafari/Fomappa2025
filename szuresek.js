// 1.Palindrom szavak listázása

//Adott egy tömb szavakkal. Szűrd ki belőle azokat a szavakat, amelyek palindromok (vagyis ugyanazok visszafelé is).
//Példa input:["alma", "kerek", "kajak", "cica", "indul", "görög", "radar"]
//Várt output:["kajak", "radar"]

const szavaktomb=["alma","kerek","kajak","cica","indul","görög", "radar"];

function Palindrome(szo){
    return szo===szo.split("").reverse().join("");
}
const palindromok = szavaktomb.filter(Palindrome);
console.log("palindrom szavak:",palindromok);


//2.Legrövidebb és leghosszabb szavak keresése

//Egy szólista alapján keresd meg a legrövidebb és a leghosszabb szavakat.
//Példa input:["asztal", "fa", "programozás", "kutya", "ház"]

// Várt output:Legrövidebb szó: "fa"  
//Leghosszabb szó: "programozás" 

const szavak = ["asztal", "fa", "programozás", "kutya", "ház"];
const szamok =[2,3,59,47,10,22,30,60,100];

function leghosszabbSzo(){
    return szavak.reduce((leghosszabb,jelenlegi) => jelenlegi.length > leghosszabb.length ? jelenlegi:leghosszabb);


}
console.log("A leghoszabb szó:",leghosszabbSzo());

function legrovidebbSzo(){
    return szavak.reduce((legrovidebb, jelenlegi)=> jelenlegi.length < legrovidebb.length ? jelenlegi :legrovidebb);

}
console.log("A legrövidebb szó:", legrovidebbSzo());

// 3.Duplikált szavak kiszűrése 

 //Adott egy tömb szavakkal. Távolítsd el belőle az ismétlődő szavakat, hogy minden szó csak egyszer szerepeljen.  
// Példa input:  ["piros", "kék", "zöld", "piros", "sárga", "kék", "fekete"]
//Várt output:["piros", "kék", "zöld", "sárga", "fekete"]

const szinek = ["piros", "kék", "zöld", "piros", "sárga", "kék", "fekete"];

function szoEgyszer(){
    return [...new Set(szinek)];// A Set automatikusan kiszűri az ismétlődéseket
}
console.log(szoEgyszer());

//4..Megadott kezdőbetűvel kezdődő szavak szűrése

//Készíts egy függvényt, ami egy adott kezdőbetű alapján kiszűri a szavakat egy tömbből.

//Példa input:["kutya", "kacsa", "madár", "macska", "kakas"], "k"
//Várt output:["kutya", "kacsa", "kakas"]//4.feladat: 


const harmadiktomb = ["kutya","kacsa","madár","macska","kakas"];

function elemekSzurese(arr,query){
    return arr.filter(el => el.toLowerCase().startsWith(query.toLowerCase()));
}
console.log(elemekSzurese(harmadiktomb,"k"));// ["kutya", "kacsa", "kakas"]

//Páros számok szűrése:

function parosSzam(){
    return szamok.filter((szam)=>szam % 2 ===0);

}
console.log("A páros számok:",parosSzam());

//Páratlan számok:

function ParatlanSzam(){
    const paratlan = szamok.filter((szam)=>szam %2 !==0);
    return paratlan;

}
console.log("A páratlan számok:",ParatlanSzam());


//Páros  számok amik nagyobbak 60-nál

function ParosNaHatv(){
    const nagyobbhatv= szamok.filter((szam)=>szam >60 && szam %2 ===0);
    return nagyobbhatv;
}
const eredmeny = ParosNaHatv();
console.log(eredmeny);

//Páratlan számok amik kisebb és egyenlő 47 -el:

function ParatlkisebbENHet(){
    const vegeredmeny = szamok.filter((szam) => szam  <= 47 && szam %2 !==0);
    return vegeredmeny;
}
console.log(ParatlkisebbENHet());
