import './App.css';
import {useState} from 'react';

function App() {
  const Pokemons =[
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png"

  ]
  const FemalePokemons = [
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/25.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png"
  ]

  const[pokemon, updatePokemon] = useState(Pokemons) 
 

  return (
    <div className="App">
      <section className="App-content">
        {
          pokemon.map(
            singleImg => <img src={singleImg}/>
          )
        }
        <button onClick={() => updatePokemon(FemalePokemons)}>View Female</button>
      </section>
    </div>
  );
}

export default App;
