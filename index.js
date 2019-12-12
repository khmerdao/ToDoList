// #### DEBUT CLASS ####
class List{
    constructor(text){
        this.text = text;
        this.done = false;
    }
}
//#### FIN CLASS ####

//#### DEBUT DATA ####
console.log("la key = "+localStorage.getItem("liste 1")); // creer par defaut une key "liste 1" dans le local storage
if(localStorage.length == 0) { //insere une liste vide par defaut dans le localStorage si il est vide
    localStorage.setItem("liste 1", "[]"); 
}
else if(localStorage.getItem("liste 1") == null){
    localStorage.setItem("liste 1", "[]"); 
}

let key1 = localStorage.getItem("liste 1");
let listAll1 = []; //creation d'un listing
let listeAafficher = JSON.parse(key1); //transforme ce qu'il y a dans le localStorage en JSON

let ajouter = document.getElementById("ajouter");
let formulaire = document.getElementById("formulaire");
let listing = document.getElementById("liste1");

ajouter.className = "red";

let nbrLigneMax = 5; //compteur de nbr de ligne
let nbrSlide = 1; // nbr de slide par defaut



//#### FIN DATA ####

//#### DEBUT FONCTIONS ####

// function affiche(tabs) //Fonction qui affiche la liste dans le HTML a partir des données du LocalStorage 
// {
//     listing.innerHTML = "";
//     for(let i=0; i<tabs.length; i++){
//         listing.innerHTML += `
//         <div id="ligne${i}" class="ligne">
//             <input type="checkbox"  id="check${i}" class="check" onclick="checker(this, ${i})">
//             <label class="txt" for="check${i}">${tabs[i].text}</label>
//             <button class="supprimer" type="submit" form="formulaire" onclick="del(this, ${i})">X</button>
//         </div>`
//     }
// }

function afficheCarousel(tabs) //Nouvel fonction affiche pour le carousel 
{
    let limite = 0;
    for(let j=0; j<nbrSlide; j++) // 3 slides
    {
        console.log("limite = "+limite);
        let liste = document.getElementById(`liste${j}`);
        console.log(liste);
        for(let i=limite; i<limite+nbrLigneMax; i++){ // 5 lignes
            if(tabs[i].done == true){ //verif si la tache est faite oup pas
                liste.innerHTML += `
                <div id="ligne${i}" class="ligne">
                    <input type="checkbox"  id="check${i}" class="check" onclick="checker(this, ${i})" checked>
                    <label class="txt" for="check${i}">${tabs[i].text}</label>
                    <button class="supprimer" type="submit" form="formulaire" onclick="del(this, ${i})">X</button>
                </div>`;
            }
            else{
                liste.innerHTML += `
                <div id="ligne${i}" class="ligne">
                    <input type="checkbox"  id="check${i}" class="check" onclick="checker(this, ${i})">
                    <label class="txt" for="check${i}">${tabs[i].text}</label>
                    <button class="supprimer" type="submit" form="formulaire" onclick="del(this, ${i})">X</button>
                </div>`;
            }
        }
        limite = limite + nbrLigneMax;
    }
}

function checker(e, i){ //CHange la valeur de "".done"
    // console.log(e.checked);
    listAll1[i].done = e.checked;
    localStorage.setItem("liste 1", JSON.stringify(listAll1));  
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
        }
    }
    else {
        listAll1.splice(ligne, 1);
        localStorage.setItem("liste 1", JSON.stringify(listAll1));
    }

}

function ajoutSlide(nbrSlide){
    //ajout un slide
    let slide = document.getElementById("carouselSlide");
    slide.innerHTML += `
    <div id="liste${nbrSlide}" class="carousel-item">
    </div>
    `;

    //ajout le l'icone rectangulaire du slide
    let barreSlide = document.querySelector(".carousel-indicators");
    barreSlide.innerHTML +=  `
        <li data-target="#carouselToDo" data-slide-to="${nbrSlide}"></li>
    `;
}

function createSlide(tabs){
    if(tabs.length > nbrLigneMax){
        for(let i = 1; i<nbrSlide; i++){
            ajoutSlide(i);
        }
    }
}
//#### FIN FONCTIONS ####


//#### PROGRAMME PRINCIPAL ####

    listAll1 = listeAafficher;
    nbrSlide = listAll1.length/nbrLigneMax;
    console.log(Math.ceil(nbrSlide) + " Slides");
    createSlide(listAll1);
    afficheCarousel(listAll1);
    console.log("Taille du tableau = "+listAll1.length);

//########## FIN ##############