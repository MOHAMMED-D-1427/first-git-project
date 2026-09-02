const prompt = require("prompt-sync")()

// Challenge 2 : Pyramide d'étoiles =============================================
let num = parseInt(prompt("Entrez un nombre: "));

// Pyramide ---------------------

// let star = "*";
// let rep = num
// for(let x = 1; x < num; x++){
//     let space = "";
//     for(let i = 0; i < rep;i++){
//         space +=" ";
//     }
//     rep -= 1;
//     console.log(space,star);
//     star = star+"**";
// }

// Pyramide Upside down ---------------------

star = "*";
rep = num    
let space = "";
for(let x = 1; x < num+2; x++){
    for(let i = 0; i < rep;i++){
        star = star+"**";
    }
    rep -= 1;
    console.log(space,star);
    space +=" ";
    star = "*"
}

// Challenge 3 : Affichage des Nombres Premiers =============================================

// let num = parseInt(prompt("Entrez un nombre: "));
// for(let x = 2; x <= num; x++){
//     let premier = true;
//     for(let i = 2; i <= num; i++){
//         if(num % i === 0){
//             premier = false;
//             // break;
//         }
//     }
//     if(premier){
//         console.log(i)
//     }
// }

// Challenge 4 : Inversion d'un Entier =============================================


// Challenge  5 : Somme des N Nombres =============================================



// Challenge 6 : Facteurs d'un Nombre =============================================



// Challenge 7 : Suite de Fibonacci =============================================



// Challenge 8 : Recherche Dichotomique =============================================



// Challenge 9 : Calcul de la Puissance =============================================



// Challenge 10 : Générateur de Mot de Passe =============================================


// Challenge 11 : Moyenne des Nombres =============================================



// Challenge 12 : Tri par Bulles =============================================



// Challenge 13 : Table de Multiplication avec Somme =============================================



// Challenge 14 : Sélection de Sortie =============================================



// Challenge 15 : Calcul de la Factorielle =============================================










