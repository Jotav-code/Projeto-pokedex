import { pokeApi } from "./poke-api.js";

// const pokemonTypesToLi = (poke)=>{
//     return poke.map((typos) => `<li class="type">${typos.type.name}</li>`)
// }
const offseat = 0
const limit = 5
const loadMoreItens = document.getElementById('loadMoreButton')


function displayPokemonToHtml(pokemon){
    return `<li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.order}</span>
                <span class="name">${pokemon.name}</span>
                
                <div class="datail">
                    <ol class="types">
                       ${pokemon.types.map((typos) => `<li class="type ${typos}">${typos}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>`
}

// pokeApi.listPoke().then((pokemonLista = []) =>{

//     pokemonList.innerHTML = pokemonLista.map((pokemon)=> displayPokemonToHtml(pokemon)).join('')
// })



function loadItens(offseat, limit){
    pokeApi.listPoke(offseat,limit).then((pokemonLista = []) => {
    pokemonList.innerHTML = pokemonLista.map((pokemon) => displayPokemonToHtml(pokemon)).join('');
});
}
loadItens(offseat,limit)

const pokemonList = document.getElementById('pokemonList')

loadMoreItens.addEventListener('click', ()=>{
    
})












































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