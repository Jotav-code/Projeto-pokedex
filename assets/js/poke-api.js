export const pokeApi = {}

pokeApi.listPoke = (offseat = 0, limit = 10)=>{

    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offseat}&limit=${limit}`;

    return fetch(url)
    .then((ResponseUrl) => ResponseUrl.json())
    .then((ResponseJson) => ResponseJson.results)
    .then((ResponseUrlDetails) => {
           return Promise.all(
                ResponseUrlDetails.map((ResponseUrlDetails) => fetch(ResponseUrlDetails.url)
                .then((ReponseJsonDetails)=> ReponseJsonDetails.json()))
            )
        
    })
    .catch((error)=> console.error(error))
    
}



























































// export const pokeApi = {};

// pokeApi.listPoke = (offseat = 0, limit = 5)=>{
//     const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offseat}&limit=${limit}`;

//     return fetch(url)
//         .then((Response) => Response.json())
//         .then((JsonBody) => JsonBody.results)
//         .then((pokeUrl) => pokeUrl.map( (pokeUrl) => {
//             return fetch(pokeUrl.url).then((response)=> response.json())
//         }))
//         .then((Details)=> Promise.all(Details))
//         .then((pokemonDetails)=> console.log(pokemonDetails))
// }

