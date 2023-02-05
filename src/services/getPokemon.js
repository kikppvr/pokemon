const baseUrl = 'https://pokeapi.co/api/v2/pokemon';


export default function fetchPokemon(pokemon){
    // console.log(`${baseUrl}/${query.pokemon}/${pokemon}`);
    return fetch(`${baseUrl}/${pokemon}`)
}