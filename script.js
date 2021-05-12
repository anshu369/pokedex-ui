let pokemonUrl = `https://pokeapi.co/api/v2/pokemon/`;
let pokemonImageUrl = "https://pokeres.bastionbot.org/images/pokemon/";
const pokemonCount = 5;

const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
};


let pokemonWindow = document.getElementById("poke-id");

async function getPokemon(id) {

    let pokemonResponse = await fetch(pokemonUrl + id);
    let pokemonJson = await pokemonResponse.json();

    return pokemonJson;
}

getAllPokemon();

async function getAllPokemon() {
    for (let i = 1; i <= pokemonCount; i++) {
        let pokemon = await getPokemon(i);
        console.log(pokemon);
        console.log(pokemon.name.toUpperCase());
        createPokemonCard(pokemon);
    }
}

function createPokemonCard(pokemon) {

    let pokeCard = document.createElement('div');
    pokeCard.className = "pokeClass";
    let pokeImageUrl = pokemonImageUrl + pokemon.id + ".png";
    console.log(pokeImageUrl);
    let innerHtml = `<img class="pokeImage" src=${pokeImageUrl}><small class="pokeId">#${pokemon.id}</small><h3 class="pokeText">${pokemon.name[0].toUpperCase()+pokemon.name.slice(1)}</h3><h5>${pokemon.types[0].type.name}</h5>`;
    pokeCard.innerHTML = innerHtml;
    pokemonWindow.appendChild(pokeCard);
}