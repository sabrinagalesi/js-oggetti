/* Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
    Stampare a schermo la bici con peso minore. 
    Creare un array con dentro gli oggetti
    bici con seguenti proprietà : nome e peso
    fare alert che stampa bici con peso minore*/
    
var bici = [
    {
        nome: "Bici 1",
        peso: 30
    },
    {
        nome: "Bici 2",
        peso: 20
    },
    {
        nome: "Bici 3",
        peso: 40
    },
]

for(var i = 0; i < bici.length; i++) {
    listaBici = bici[i];
    console.log(listaBici);
    for(var key in listaBici) {
        console.log(listaBici[key], "=>", key); 
    }
}

