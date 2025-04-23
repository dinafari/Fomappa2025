
const szavak =["répa","retek", "mogyoró","félbarna kenyér","tyúkhúsleves","képvisel","lé","kés"];// Példa adatok

const hossz4=[];


const szamok=[12,6,7,8,10,3,15];// Példa adatok


//Négy karakterhosszú szavak  kikonzolozása

for(let i=0; i<szavak.length;i++){
    if(szavak[i].length===4){
        hossz4.push(szavak[i]);

          

            
    }
      
    
}
console.log("négykarakter hosszú szavak",hossz4);



//Nyolc karakterhosszó szavak kiiratása külön tömmbe , már egy mondatot eleve tartalmaz a tömb:

function Nyolckarakterhossz(szavak){
    const hossz8 =["A haho már itt volt benne,de a függvény a 8 karakterhosszú szó keresésére szól",]; // Előre meghatározott szó
    for(let i=0; i< szavak.length ;i++){
        if(szavak[i].length=== 8){
            hossz8.push(szavak[i]);
        }
    }
    return hossz8;

}
const nyolc=Nyolckarakterhossz(szavak);
console.log("Nyolc karakterhosszú  szavak",nyolc);

//Két karakterhosszú szavak kiiratása külön tömbbe:

function Ketkarakterhoszz(szavak){
    const hossz2 =[];
    for(let i =0; i < szavak.length; i++){
        if(szavak[i].length ===2){
            hossz2.push(szavak[i]);
            
        }
    }
    return hossz2;
}
const ketto=Ketkarakterhoszz(szavak);
console.log("Két karakterhosszú szó",ketto);

//Páros számok kiiratása a számok tömbből külön üres tömbbe:
function Parosszamok(szamok){
    const paros =[];
    for(let i=0; i< szamok.length; i++){
        if(szamok[i] % 2 === 0){
            paros.push(szamok[i]);
        }
    }
    return paros;

}
const parosszam=Parosszamok(szamok);
console.log(parosszam);




//A számok és szavak kiiratása külön tömmbe és szöveggé alakításuk:



function Mindenszovegkent(szamok, szavak) {
    const eredmeny = [];
    const maxHossz = Math.max(szamok.length, szavak.length);

    for (let i = 0; i < maxHossz; i++) {
        if (i < szamok.length) {
            eredmeny.push(szamok[i].toString());
        }
        if (i < szavak.length) {
            eredmeny.push(szavak[i]);
        }
    }
    
    return eredmeny;
}


// Eredmény kiíratása
const minden = Mindenszovegkent(szamok, szavak);
console.log(minden);




