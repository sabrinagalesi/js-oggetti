/* - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
    creare un oggetto con dentro le chiavi: nome, cognome, età
    con un for in stampare a schermo le proprietà */

console.log("Primo esercizio");

var studente = {
    nome: "sabrina",
    cognome: "galesi",
    età: 21,
}

for(var key in studente) {
    console.log(studente[key]);
}


/* - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome 
    fare array con dentro degli oggetti di studenti diversi
    fare un for per ciclare l'array e all'interno del for un for in per ciclare gli oggetti */

console.log("Secondo esercizio");

var studenti = [
    {
        nome: "nikolas",
        cognome: "mosca",
        età: 25
    },
    {
        nome: "giada",
        cognome: "ravalli",
        età: 21
    },
    {
        nome: "martina",
        cognome: "galesi",
        età: 24
    },
    {
        nome: "christian",
        cognome: "sabato",
        età: 17
    }
]

for(var i=0; i < studenti.length; i++) {
    arrayStudenti = studenti[i];
    for(var key in arrayStudenti) {
        console.log(arrayStudenti[key]);
    }
}

/* - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. 
    fare 3 prompt per chiedere di aggiungere un oggetto studente nell'ordine nome cognome età*/

console.log("Terzo esercizio");

var richiestaNome = prompt("Inserisci il nome dello studente");
var richiestaCognome = prompt("Inserisci il cognome dello studente");
var richiestaEtà = prompt("Inserisci l'età dello studente");

var richiestaStudente = {
    nome: "",
    cognome: "",
    età: ""
}

richiestaStudente.nome = richiestaNome;
richiestaStudente.cognome =richiestaCognome;
richiestaStudente.età = richiestaEtà;

console.log(richiestaStudente);

studenti.push(richiestaStudente);