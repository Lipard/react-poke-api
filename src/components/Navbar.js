
import { Link } from "wouter"

export default function Navbar(){

    const ELEMENTOS_MENU = 
    [
        {
            "label" :"Buscador de texto",
            "link"  :"buscador"
        },
        {
            "label" :"Ver items",
            "link"  :"lista/item"
        },
        {
            "label" :"Ver pokemons",
            "link"  :"lista/pokemon"
        }
    ]  

    return (
        <>
            <h3>Busqueda de aritulos</h3>
            <ul className='elementosMenu'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
            {
                ELEMENTOS_MENU.map((elementoBusqueda) => (
                    <li key={elementoBusqueda.link}>
                        <Link to={`/${elementoBusqueda.link}/`} >{elementoBusqueda.label}</Link>
                    </li>
                )

                )
            }
            </ul>
    </>
    )
}