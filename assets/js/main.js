import { pokeApi } from "./poke-api.js";

// const pokemonTypesToLi = (poke)=>{
//     return poke.map((typos) => `<li class="type">${typos.type.name}</li>`)
// }

const pokemonList = document.getElementById('pokemonList')


function displayPokemonToHtml(pokemon){
    return `<li class="pokemon">
                <span class="number">#${pokemon.order}</span>
                <span class="name">${pokemon.name}</span>
                
                <div class="datail">
                    <ol class="types">
                       ${pokemon.types.map((typos) => `<li class="type">${typos}</li>`)}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>`
}

// pokeApi.listPoke().then((pokemonLista = []) =>{

//     pokemonList.innerHTML = pokemonLista.map((pokemon)=> displayPokemonToHtml(pokemon)).join('')
// })

pokeApi.listPoke().then((pokemonLista = []) => {
    pokemonList.innerHTML = pokemonLista.map((pokemon) => displayPokemonToHtml(pokemon)).join('');
});













































// pokeApi.listPoke().then((pokemonResults = []) =>{
    
//     pokemonList.innerHTML = pokemonResults.map(displayPokemonToHtml).join('')    
    
    
    
    // const novaLista = pokemonResults.map((pokemon)=> displayPokemonToHtml(pokemon));
    
    // const newHtml = novaLista.join('')

    // pokemonList.innerHTML += newHtml;
    
    
    // const listaPokemon = [];
    
    // for (let i = 0; i < pokemonResults.length; i++) {
    //     listaPokemon.push(pokemonResults[i]);
    //     pokemonList.innerHTML += `${(displayPokemonToHtml(pokemonResults[i]))}`;
    // }
// })