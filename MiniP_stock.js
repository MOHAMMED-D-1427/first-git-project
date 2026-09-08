// Mini-Projet : Système de Gestion de Stock dans une Librairie ==========================================

const prompt = require("prompt-sync")()

function menu(){
    console.log("================= Mini-projet stock ===========================")

    console.log("__Les Options Disponibles_______________________")
console.log(`
    => ➕ 1. Ajouter un Livre au Stock.
    => 📑 2. Afficher Tous les Livres Disponibles.
    => 🖊️  3. Mettre à Jour la Quantité d'un Livre.
    => 🗑️  4. Supprimer un Livre du Stock.!
    => 📊 5. Afficher le Nombre Total de Livres en Stock.
    => ⬅️  7. Quitter.
`)
    console.log("===============================================================")
}

menu();

// ----------------------------------------

let stock = [];
let identifier = 0;

function ajouter(){
    console.log("  |\n  -----> 1. Ajouter une seule livre. ")
    console.log("  |\n  -----> 2. Ajouter plusieurs livres. ")
    console.log("  |\n  -----> <= Retour (Cliquez sur n'importe quel caractère). ")
    const opt = parseInt(prompt(">>> Choisir une option: "));

    let livre = {};
    if(opt == 1){
        let ttr = prompt("Entrez le titre de livre: ");
        let atr = prompt("Entrez son auteur: ");
        let prx = parseInt(prompt("Entrez son prix: "));
        let qtt = parseInt(prompt("Entrez sa quantité: "));
        identifier ++
        livre = {
            id: identifier,
            titre: ttr,
            auteur: atr,
            prix: prx,
            quantite: qtt,
        }
        stock.push(livre);
        menu();
        console.log("Le livre a sauvé ✅.")
    }else if(opt == 2){
        let num = parseInt(prompt("  |\n  ---> Entrez le nombre des livres: "));
        for(x = 1; x <= num; x++){
            let ttr = prompt(`Entrez le titre de livre n-${x}: `);
            let atr = prompt(`Entrez son auteur : `);
            let prx = parseInt(prompt(`Entrez son prix: `));
            let qtt = parseInt(prompt(`Entrez sa quantité: `));
            identifier ++
            
            livre = {
                id: identifier,
                titre: ttr,
                auteur: atr,
                prix: prx,
                quantite: qtt,
            }
            stock.push(livre);
        }
        menu();
        console.log("Les livres a sauvé ✅.")

    }else{
        menu();
        return;
    }

    // return 
}
// ---------------------------------------------------------------------
let asc_stock = stock;
let desc_stock = stock;

function asc_sort(){
    for(x = 0; x < asc_stock.length; x++){
        let min_idx = x;
        for(i = x + 1; i < asc_stock.length; i++){
            if(asc_stock[i].prix < asc_stock[min_idx].prix){
                min_idx = i;
            }
        }
        [asc_stock[min_idx], asc_stock[x]] = [asc_stock[x], asc_stock[min_idx]];
    }
    return asc_stock;
}

function desc_sort(){   
    for(x = 0; x < desc_stock.length; x++){
        let min_idx = x;
        for(i = x + 1; i < desc_stock.length; i++){
            if(desc_stock[i].prix > desc_stock[min_idx].prix){
                min_idx = i;
            }
        }
        [desc_stock[min_idx], desc_stock[x]] = [desc_stock[x], desc_stock[min_idx]];
    }
    return desc_stock;
}

function afficher(){
    if(stock.length == 0) return console.log("===> Il n'y a pas de livres à afficher <===")

    console.log("  |\n  -----> 1. Affichage sample. ")
    console.log("  |\n  -----> 2. Affichage decroissant en fonction du prix. ")
    console.log("  |\n  -----> 3. Affichage croissant en fonction du prix. ")
    console.log("  |\n  -----> <= Retour (Cliquez sur n'importe quel caractère). ")
    
    if(stock.length < 1){
        console.log("===> Il n'y a pas de livres en stock! <===")
        return ;
    }

    const opt = parseInt(prompt(">>> Choisir une option: "));

    let header = '_______________________________________________________________________________________________________'
    switch(opt){
        case 1:
            for(let l of stock){
                console.log(header)
                console.log(`| ID: ${l.id}, Titre: ${l.titre}, Auteur: ${l.auteur}, Prix: ${l.prix} DH, Quantite: ${l.quantite}.  |`)
            }
            break;
        case 2:
            console.log(header)
            for(let l of asc_sort()){
                console.log(`| ID: ${l.id}, Titre: ${l.titre}, Auteur: ${l.auteur}, Prix: ${l.prix} DH, Quantite: ${l.quantite}.  |`)
            }
            break;
        case 3:
            console.log(header)
            for(let l of desc_sort()){
                console.log(`| ID: ${l.id}, Titre: ${l.titre}, Auteur: ${l.auteur}, Prix: ${l.prix} DH, Quantite: ${l.quantite}.  |`)
            }
            break;
        default:
            menu();
            break;
    }
}

// ----------------------------------------

function modifier(){
    if(stock.length == 0) return console.log("===> Il n'y a pas de livres à modifier <===")

    const titre = prompt("Entrez le titre de livre: ");
    let trouvee = false;
    for(let l of stock){
        if(l.titre == titre){
            const qtt = prompt("Entrez la nouvel quantite: ");
            l.quantite = qtt;
            trouvee = true;
            break;
        }
    }
    if(!trouvee){
        console.log("===> Le livre est introuvable [X]. <===")
        return ;
    }
    console.log("Le livre est Modifie ✅.")
}
// ----------------------------------------

function supprimer(){
    if(stock.length == 0) return console.log("===> Il n'y a pas de livres à supprimer <===")
    const titre = prompt("Entrez le titre de livre: ");
    let newStock = [];
    let trouvee = false;
    for(let l of stock){
        if(l.titre != titre){
            newStock.push(l);
        }else{
            trouvee = true;
        }
    }
    stock = newStock;
    trouvee ? console.log("Le livre a supprime ✅.") : console.log("===> Le livre est introuvable [X]. <===")
}

while(true){
    const opt = prompt(">>> Choisir une option dans le menu(0 pour la menu): ");

    switch(opt){
        case "0":
            menu();
            break;
        case "1":
            ajouter();
            break;
        case "2":
            afficher();
            break;
        case "3":
            modifier();
            break;
        case "4":
            supprimer();
            break;
        case "5":
            console.log("Le Nombre Total de Livres en Stock: ",stock.length);
            break;
        case "6":
            break;
        default:
            console.log("===> Cette option n'est pas disponible! <===")
            break;
    }
    if(opt == "7"){
        break;
    }

}


// console.log("abe" < "abddc")

