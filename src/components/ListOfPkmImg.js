import { useEffect, useState } from "react"
import ImgPkm from "./ImgPkm"
import getPokemonIMG from "../services/getPokemonImg"

export default function ListOfPkmImg({params})
{   
    const {entityName,entity} = params
    
    const [pokemon,setPokemon] =useState([])
    useEffect(function() {
        getPokemonIMG({entityName},{entity})
            .then(pkmImg => setPokemon(pkmImg))
      },[entityName]) 

    return pokemon.map(({title,url}) =>
         <ImgPkm 
            key={url} 
            title={title} 
            url={url} 
        />
    )
}