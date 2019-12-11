
//CLASS
class List{
    
}

//FORMULAIRE
let ajouter = document.getElementById("ajouter");
let listing = document.getElementById("listing");
let formulaire = document.getElementById("formulaire");

var cpt = 0;

function ajout(cpt){
    let valeur = document.getElementById("inputText").value;
    listing.innerHTML += `
    <div id="ligne${cpt}">
    <input  class="check${cpt}" type="checkbox" onclick="barrer(${cpt})">
    <p class="texto${cpt}">${valeur}</p>
    <button class="supprimer" type="button" onclick="del(${cpt})">Supprimer</button>
    </div>
    `;
    cpt++;
}

// ajouter.addEventListener("click", ajout);
// check.addEventListener("click", barrer);
function barrer(ligne)
{
    //Liste

    let check = document.querySelector(`.check${ligne}`);
    let text = document.querySelector(`.texto${ligne}`);
    if(check.checked)
    {
        return (text.className += " barrer");
    }
    else { return (text.className = `texto${ligne}`);}
}

function del(ligne)
{
    let div = document.querySelector(`#ligne${ligne}`);
    let text = document.querySelector(`.texto${ligne}`);
    // let check = document.querySelector(`.check${ligne}`);
    // let textcontenu = text.textContent;
    
    // console.log(textcontenu);
    // if(!check.checked)
    // {
    //     if( confirm("Etes vous sur de vouloir supprimer ?") ){
    //         div.innerHTML = ``;
    //     }
    // }
    // else {
    //     div.innerHTML = ``;
    // }

    if(text.className == `texto${ligne}`)
    {
        if( confirm("Etes vous sur de vouloir supprimer ?") ){
        div.outerHTML = "";
        //     = `            
        //     <div id="ligne${ligne}">
        //     <input  class="check${ligne}" type="checkbox" onclick="barrer(${ligne})">
        //     <p class="texto${ligne}">${textcontenu}</p>
        //     <button class="supprimer" type="button" onclick="del(${ligne})">Supprimer</button>
        //     </div>
        //     `;
        }
    }
    else {
        div.outerHTML = "" ;
        // = `
        // <div id="ligne${ligne}">
        // <input  class="check${ligne}" type="checkbox" onclick="barrer(${ligne})">
        // <p class="texto${ligne}">${textcontenu}</p>
        // <button class="supprimer" type="button" onclick="del(${ligne})">Supprimer</button>
        // </div>
        // `;
    }
}