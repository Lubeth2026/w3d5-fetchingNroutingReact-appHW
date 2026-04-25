
import React, { useEffect, useState } from 'react'
import Pokemon from './Pokemon';

export default function API() {
    const [pokemon, setPokemon] = useState([]);
    const [error, setError] = useState("");
//Button Logic New State//
    const [show, setShow] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
      async function goPokemon(pokemon) {
        try {
            setLoading(true)
            const res = await fetch("https://pokeapi.co/api/v2/pokemon");
            const data = await res.json();
            setPokemon(data.results)
        } catch (error){
            console.log(error)
            setError("Error: Couldn't Fetch Pokemon") 
        } finally{
            setLoading(false)
        }}
        goPokemon(); }, []);

  return (
    <div>
      <button onClick={()=> setShow(prev => !prev)}>
         {show ? "Hide Pokemon" : "Show Pokemon"}
      </button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {show && pokemon.map((pokemon)=>(
        <Pokemon key={pokemon.id} name={pokemon.name}/>
      ))}
    </div>
  );
}
