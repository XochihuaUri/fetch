const btn = document.querySelector(".pokemon__input-btn")
const input = document.querySelector(".pokemon__input-num")
const img = document.querySelector("#img")

btn.addEventListener("click", obtenerPokemon)

function obtenerPokemon(){
    let val = input.value
    callPokemon(val)
    li1.innerText = `# ${val}`;
    img.classList.remove("invisible")
}

function renderPokemon(image){
    img.setAttribute(`src`, image)
}

function callPokemon(value){
    fetch(`https://pokeapi.co/api/v2/pokemon/${value}/`)
    .then(response => response.json())
    .then(pokemon => {
        renderPokemon(pokemon.sprites.front_default)
    })
}


/*
const contentPokemon = document.querySelector(".pokemon__img")
const ul = document.querySelector(".pokemon__img-ul")
const li1 = document.getElementById("li1")
const li2 = document.getElementById("li2")
const li3 = document.getElementById("li3")*/
/*
function callNamePokemon(value){
    fetch(`https://pokeapi.co/api/v2/type/${value}`)
    .then(response => response.json())
    .then()
}
function callTypePokemon(value){

} */



/*
function addFeatures(){
    let ul = document.createElement("ul")
    let li1 = document.createElement("li")
    let li2 = document.createElement("li")
    let li3 = document.createElement("li")
    let content1 = document.createTextNode("#4")
    let content2 = document.createTextNode("charmander")
    //callNamePokemon()
    let content3 = document.createTextNode("Fire")
    //callTypePokemon()
    li1.appendChild(content1)
    li2.appendChild(content2)
    li3.appendChild(content3)
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    contentPokemon.appendChild(ul)
    
}*/



/* 
name
name:"ditto"
url:"https://pokeapi.co/api/v2/pokemon-form/132/"

species
name:"ditto"
url:"https://pokeapi.co/api/v2/pokemon-species/132/"

type
name:"normal"
url:"https://pokeapi.co/api/v2/type/1/"

*/

/*
<ul class="pokemon__img-ul">
                    <li class="pokemon__img-li"></li>
                    <li class="pokemon__img-li"></li>
                    <li class="pokemon__img-li"></li>
                </ul>
                */