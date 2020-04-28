/* Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro 
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
    fare due array 
    fare una funzione che fonda da il primo di un array e il primo del secondo , ecc in un array solo */
function ordinamento (arrayParole, arrayNumeri, arrayVuoto) {
    for(var i = 0; i < arrayParole.length; i++) {
        for(var counter = 0; counter < arrayNumeri.length; counter++) {
            if(i == counter) {
                arrayVuoto.push(arrayParole[i]);
                arrayVuoto.push(arrayNumeri[counter]);
            }
        }
    }
    return arrayVuoto;
}



var arrayParole = [
    "Sabrina",
    "Nikolas",
    "Vicky",
    "Gaspare",
    "Ciappino"
]

var arrayNumeri = [
    1,
    2,
    3,
    4,
    5
]

var arrayVuoto = []

arrayVuoto = ordinamento(arrayParole, arrayNumeri, arrayVuoto);
console.log(arrayVuoto);