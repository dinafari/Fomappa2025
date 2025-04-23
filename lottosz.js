

function lottoszamGen(count, min=1,max=90){
    let lottosz =[];
    while(lottosz.length < count){
        let randomsz = Math.floor(Math.random()*(max-min +1))+ min;
        if(!lottosz.includes(randomsz)){// Csak ha még nincs benne semmi a tömbbe
            lottosz.push(randomsz);//Lottosz tömbbe beletolja a random számokat

        }
        

    }
    return lottosz.sort((a,b)=>(a-b));
}
console.log(lottoszamGen(6));




function lGeneraTor(count, min=2, max= 80){
    let lsz = new Set();
    while(lsz.size < count ){
        lsz.add(Math.floor(Math.random()*(max - min +1))+ min);


    }
    return [...lsz].sort((a,b) => (a-b));

}
console.log(lGeneraTor(6));

//1.feladat:Függvény ami eldönti melyik szó palindrome

const szavaktomb = ["alma","kerek","kajak","cica","indul","görög","radar"];
function Palindrome(szo){
    
    const forditottsz = szo.split("").reverse().join("");
    if( szo==forditottsz){

        return true;
    }
    return false
}
console.log("alma",Palindrome("alma"));
console.log("kerek",Palindrome("kerek"));
console.log("cica",Palindrome("cica"));
console.log("indul",Palindrome("indul"));
console.log("görög",Palindrome("görög"));
console.log("radar",Palindrome("radar"));


//2./a)feladat Leghosszabb szó reduce-al

const szavak =["asztal", "fa", "programozás", "kutya", "ház"];

function leghosszabbSzo(){
    const legh= szavak.reduce((leghosszabb,jelenlegi )=>jelenlegi.length >leghosszabb.length ? jelenlegi:leghosszabb);
    return legh;
}
console.log("A leghosszabb szó:"+leghosszabbSzo());


//2./b)feladat Legrövidebb szaval reduce-al:

function legrovidebbSzo(){
    const legr = szavak.reduce((legrovidebb,jelenlegi)=> jelenlegi.length < legrovidebb.length ? jelenlegi :legrovidebb);
    return legr;
}
console.log("A legrovidebb szo:",legrovidebbSzo());


//3.feladat:Ismétlődő szavak eltávolítása

const szinek =["piros", "kék", "zöld", "piros", "sárga", "kék", "fekete"];

function szoEgyszer() {
    return [...new Set(szinek)]; // A Set automatikusan kiszűri az ismétlődéseket
}

console.log(szoEgyszer()); 




//4.feladat:"k",illetve "K"betűt tartalmazó szavak kiszűrése
const harmadiktomb= ["kutya", "kacsa", "madár", "macska", "kakas"];


function elemekSzurese(arr,query){
    return arr.filter((el)=>el.toLowerCase().includes(query.toLowerCase()));
   

}
console.log(elemekSzurese(harmadiktomb,"k"));


