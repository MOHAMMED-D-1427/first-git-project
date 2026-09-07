const p = require("prompt-sync")()

// ############################################ Algorithmes de Tri #######################################

// Challenge 1 : Tri à Bulles ‼️

// Challenge 3 : Tri par Sélection ‼️ =============================================

let elements = [8, 4 ,1, 7, 1, 2, 0, 6, 5, 0];

for(x = 0; x < elements.length; x++){
  let min_idx = x;
  for(i = x+1; i < elements.length; i++){
    if(elements[i] < elements[min_idx]){
      min_idx = i;
    }
  }
  [elements[min_idx], elements[x]] = [elements[x], elements[min_idx]]
}

// console.log(elements)

// Challenge 4 : Tri Rapide =============================================

elements = [8, 4 ,1, 7, 1, 2, 0, 6, 5, 0];


// Challenge 5 : Tri Fusion =============================================



// Challenge 6 : Tri Par Comptage ================================================

elements = [8, 4 ,1, 7, 11, 2, 0, 6, 5, 0];

let max_n = elements[0];
for(x = 1; x < elements.length; x++){
  if(elements[x] > max_n){
    max_n = elements[x]
  }
}
// ---------------------------

let count = [];
for(x = 0; x <= max_n; x++){
  count.push(x);
}
// ---------------------------
function count_tri(table, max_num){
  for(ele of table){
    count[ele] = count[ele]+1
  }
  k = 0;
  for(i = 0; i <= max_num; i++){
    table[k] = i;
    k ++;
    count[i] --;
  }

  return table;
}

// console.log(elements);
// console.log(count_tri(elements, max_n));


// Challenge 7 : Tri et Recherche de Sous-tableau =============================================


// ############################################  Algorithmes de Recherche #######################################


// Challenge 1 : Recherche Linéaire ‼️ =============================================

const list = [5, 88, 10, 6, 9, 12];

function lineaire(table, to_s){
  for(let ele of list){
    if(ele == to_s){
      return true;
    }
  }
  return false;
}

console.log(lineaire(list, 9))

// Challenge 2 : Recherche Binaire ‼️ =============================================

// ====> 1. To use the binary search, we have to have a sorted data
// ====> 2. It compares the target value with the middle value on the array
// ====> 3. If the middle value is greater than the target, 
//          we use the left part form that middle value to search, 
//          otherwise we use the right part.
// ====> 4. We redo the last step until we find the target value 

const sorted_list = ["a", "b", "c", "d", "e", "f", "g"]
function binary_search(a, target){

  lo = 0;
  hi = a.length - 1;
  while (lo <= hi){

    mid = (lo + hi) // 2
    if (a[mid] == target){
      return mid
    }
    if (a[mid] < target){
      lo = mid + 1
    }
    else{
      hi = mid - 1
    }
  }

  return false;
  
}
console.log(binary_search(sorted_list, "d"))

  // console.log("G" > "H")
  
  // Challenge 3 : Recherche de l'Élément Minimum =============================================



// Challenge 4 : Recherche de l'Élément Maximum =============================================



// Challenge 5 : Recherche d'une Sous-chaîne =============================================



// Challenge 6 : Recherche de Duplication =============================================

elements = [8, 4 ,1, 7, 11, 2, 0, 6, 5, 0];

let duplicated = false;

// for(x = 0; x < elements.length--; x++){
//   for(i = 1; i < elements.length; i++){
//     console.log(elements[x], x, " - ", elements[i])
//     if(elements[x] == elements[i]){
//       console.log(elements[x], ": It's a duplicated number.");
//       duplicated = true
//       break;
//     }
//   }
//   if(duplicated){
//     break;
//   }
// }


// Challenge 7 : Recherche Binaire sur une Liste Chaînée =============================================



// Challenge 8 : Recherche de Mot dans un Textet =============================================




// console.log(`
// ===============================================================
// ***    ***
// ***    ***
//  ***  ***   ********   ***    ***
//   ******   ****  ****  ***    ***
//    ****   ****    **** ***    ***   
//    ****    ****  ****  ***    ***
//    ****     ********   **********
//          **********
//         ***            ********    *******      *******
//       ***             ****  ****   ***    **   **     **
//       ***            ****    ****  ***    ***  *********
//         ***           ****  ****   ***    **   **   
//          **********    ********    ********      ******
// ===============================================================
// `)






