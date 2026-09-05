const p = require("prompt-sync")()

// Challenge 3 : Passage d'un Objet en Argument =============================================
let rectangle = {long: 12, larg: 6}

function aire(rec){
    return rec.long * rec.larg
}

console.log("L'aire de cette rectangle est: ",aire(rectangle))

// Challenge 4 : Modification des Propriétés d'un Objet =============================================
let point_plan = {x: 50.6, y: 88.1};

function change_point(x, y){
    point_plan.x = x;
    point_plan.y = y;
}
console.log(point_plan);

change_point(77.99, 10);

console.log(point_plan);

// Challenge 5 : Objet et Fonction de Retour =============================================

let livre = p("Entrez la titre: ")
let auteur = p("Entrez la auteur: ")
let annee = p("Entrez la annee: ")

function creer_livre(tit, aur, ann){
    let livre = {
        titre: tit, auteur: aur, annee: ann
    }

    return `Titre: ${tit}, Auteur: ${aur}, Annee: ${ann}.`
}

console.log(creer_livre(livre, auteur, annee))


