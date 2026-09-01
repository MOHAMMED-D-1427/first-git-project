// Challenge 3 : Somme des N Nombres =============================================
const prompt = require('prompt-sync')();

let n = parseInt(prompt("Entrez un nomber: "))
let somme = n
while(n > 0){
    n --
    somme += n
}
console.log("La somme: ", somme)


// Challenge 4 : Affichage des N Premiers Nombres Impairs =============================================

let num = parseInt(prompt("Entrez un nomber: "))
let impairs = 1
while(num != 0){
    console.log(impairs)
    impairs += 2
    num --
}

// Challenge 5 : Calcul de la Puissance =============================================

// ################################################################# ?
// ################################################################# ?
// ################################################################# ?

// Challenge 6 : Affichage des N Premiers Nombres Pair =============================================

num = parseInt(prompt("Entrez un nomber: "))
impairs = 2
while(num != 0){
    console.log(impairs)
    impairs += 2
    num --
}

// Challenge 7 : Inversion d'un Entier =============================================

num = parseInt(prompt("Entrez un entier à plusieurs chiffres: "))
let len = num.toString().split("").length - 1
let newNum = ""
for(len; len >= 0; len--){
    newNum = newNum+num.toString()[len]
}
console.log(parseInt(newNum))

// Challenge 8 : Affichage de la Suite de Fibonacci =============================================

num = parseInt(prompt("Entrez un nombre: "))
let fibonacci = 0
for(let x = 1; x <= num; x++){
    fibonacci = fibonacci+x
}

console.log("La Suite de Fibonacci: ", fibonacci)


// // Challenge 9 : Compteur de Chiffres =============================================

num = parseInt(prompt("Entrez un nombre à plusieurs chiffres: "))
let count = 0
if(num > 0){
    for(x of num.toString().split("")){
        count++
    }
    console.log(count)
}

// Challenge 10 : Calcul de la Somme des N Entiers =============================================

num = parseInt(prompt("Entrez un nombre: "))
somme = 0

while(num != 0){
    somme += num
    num--
}

console.log(somme)




