import './App.css';
import {useState,useEffect} from 'react';
import getPokemonIMG from './services/getPokemonImg';

function App() {

  const[pokemon, updatePokemon] = useState([]) 
 
  useEffect(function() {
    getPokemonIMG({pokemonName : 'charmander'}).then(pkmImg => updatePokemon(pkmImg))
    
  },[])

  return (
    <div className="App">
      <section className="App-content">
        {
          pokemon.map(
            singleImg => {
              return <div>
                <img src={singleImg.url}/>
                <p>{singleImg.tittle}</p>
              </div>
          }
              
          )
        }
      </section>
    </div>
  );
}

export default App;
