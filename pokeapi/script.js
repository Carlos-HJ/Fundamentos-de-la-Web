console.log("Si está conectado")
var boton = document.querySelector("#fetchPokemon")

console.log(boton)

boton.addEventListener("click", function(){
    fetch("https://pokeapi.co/api/v2/pokemon?limit=15/")
        .then(response=> response.json())
        .then(data=>{
            var pokemon = data.results;
            console.log(pokemon)
            displayPokemon(pokemon)
        })
})
function displayPokemon(pokemons){
    var pokemonList= document.querySelector("#pokemonlist")
    pokemons.forEach(pokemon =>{
        //var listItem = document.createElement("li")
        //listItem.innerText=pokemon.name
        //pokemonList.appendChild(listItem)
        fetch(pokemon.url)
        .then(response => response.json())
        .then(data=>{
            var listItem = document.createElement("li");
            listItem.innerHTML = `
                <h3>${data.name}</h3>
                <img src="${data.sprites.front_default}" alt="${data.name}">
            `;
            pokemonList.appendChild(listItem)
        })
    })
}