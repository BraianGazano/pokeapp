import { useState, useEffect } from "react";
import Card from "./Card";
import PokedexStyled from "./styles/PokedexStyled";
import {get} from 'axios';
const Pokedex = () => {

    const [search, setSearch] = useState({value:'',show:''});
    const [poke, setPoke] = useState([]);
    const [load, setLoad] = useState('true');
    const pokemones = [];
    
    useEffect(() => {  
        search.value && get(`https://pokeapi.co/api/v2/pokemon/${search.value}`)
        .then(({data})=>{
            pokemones.push(data.name, data.sprites, data.types);
            setPoke(pokemones);
        })
    },[search.value]);

    const handleChange = (e) => {
        setSearch({show: e.target.value})
    }
    const submit = (e) => {
        let busqueda = search.show.toLowerCase();
        setSearch({value: busqueda})
        e.preventDefault();
        setTimeout(() => {setLoad(false)}, 1000);
    }
    return (
        <PokedexStyled>
            <form onSubmit={(e) =>submit(e)}>
                <input type="text" onChange={(e)=>handleChange(e)} />
                <input type="submit" />
            </form>
            {load && search.show? (
            <p>Loading...</p>
            ) : (
            poke[0] && <Card sprites={poke[1]} types={poke[2]} name={poke[0]}></Card>
            )}
        </PokedexStyled>
    );
}

export default Pokedex