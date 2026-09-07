// Mini-Projet : Système de Gestion de Stock dans une Librairie ==========================================

const prompt = require("prompt-sync")()



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
}

ajouter()

function afficher(){
    for(let l of stock){
        console.log(`=> Titre: ${l.titre}, Auteur: ${l.auteur}, Prix: ${l.prix} DH, Quantite: ${l.quantite}.`)
    }
}

afficher()

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

modifier()


