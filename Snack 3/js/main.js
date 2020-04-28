/* Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
Calcolare perimetro e area.
(ripassiamo il Teorema di Pitagora ;D ) */

var triangolo = {
    base: 20,
    altezza: 40,
    ipotenusa: 0
}

var calcoloIpotenusa = ((triangolo.base * 2) + (triangolo.altezza * 2)) / 2; //In questo modo abbiamo trovato l'ipotenusa
console.log(calcoloIpotenusa, "ipotenusa");
triangolo.ipotenusa = calcoloIpotenusa; //Abbiamo aggiunto il valore dell'ipotenusa

//Adesso calcoliamo il perimetro

var perimetro = triangolo.base + triangolo.altezza + triangolo.ipotenusa;
console.log(perimetro, "questo è il perimetro");

//Adesso calcoliamo l'area 
var area = (triangolo.base * triangolo.altezza) / 2;
console.log(area, "Questa è l'area");

for(var key in triangolo) {
    console.log(key, "=>", triangolo[key])
}