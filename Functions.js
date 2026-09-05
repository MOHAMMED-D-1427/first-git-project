const prompt = require("prompt-sync")()
// Menu ####################################################
function menu(){

    console.log(`1. Somme\n2. Soustraction\n3. Multiplication\n4. Division\n5. Quitter`)
    const opt = prompt("Choisis une option: ")

    function somme(n1, n2){
        return n1 + n2;
    }
    function soustraction(n1, n2){
        return n1 - n2;
    }
    function multip(n1, n2){
        return n1 * n2
    }
    function division(n1, n2){
        return n1 / n2;
    }

    function operation(opt){
        if(opt == 5){
            return ;
        }
        if(opt > 0 && opt < 5 ){
            const num1 = parseInt(prompt("Entrez le nombre 1: "))
            const num2 = parseInt(prompt("Entrez le nombre 2: "))
        
            switch(opt){
                case "1":
                    console.log(somme(num1, num2));
                    break;
                case "2":
                    console.log(soustraction(num1, num2));
                    break;
                case "3":
                    console.log(multip(num1, num2));
                    break;
                case "4":
                    console.log(division(num1, num2));
                    break;
                    default:
            }
        }else{
            console.log(`=====================================\n This option {${opt}} is not available!\n=====================================`)                            
            }
    }
    operation(opt)         
}

// menu()

// Challenge 3 : Fonction de Maximum ======================================

// let num1 = parseInt(prompt("Entrez le nombre 1: "))
// let num2 = parseInt(prompt("Entrez le nombre 2: "))

function max_num(n1, n2){
    if(n1 > n2){
        console.log("Le max est: ",n1)
        return ;
    }
    console.log("Le max est: ",n2)
    return ;
}
// max_num(num1, num2);

// Challenge 4 : Fonction de Minimum ======================================

// num1 = parseInt(prompt("Entrez le nombre 1: "))
// num2 = parseInt(prompt("Entrez le nombre 2: "))

function min_num(n1, n2){
    if(n1 < n2){
        console.log("Le min est: ",n1)
        return ;
    }
    console.log("Le min est: ",n2)
    return ;
}
// min_num(num1, num2);

// Challenge 5 : Fonction de Factorielle ======================================
// num = parseInt(prompt("Entrez un nombre : "))

function factorielle(n){
    if(n > 0){
        let fact = 1;
        for(x = 1; x <= n; x++){
            fact *= x;
        }
        console.log(fact);
    }
}
// factorielle(num)

// Challenge 6 : Fonction de Fibonacci ======================================

// num = parseInt(prompt("Entrez un nombre : "))

function fibonacci(n){
    let fibo = 0;
    for(x = 1; x <= n; x++){
        fibo += x;
    }
    console.log(fibo)
}
// fibonacci(num)

// Challenge 7 : Fonction de Compte à Rebours ======================================
num = parseInt(prompt("Entrez un nombre : "))

function compte_rebours(n){
    console.log(n)
    n--
    if(n < 0){
        return ;
    }
    return compte_rebours(n);
}

compte_rebours(num);

// Challenge 8 : Fonction de Vérification de Parité ======================================

// num = parseInt(prompt("Entrez un nombre : "))

function isPair(n){
    return n % 2 == 0
}

// console.log(isPair(num))


