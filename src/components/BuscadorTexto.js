
import { useLocation} from 'wouter'


export default function BuscadorTexto({entity}= 'pokemon'){

    const[location,setLocation]=useLocation()

    return (
        <div className="buscadorTexto">
            <input id='name'/>
            <input id='entity'/>
            <button onClick={()=> 
                {
                let inputValueName = document.querySelector('#name').value
                let inputValueEntity = document.querySelector('#entity').value
                let href = `/lista/${inputValueEntity}/${inputValueName}`
                setLocation(href)
                }
            }>Change to new Pokemon</button>
        </div>
    )
}