// #### DEBUT CLASS ####
class List{
    constructor(text){
        this.text = text;
        this.done = false;
    }
}
//#### FIN CLASS ####

//#### DEBUT DATA ####
if(localStorage.length == 0) {
    localStorage.setItem("liste 1", "[]");
}

let listAll1 = []; //creation d'un listing
let key1 = localStorage.getItem("liste 1"); // creer par defaut une key "liste 1" dans le local storage
let listeAafficher = JSON.parse(key1); //transforme ce qu'il y a dans le localStorage en JSON

let ajouter = document.getElementById("ajouter");
let formulaire = document.getElementById("formulaire");
let listing = document.getElementById("listing");

let cpt = 0; //compteur de nbr de ligne

//#### FIN DATA ####

//#### DEBUT FONCTIONS ####

function affiche(tabs) //Fonction qui affiche la liste dans le HTML a partir des données du LocalStorage 
{
    listing.innerHTML = "";
    for(let i=0; i<tabs.length; i++){
        listing.innerHTML += `
        <hr>
        <div id="ligne${i}" class="ligne">
            <input type="checkbox"  id="check${i}" class="check" onclick="checker(this, ${i})">
            <label class="txt" for="check${i}">${tabs[i].text}</label>
            <button class="supprimer" type="submit" form="formulaire" onclick="del(this, ${i})">X</button>
        </div>`
    }
}


function checker(e, i){ //CHange la valeur de "".done"
    // console.log(e.checked);
    listAll1[i].done = e.checked;
    // console.log(listAll1[i].done);
}


function ajout(){ //Ajoute une liste au listing
    let valeur = document.getElementById("inputText").value;
    const liste = new List(valeur);
    if(localStorage.length !== 0)
    {
        listAll1 = listeAafficher;
    }
    listAll1.push(liste);
    localStorage.setItem("liste 1", JSON.stringify(listAll1));
    cpt++;    
}


function del(e, ligne) //Suppression d'une To do
{
    let div = document.getElementById(`#ligne${ligne}`);
    let check = document.getElementById(`#check${ligne}`);
    console.log(check);
    if(listAll1[ligne].done === false)
    {
        if( confirm("Etes vous sur de vouloir supprimer ?") === true){
            listAll1.splice(ligne, 1);
            localStorage.setItem("liste 1", JSON.stringify(listAll1));
            document.e.reload(true);
        }
    }
    else {
        listAll1.splice(ligne, 1);
        localStorage.setItem("liste 1", JSON.stringify(listAll1));
        document.e.reload(true);
    }

}
//#### FIN FONCTIONS ####


//#### PROGRAMME PRINCIPAL ####

    listAll1 = listeAafficher;
    affiche(listAll1);


//########## FIN ##############