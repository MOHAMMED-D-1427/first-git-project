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
// ----------------------------------- Another way
// let ligne = prompt("entre le nombre de lignes : "); 
// for(let i= 1; i<=ligne;i++){
//  let sp = ""; //declarer empty string
//  for(let j=1; j<=ligne-i;j++){
//     sp+=" ";
//  } 
//  for(let j=1;j<2*i;j++){
//    sp+="*";
//  } 
//  console.log(sp); 
// }

// Pyramide Upside down ---------------------

// star = "*";
// rep = num    
// let space = "";
// for(let x = 1; x < num+2; x++){
//     for(let i = 0; i < rep;i++){
//         star = star+"**";
//     }
//     rep -= 1;
//     console.log(space,star);
//     space +=" ";
//     star = "*"
// }

// Empty Pyramide ---------------------

star = "*"
rep = num
rep2 = 1
for(x = 0; x < num; x++){
    let space = "";
    let spaceIn = "";
    for(i = 1; i < rep; i++){
        space += " ";
    }
    rep--
    if(x > 0){
        for(y = 1; y < rep2*2; y++){
            spaceIn += " ";
        }
        rep2 ++;
        spaceIn += "*";
    }
    console.log(space+star+spaceIn)
}


// Challenge 3 : Affichage des Nombres Premiers =============================================

// num = parseInt(prompt("Entrez un nombre: "));

// for(let x = 2; x <= num; x++){
//     let is_premier = true;
//     let n_premier = 0;
//     for(let i = 2; i <= 2; i++){
//         n_premier = x;
//         if(x % i == 0){
//             is_premier = false;
//             break;
//         }
//     }
//     if(is_premier){
//         console.log(n_premier)
//     }
//     is_premier = true
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




// procedure countingSort(A, max):
//   count := array of zeros [0..max]
//   for each x in A:
//     count[x] := count[x] + 1
//   k := 0
//   for i := 0 to max do
//     while count[i] > 0 do
//       A[k] := i
//       k := k + 1
//       count[i] := count[i] - 1
//     end while
//   end for
// end proc





