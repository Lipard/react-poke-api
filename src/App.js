import './App.css';
import {useState} from 'react';
import ListOfPkmImg from './components/ListOfPkmImg';

function App() {

  const[namePokemon, setNamePokemon] = useState('charmander') 

 
  return (
    <div className="App">
      <section className="App-content">
        <input id='namePokemon'></input>
        <button onClick={()=> 
            {
              let inputValuePkmName = document.querySelector('#namePokemon').value
              setNamePokemon(inputValuePkmName)
            }
          }>Change to new Pokemon</button>
          
        <ListOfPkmImg  pokemonName={namePokemon} />
      </section>
    </div>
  );
}

export default App;
