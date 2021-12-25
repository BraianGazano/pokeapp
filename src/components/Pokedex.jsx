import { useState, Component, useEffect } from "react";
import Card from "./Card";
import PokedexStyled from "./styles/PokedexStyled";
import {get} from 'axios';
const Pokedex = () => {

    const [result, setResult] = useState([]);
    const [poke, setPoke] = useState([]);
    const [load, setLoad] = useState('true');
    const pokemones = [];
    
    useEffect(() => {
      get('https://pokeapi.co/api/v2/pokemon/?limit=50', {responseType:'json'})
      .then(({data})=>{setResult(data.results.map((item)=>{
          get(item.url,{responseType:'json'})
          .then((allPokemon) => pokemones.push(allPokemon));
        setPoke(pokemones)
      }),)})
    },[]);

    setTimeout(() => {setLoad(false)}, 1000);
    return (
        <PokedexStyled>
            { load ? (
            <p>Loading...</p>
            ) : (
            poke.map((img, i) => (
            <div id={img.data.id} key={img.data.id}>
                <Card sprites={img.data.sprites} types={img.data.types} name={img.data.name}></Card>
            </div>
            ))
            )}
        </PokedexStyled>
    );
}

export default Pokedex