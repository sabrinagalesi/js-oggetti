/* 
Creare un array di oggetti di squadre di calcio. 
Ogni squadra avrà diverse proprietà: 
nome, punti fatti, falli subiti.

Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

Generare numeri random al posto degli 0 nelle proprietà:
punti fatti e falli subiti */

var squadre = [
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Bologna",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Catania",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0,
    }
]


for(var i = 0; i < squadre.length; i++) {
    var squadra = squadre[i];
    for(var key in squadra) {
        if (key == "puntiFatti") {
            squadra.puntiFatti = Math.floor(Math.random() * 20) + 0;
        }
        if(key == "falliSubiti") {
            squadra.falliSubiti = Math.floor(Math.random() * 20) + 0;
            console.log(squadra);
        }
    }
} 