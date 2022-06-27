import { useEffect, useState } from "react"
import ImgPkm from "./ImgPkm"
import getPokemonIMG from "../services/getPokemonImg"

export default function ListOfPkmImg({params})
{   
    const {pokemonName} = params
    
    const [pokemon,setPokemon] =useState([])
    useEffect(function() {
        getPokemonIMG({pokemonName})
            .then(pkmImg => setPokemon(pkmImg))
      },[pokemonName])

    return pokemon.map(({title,url}) =>
         <ImgPkm 
            key={url} 
            title={title} 
            url={url} 
        />
    )
}