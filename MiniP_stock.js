// Mini-Projet : Système de Gestion de Stock dans une Librairie ==========================================

const prompt = require("prompt-sync")()

console.log("================= Mini-projet stock ===========================")
console.log("__Les operations disponibles_______________________")
console.log(`
    => ➕ 1. Ajouter un Livre au Stock.
    => 📑 2. Afficher Tous les Livres Disponibles.
    => 🖊️ 3. Mettre à Jour la Quantité d'un Livre.
    => 🗑️ 4. Supprimer un Livre du Stock.
    => 📊 5. Afficher le Nombre Total de Livres en Stock.
`)
console.log("===============================================================")

// ----------------------------------------

let stock = [];

function ajouter(){
    let ttr = prompt("Entrez le titre de livre: ");
    let atr = prompt("Entrez son auteur: ");
    let prx = parseInt(prompt("Entrez son prix: "));
    let qtt = parseInt(prompt("Entrez sa quantité: "));
    let livre = {
        titre: ttr,
        auteur: atr,
        prix: prx,
        quantite: qtt,
    }

    stock.push(livre);
    console.log("Le livre a sauvé ✅.")
    return 
}
// ----------------------------------------


function afficher(){
    for(let l of stock){
        console.log(`=> Titre: ${l.titre}, Auteur: ${l.auteur}, Prix: ${l.prix} DH, Quantite: ${l.quantite}.`)
    }
}

// ----------------------------------------

function modifier(){
    const titre = prompt("Entrez le titre de livre: ");
    const qtt = prompt("Entrez la nouvel quantite: ");
    for(let l of stock){
        if(l.titre == titre){
            l.quantite = qtt;
        }
    }
    console.log("Le livre est Modifie ✅.")
}
// ----------------------------------------

function supprimer(){
    const titre = prompt("Entrez le titre de livre: ");
    let newStock = [];
    for(let l of stock){
        if(l.titre != titre){
            newStock.push(l);
        }
    }
    stock = newStock;
    console.log("Le livre a supprime ✅.")
}

while(true){
    const opt = parseInt(prompt("Choisir une opération: "));

    switch(opt){
        case 1:
            ajouter();
            break;
        case 2:
            afficher();
            break;
        case 3:
            modifier();
            break;
        case 4:
            supprimer();
            break;
        case 5:
            console.log("Le Nombre Total de Livres en Stock: ",stock.length);
            break;
        case 6:
            break;
        default:
            break;
    }

}




