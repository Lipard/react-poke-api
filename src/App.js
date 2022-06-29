import './App.css';
import ListOfPkmImg from './components/ListOfPkmImg';
import {Link, Route} from 'wouter'
import BuscadorTexto from './components/BuscadorTexto';
import Items from './pages/Items';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <Navbar />
        <Route component={BuscadorTexto} path='/buscador'/>
        <Route component={Items} path="/lista/:entity" />
        <Route component={ListOfPkmImg} path="/lista/:entity/:entityName" />
      </section>
    </div>
  );
}

export default App;
