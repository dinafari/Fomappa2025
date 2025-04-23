const szamok =[10,20,3,5,100,50,60,53];



function kivalogatParosOtven(szamok){
    const parosnotven = szamok.filter(szam=>szam > 50 && szam % 2 ===0);
    return parosnotven;


}
const parosOtvNagyobb= kivalogatParosOtven(szamok);
console.log("Páros és ötvennél nagyobb számok",parosOtvNagyobb);


function aBetukSzamadiv(){
    const div = document.getElementsByTagName('div')[0];
    const szoveg = div.textContent || '' ;

    const darabszam = (szoveg.match(/a/gi) || []).length;
    return darabszam;


}
const divbetua= aBetukSzamadiv();
console.log("Az a betuk szama:",divbetua);





