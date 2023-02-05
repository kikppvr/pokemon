import React , { useState }from 'react';
import Search from '../components/Search';
import fetchPokemon from '../services/getPokemon';
import PokemonData from '../components/PokemonData';
import { Spinner } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
// import axios from 'axios';

export default function HomePage(){

    const [pokemon, setPokemon] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMSg] = useState(false);

    const getPokemon = async (query) => {

        if(!query) {
            setErrorMSg('You must enter a pokemon');
            setError(true);
            return;
        }
        setError(false);
        setLoading(true);
        setTimeout(async () => {
          try{
            const response = await fetchPokemon(query);
            const results = await response.json();
            // console.log(response);
            setPokemon(results);
            setLoading(false);

          } catch(err){
            console.log(err);
            setLoading(false);
            setError(true);
            setErrorMSg('Pokemon not found.');
          }
        }, 1000);

    }

    // useEffect(() => {
    //   axios.get('https://pokeapi.co/api/v2/pokemon').then(res => {
    //     setPokemonList(res.data.results.map(p => p.name))

    //   });
    // }, [])

    return (
     
        <section className="section">
            {error ? (
                <Alert variant="danger">
                        {errorMsg}
                </Alert>
            ) : null}

           <Search getPokemon={getPokemon}/>
           {loading ? <Spinner animation="border"/> : null }
           {!loading && pokemon ? (
            <PokemonData 
                    name={pokemon.name}
                    sprite={pokemon.sprites.front_shiny}
                    abilities={pokemon.abilities}
                    stats={pokemon.stats}
                    types={pokemon.types} />
           
           ): null}

        </section>

    )
}

