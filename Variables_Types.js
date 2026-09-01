// Challenge 1 : Affichage Informations=============================================
const prompt = require('prompt-sync')();

let nom = prompt("Saisi votre nom: ")
let prenom = prompt("Saisi votre prenom: ")
let age = parseInt(prompt("Saisi votre age: "))
let sexe = prompt("Quel est votre genre ?: ")
let email = prompt("Saisi votre email: ")

console.log(`Nom: ${nom} 
Prenom: ${prenom}
Age: ${age}
Sexe: ${sexe}
Email adresse: ${email}`)

// Challenge 2 : Conversion de la température=============================================

let c = parseInt(prompt("Saisi la température en Celsius: "))
console.log("---> La température en Kelvin est: ",c+273.15)

// Challenge 3 : Conversion de la distance=============================================

let km = parseInt(prompt("Saisi la distance en kilomètres: "))
console.log("---> La distance en Yards est: ", km + 1093.61)


// Challenge 4 : Conversion de la vitesse=============================================

let kmParH = parseInt(prompt("Saisi la vitesse en kilomètres par heure (km/h): "))
console.log("---> La vitesse en mètres par seconde (m/s) est: ", kmParH * 0.27778)

// Challenge 5 : Affichage Température=============================================

let celsius = parseInt(prompt("Saisi la température en Celsius: "))
if(celsius < 0){
    console.log("L'état de l'eau est Solid")
}else if(0 <= celsius && celsius < 100){
    console.log("L'état de l'eau est Liquide")
}else{
    console.log("L'état de l'eau est Gaz")
}


// Challenge 6 : Calcul et affichage des résultats =============================================

let a = parseFloat(prompt("Saisi la valeure de a: "))
let b = parseFloat(prompt("Saisi la valeure de b: "))
console.log("a + b: ", a+b)
console.log("a - b: ", a-b)
console.log("a * b: ", a*b)
console.log("a / b: ", a/b)

// Challenge 7 : Moyenne pondérée de trois nombres =============================================

let nombre1 = parseInt(prompt("Entrez la 1er nombre: "))
let nombre2 = parseInt(prompt("Entrez la 2ème nombre: "))
let nombre3 = parseInt(prompt("Entrez la 3ème nombre: "))

m = (nombre1 * 2 + nombre2 * 3 + nombre3 * 5)/10
console.log("La moyenne pondérée: ",m)

// Challenge 8 : Calcul de la moyenne géométrique =============================================

a = parseFloat(prompt("Saisi la valeure de a: "))
b = parseFloat(prompt("Saisi la valeure de b: "))
c = parseFloat(prompt("Saisi la valeure de c: "))

console.log("La moyenne géométrique est: ", (a * b * c)^(1/3))

// Challenge 9 : Calcul de la distance entre deux points dans un espace 3D =============================================

let x1 = parseFloat(prompt("Saisi la valeure de x1: "))
let z1 = parseFloat(prompt("Saisi la valeure de z1: "))
let y1 = parseFloat(prompt("Saisi la valeure de y1: "))
let x2 = parseFloat(prompt("Saisi la valeure de x2: "))
let z2 = parseFloat(prompt("Saisi la valeure de z2: "))
let y2 = parseFloat(prompt("Saisi la valeure de y2: "))

console.log("La distance: ", Math.sqrt((x2-x1)**2 + (y2-y1)**2 + (z2-z1)**2))

// Challenge 10 : Volume d'une sphère =============================================

let rayon = parseFloat(prompt("Entrez la rayon de la sphère: "))
console.log((4/3) * Math.PI * rayon**3)

// Challenge 11 : Surface d'un rectangle =============================================

let long = parseFloat(prompt("Entrez la longueur du rectangle: "))
let larg = parseFloat(prompt("Entrez la largeur du rectanglee: "))
console.log("La surface d'un rectangle: ", long * larg)

// Challenge 12 : Nombre entier à quatre chiffres en ordre inverse=============================================

let n = prompt("Entez un nombre entier à quatre chiffres: ")
let reversed = n.split("").reverse()
console.log("Le nombre dans l'ordre inverse", reversed.join(""))

// Challenge 13 : Affichage des valeurs binaire et hexadécimale équivalentes =============================================

let num = parseInt(prompt("Entrez un nomber: "))
console.log("Binaire: ", num.toString(2), "; Hexadecimal: ",num.toString(16))



