
import './App.css';
import Landing from "./components/Landing/Landing";
import FunkoCard from './components/FunkoCard/FunkoCard';
import Cart from "./components/Cart/Cart";

import {Routes,Route} from "react-router-dom";
import Searchbar from './components/Searchbar/Searchbar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <Landing />} />
        <Route exact path="/search" element={ <Searchbar/>} />
      </Routes>
      <Cart></Cart>
      <FunkoCard></FunkoCard>
    </div>
  );
}

export default App;
