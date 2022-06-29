import './App.css';
import ListOfPkmImg from './components/ListOfPkmImg';
import {Link, Route} from 'wouter'
import BuscadorTexto from './components/BuscadorTexto';
import Items from './pages/Items';

function App() {

  const ARTICULOS_BUSQUEDA = 
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
    <div className="App">
      <section className="App-content">
      <h3>Busqueda de aritulos</h3>
        <ul className='elementosMenu'>
            <li>
                <Link to='/'>Home</Link>
            </li>
        {
            ARTICULOS_BUSQUEDA.map((elementoBusqueda) => (
                <li key={elementoBusqueda.link}>
                    <Link to={`/${elementoBusqueda.link}/`} >{elementoBusqueda.label}</Link>
                </li>
            )

            )
        }
        </ul>
        <Route component={BuscadorTexto} path='/buscador'/>
        <Route component={Items} path="/lista/:entity" />
        <Route component={ListOfPkmImg} path="/lista/:entity/:entityName" />
      </section>
    </div>
  );
}

export default App;
