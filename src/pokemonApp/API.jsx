
import React, { useEffect, useState } from 'react'
import Pokemon from './Pokemon';

export default function API() {
    const URL = "https://pokeapi.co/api/v2/pokemon";
    const [pokemon, setPokemon] = useState([]);
    const [error, setError] = useState("");

    useEffect(()=>{
      async function goPokemon(pokemon) {
        try {
            const res = await fetch("https://pokeapi.co/api/v2/pokemon");
            const data = await res.json();
            setPokemon(data.results)
        } catch (error) {
            console.log(error)
            setError("Error: Couldn't Fetch Pokemon") 
        }}
        goPokemon(); }, []);

  return (
    <div>
      <h2>Pokemon Gotta Catch Em' All</h2>
      {console.log(pokemon)}
      {pokemon.map((pokemon)=>(
        <Pokemon key={pokemon.id} name={pokemon.name}/>
      ))}
      {error && <p>{error}</p>}
    </div>
  );
}
