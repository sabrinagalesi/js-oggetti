/* Creare un oggetto palla che abbia le seguenti proprietà.
Nome = palla
Peso = 10
Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla. */

var palla = {
    nome: "palla",
    peso: 10
}

do {
var cambioPeso = prompt("Cambia il peso della palla"); 
} while(!isNaN(cambioPeso));