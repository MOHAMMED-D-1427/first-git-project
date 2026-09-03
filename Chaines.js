
const p = require("prompt-sync")();

// Challenge 3 : Concaténation de Chaînes =============================================

// let char1 = p("Entrez une chaîne de caractères 1: ")
// let char2 = p("Entrez une chaîne de caractères 2: ")

// console.log(char1 + char2)

// Challenge 4 : Comparaison de Chaînes =============================================

// char1 = p("Entrez une chaîne de caractères 1: ")
// char2 = p("Entrez une chaîne de caractères 2: ")

// console.log(`"${char1}" et "${char2}" sont égales? : `, char1 == char2)

// Challenge 5 : Inversion de Chaîne =============================================

// char = p("Entrez une chaîne de caractères: ")
// charInversee = ""

// for(const c of char){
//     charInversee = c+charInversee;
// }
// console.log(charInversee)


// Challenge 6 : Compte des Occurrences d'un Caractère =============================================
// chain_de_chars = p("Entrez une chaîne de caractères: ")
// char = p("Entrez une caractères: ")
// let count = 0;

// for(const c of chain_de_chars){
//     count += c == char? 1 : 0;
// }
// console.log(`Cette chaîne contient ${count} fois de "${char}" dans "${chain_de_chars}"`);



// Challenge 7 : Conversion en Majuscules =============================================
char = p("Entrez une chaîne de caractères: ")
uppercase_char = ""
for(c of char){
    let char_num = c.codePointAt(0) - 32
    uppercase_char += String.fromCharCode(char_num);
}
// console.log("a".codePointAt(0))
// console.log("A".codePointAt(0))
// console.log("b".codePointAt(0))
// console.log("B".codePointAt(0))
console.log(uppercase_char)

// Challenge 8 : Conversion en Minuscules =============================================


// Challenge 9 : Suppression des Espaces =============================================


// Challenge 10 : Trouver un Sous-String =============================================



