const p = require("prompt-sync")();

// Challenge 3 : Somme des Éléments =============================================

let num = parseInt(p("Entrez la nomre des éléments: "))

function somme_ele(n){
    let somme = 0;
    let elements = [];
    
    for(x = 1; x <= n; x++){
        let ele = parseInt(p(`Entrez l'élément n°${x} : `));
        elements.push(ele);
        somme += ele;
    }
    console.log("La somme des éléments est: ", somme)
}

somme_ele(num);

// Challenge 4 : Trouver le Maximum =============================================
num = parseInt(p("Entrez la nomre des éléments: "))

function my_max(n){
    let elements = [];
    let max = 0;
    
    for(x = 1; x <= n; x++){
        let ele = parseInt(p(`Entrez l'élément n°${x} : `));
        elements.push(ele);
    }
    max = elements[0];
    for(x = 1; x <= elements.length; x++){
        if(max < elements[x]){
            max = elements[x];
        }
    }

    console.log("Le max est: ", max);
}

my_max(num);

// Challenge 5 : Trouver le Minimum =============================================

num = parseInt(p("Entrez la nomre des éléments: "))

function my_min(n){
    let elements = [];
    let min = 0;
    
    for(x = 1; x <= n; x++){
        let ele = parseInt(p(`Entrez l'élément n°${x} : `));
        elements.push(ele);
    }
    min = elements[0];
    for(x = 1; x <= elements.length; x++){
        if(min > elements[x]){
            min = elements[x];
        }
    }
    console.log("Le min est: ", min);
}

my_min(num);

// Challenge 6 : Multiplication des Éléments =============================================

num = parseInt(p("Entrez la nomre des éléments: "))

function multi_elements(n){
    let elements = [];
    let mult_elms = [];
    
    for(x = 1; x <= n; x++){
        let ele = parseInt(p(`Entrez l'élément n°${x} : `));
        elements.push(ele);
    }
    const facteur = parseInt(p("Entrez  le facteur de multiplication: "))
    for(x = 0; x < n; x++){
        mult_elms.push(elements[x]*facteur);
    }
    
    console.log("Multiplicated elements: ", mult_elms);
}

multi_elements(num)

// Challenge 7 : Tableau en Ordre Croissant =============================================

num = parseInt(p("Entrez la nomre des éléments: "))
let elements = [8, 4 ,1, 7, 1, 2, 0, 6, 5, 0];
let elements2 = [8, 4 ,1, 7, 1, 2, 0, 6, 5, 0];

function my_sort(table){
    idx = 0
    for(x = 0; x < table.length-1; x++){
        if(table[x] > table[x+1]){
            [table[x], table[x+1] ]= [table[x+1], table[x]]
            for(i = x; i >= 0; i--){
                    if(table[i] > table[i+1]){
                        [table[i], table[i+1] ] = [table[i+1], table[i]]
                    }                
                }
            }
        }
        console.log(table)
        
    }
my_sort(elements)



// ________________________ Way 2
function my_sort2(table){
    idx = 0
    for(x = 0; x < table.length-1; x++){
        swapped = false
            [table[x], table[x+1] ]= [table[x+1], table[x]]
            for(i = x; i >= 0; i--){
                if(table[i] > table[i+1]){
                    [table[i], table[i+1] ] = [table[i+1], table[i]]
                }                
            }
            if(swapped == false) break
            // }
        }
        console.log(table)    
    }
    
my_sort2(elements2)

// Challenge 8 : Copie d'un Tableau =============================================
let origin_table = [8, 4 ,1, 7, 1, 2, 0, 6, 5, 0];
let copied_table = [];

copied_table = [...origin_table];

origin_table[0] = 1;
console.log("Origin: ",origin_table)
console.log("Copied: ",copied_table)


// Challenge 9 : Inversion d'un Tableau =============================================
org_t = [8, 4 ,1, 7, 1, 2, 0, 6, 5, 0];
reversed_t = [];
let t_len = org_t.length-1; 
while(t_len >= 0){
    reversed_t.push(org_t[t_len])
    t_len--
}

console.log("Origin table: ",org_t)
console.log("Reversed table: ",reversed_t)

// Challenge 10 : Rechercher un Élément =============================================

num = parseInt(p("Entrez la nomre des éléments: "))
elements = [];

for(x = 1; x <= num; x++){
    let ele = parseInt(p(`Entrez l'élément n°${x} : `));
    elements.push(ele);
}
ele_a_rech = parseInt(p("Entrez   l'élément à rechercher: "))
console.log(elements)

function rechercher(table, element){
    for(x = 0; x < num; x++){
        if(table[x] == element){
            console.log(true)
            return ;
        }
    }
    console.log(false)
}

rechercher(elements, ele_a_rech);

// Challenge 11 : Remplacer un Élément =============================================

num = parseInt(p("Entrez la nomre des éléments: "))
elements = [];

for(x = 1; x <= num; x++){
    let ele = parseInt(p(`Entrez l'élément n°${x} : `));
    elements.push(ele);
}
ele_a_remp = parseInt(p("Entrez   l'élément à remplacer: "))
new_ele = parseInt(p("Entrez   la nouvel élément: "))
console.log(elements)

function remplacer(table, element, new_ele){
    for(x = 0; x < num; x++){
        if(table[x] == element){
            table[x] = new_ele
        }
    }
    console.log(elements)
}

remplacer(elements, ele_a_remp, new_ele);

// Challenge 12 : Afficher les Éléments Paire =============================================
num = parseInt(p("Entrez la nomre des éléments: "))
elements = [];

for(x = 1; x <= num; x++){
    let ele = parseInt(p(`Entrez l'élément n°${x} : `));
    elements.push(ele);
}

console.log(elements)

function elements_paire(table){
    let eles_paire = []; 
    for(x = 0; x < num; x++){
        if(table[x] % 2 == 0){
            eles_paire.push(table[x])
        }
    }
    console.log(eles_paire)
}
elements_paire(elements)

// Challenge 13 : Afficher les Éléments Impairs =============================================

num = parseInt(p("Entrez la nomre des éléments: "))
elements = [];

for(x = 1; x <= num; x++){
    let ele = parseInt(p(`Entrez l'élément n°${x} : `));
    elements.push(ele);
}

console.log(elements)

function elements_impaire(table){
    let eles_impaire = []; 
    for(x = 0; x < num; x++){
        if(table[x] % 2 !== 0){
            eles_impaire.push(table[x])
        }
    }
    console.log(eles_impaire)
}
elements_impaire(elements)

// Challenge 14 : Calculer la Moyenne =============================================

num = parseInt(p("Entrez la nomre des éléments: "))
elements = [];

for(x = 1; x <= num; x++){
    let ele = parseInt(p(`Entrez l'élément n°${x} : `));
    elements.push(ele);
}

console.log(elements)

function my_moyenne(table){
    let somme = 0; 
    for(x = 0; x < num; x++){
        somme += table[x]
    }
    let moyenne = somme / num;
    console.log("La moyenne des éléments: ",moyenne)
}
my_moyenne(elements)



// Challenge 15 : Fusion de Deux Tableaux =============================================

let elements1 = [];
elements2 = [];

for(i = 1; i <= 2; i++){
    num = parseInt(p(`Entrez la nomre des éléments de Table ${i} :`))
    for(x = 1; x <= num; x++){
        let ele = parseInt(p(`Entrez l'élément n°${x} : `));
        i == 1 ? elements1.push(ele) : elements2.push(ele);
    }
}

function fusionner(t1, t2){
    return [...t1 , ...t2];
}

console.log(fusionner(elements1, elements2));



