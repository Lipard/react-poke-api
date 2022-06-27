import './App.css';
import {useState,useEffect} from 'react';
import getPokemonIMG from './services/getPokemonImg';
import ImgPkm from "./components/ImgPkm";

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
            singleImg => <ImgPkm key={singleImg.title} title={singleImg.title} url={singleImg.url} />
          )
        }
      </section>
    </div>
  );
}

export default App;
