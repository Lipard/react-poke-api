
import { useState,useEffect } from "react"
import getPageInfo from "../../services/getPageInfo"
import { Link } from "wouter"

export default function Items({params}){

    const {entity} = params
    const [items,setItems] =useState([])
   

    useEffect(function() {
        getPageInfo({entity})
            .then(allItems => setItems(allItems))
      },[entity]) 

    return(
        <>  
        <h3>Lista de  todos los items</h3>
        <ul className="listaEntidad">
        {
            items.map((element) => (
                <li key={element.url}>
                    <Link to={`/lista/${entity}/${element.name}/`} >{element.name}</Link>
                </li>
            )

            )
        }
        </ul>
        </>
    )
    

}