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
    {
        nome: "Bici 4",
        peso: 10
    },
];

var biciConPesoMinore = {};

// var posizioneBiciMinore = 0;

for(var i = 0; i < bici.length; i++) {
    var listaBici = bici[i];
    console.log(listaBici.peso);

    //Se la mia bici con peso minore non è ancora settata, ci metto la prima che capita 
    if(!biciConPesoMinore.peso) {
        biciConPesoMinore = listaBici;
        console.log("non avendo una bici minore ho messo la prima che capita", biciConPesoMinore)
    }

    //Se la bici che sto esaminando è più leggera di quella che pensavo lo fosse.. allora..
    if(listaBici.peso < biciConPesoMinore.peso) {
        biciConPesoMinore= listaBici;
        console.log(biciConPesoMinore);
    }


    /* if(listaBici.peso < bici[posizioneBiciMinore].peso) {
        posizioneBiciMinore = i;
    } */

}

alert(biciConPesoMinore.nome + " " + biciConPesoMinore.peso);

