import { useState, Component, useEffect } from "react";
import Card from "./Card";
import PokedexStyled from "./styles/PokedexStyled";

const Pokedex = () => {

    const [result, setResult] = useState([]);
    const [poke, setPoke] = useState([]);
    const [load, setLoad] = useState('true');
    const pokemones = [];
    
    useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon/?limit=50')
      .then((response) => response.json())
      .then((data) => setResult(
      data.results.map((item) => {
      fetch(item.url)
      .then((response) => response.json())
      .then((allpokemon) => pokemones.push(allpokemon));
      setPoke(pokemones);}),));}, []);

    setTimeout(() => {
    setLoad(false);
    }, 1000);
    return (
        <PokedexStyled>
            { load ? (
            <p>Loading...</p>
            ) : (
            poke.map((img, i) => (
            <div id={img.id} key={img.id}>
                <Card sprites={img.sprites} types={img.types} name={img.name}></Card>
            </div>
            ))
            )}
        </PokedexStyled>
    );
}

 
export default Pokedex;