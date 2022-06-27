import './App.css';
import {useState} from 'react';
import ListOfPkmImg from './components/ListOfPkmImg';
import {Route, useLocation} from 'wouter'

function App() {

  const[namePokemon, setNamePokemon] = useState('charmander') 
  const[location,setLocation]=useLocation()

 
  return (
    <div className="App">
      <section className="App-content">
        <input id='namePokemon'></input>
        <button onClick={()=> 
            {
              let inputValuePkmName = document.querySelector('#namePokemon').value
              let href = "/pokemon/"+inputValuePkmName
              setLocation(href)
            }
          }>Change to new Pokemon</button>
          
        <Route component={ListOfPkmImg} path="/pokemon/:pokemonName" />
      </section>
    </div>
  );
}

export default App;
