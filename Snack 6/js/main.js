/* Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array). 
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”
stabiliamo quanto vale a
stabiliamo quanto vale b
creiamo un array che abbia tanti elementi quanto il valore di b
facciamo una funzione che pushi in un altro array tutti i valori che hanno una posizione compresa tra a e b*/

function arrayPush (a, b, arrayValori, arrayVuoto) {
    for(var i = 0; i < arrayValori.length; i++) {
        console.log(arrayValori[i])
        if(i >= a && i <= b) {
            arrayVuoto.push(arrayValori[i])
        }
    }
    return arrayVuoto;
}

var a = 5;
var b= 10;

var arrayValori = [
    "ciao",
    "sono",
    "sabrina",
    "ho",
    "un",
    "cane",
    "di",
    "nome",
    "Vicky",
    "cicciona"
]

var arrayVuoto = []

arrayVuoto = arrayPush(a,b, arrayValori,arrayVuoto);

console.log(arrayVuoto);