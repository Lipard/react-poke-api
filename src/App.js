import './App.css';
import {useState,useEffect} from 'react';
import getPokemonIMG from './services/getPokemonImg';

function App() {

  const[pokemon, updatePokemon] = useState([]) 
 
  useEffect(function() {
    getPokemonIMG({pokemonName : 'cleffa'}).then(pkmImg => updatePokemon(pkmImg))
    
  },[])

  return (
    <div className="App">
      <section className="App-content">
        {
          pokemon.map(
            singleImg => <img src={singleImg[1]}/>
          )
        }
      </section>
    </div>
  );
}

export default App;
