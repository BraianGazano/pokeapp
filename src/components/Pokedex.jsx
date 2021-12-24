import { useState, Component, useEffect } from "react";
import Card from "./cards/Card";
import { get } from "axios";

const Pokedex = () => {

    const [result, setResult] = useState([]);
    const [poke, setPoke] = useState([]);
    const [load, setLoad] = useState('true');
    const arr = [];
    
    useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon/?limit=50')
      .then((response) => response.json())
      .then((data) => setResult(
      data.results.map((item) => {
      fetch(item.url)
      .then((response) => response.json())
      .then((allpokemon) => arr.push(allpokemon));
      setPoke(arr);}),));}, []);

    setTimeout(() => {
    setLoad(false);
    }, 1000);
    return (
        <div className="App">
            <div className='pokegallery'>
            { load ? (
            <p>Loading...</p>
            ) : (
            poke.map((img, i) => (
            <div id={img.id} key={img.id}>
                <Card sprites={img.sprites} types={img.types} name={img.name}></Card>
            </div>
            ))
            )}
            </div>
        </div>
    );
    }

 
export default Pokedex;