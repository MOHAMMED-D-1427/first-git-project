
const p = require("prompt-sync")();

// Challenge 3 : Concaténation de Chaînes =============================================

let char1 = p("Entrez une chaîne de caractères 1: ")
let char2 = p("Entrez une chaîne de caractères 2: ")

function concat(ch1, ch2){
    console.log(ch1 + ch2)
}
concat(char1, char2);

// Challenge 4 : Comparaison de Chaînes =============================================

char1 = p("Entrez une chaîne de caractères 1: ")
char2 = p("Entrez une chaîne de caractères 2: ")

function compare(c1, c2){
    console.log(`"${c1}" et "${c2}" sont égales? : `, c1 == c2)
}
compare(char1, char2)

// Challenge 5 : Inversion de Chaîne =============================================

// char = p("Entrez une chaîne de caractères: ")

// function reverse(cr){
//     charInversee = ""

//     for(const c of cr){
//         charInversee = c+charInversee;
//     }
//     console.log(charInversee)
// }


// Challenge 6 : Compte des Occurrences d'un Caractère =============================================
// chain_de_chars = p("Entrez une chaîne de caractères: ")
// char = p("Entrez une caractères: ")

// function exist_num(chain_char, char){
//     let count = 0;
    
//     for(const c of chain_char){
//         count += c == char? 1 : 0;
//     }
//     console.log(`Cette chaîne contient ${count} fois de "${char}" dans "${chain_char}"`);
// }

// exist_num()


// Challenge 7 : Conversion en Majuscules =============================================
// char = p("Entrez une chaîne de caractères: ")
// majuscules_char = ""
// for(c of char){
//     let char_num = c.codePointAt(0) - 32
//     majuscules_char += String.fromCharCode(char_num);
// }
// console.log("a".codePointAt(0))
// console.log("A".codePointAt(0))
// console.log("b".codePointAt(0))
// console.log("B".codePointAt(0))
// console.log(majuscules_char)

// Challenge 8 : Conversion en Minuscules =============================================

// char = p("Entrez une chaîne de caractères: ")
// minuscules_char = ""
// for(c of char){
//     let char_num = c.codePointAt(0) + 32
//     minuscules_char += String.fromCharCode(char_num);
// }

// console.log(minuscules_char)

// Challenge 9 : Suppression des Espaces =============================================
// char = p("Entrez une chaîne de caractères avec des espaces: ")
// new_char = ""

// for(const c of char){
//     new_char += c != " " ? c : ""
// }

// console.log(new_char)

// Challenge 10 : Trouver un Sous-String =============================================
chars = "Trouver un Sous StrO-String";
chars_len = 0;
sous_chars = "String";
sous_chars_len = 0; 
first_char_idx = 0;
chars_found = 0; 

// -------------------------
for(const c of chars){
    chars_len ++
}
for(const c of sous_chars){
    sous_chars_len ++
}
// ---------------------------
for(sc=0; sc <= sous_chars_len; sc++){

    for(let c=first_char_idx; c <= chars_len; c++){
        if(sous_chars[sc] == chars[c]){
            first_char_idx = c+1;
            chars_found ++;
            console.log("Sous ch: ",sous_chars[sc], 
                "; chars: ",chars[c],"; ",chars_found," <==========")
            break;
        }else{
            first_char_idx = c;
            sc = 0;
            chars_found = 0;
            console.log("Sous ch: ",sous_chars[sc], 
                "; chars: ",chars[c],"; ",chars_found)
        }
    }

    if(chars_found == sous_chars_len){
        console.log(true)
        break
    }
    
}




