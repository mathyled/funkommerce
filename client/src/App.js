
import './App.css';
import Landing from "./components/Landing/Landing";
import FunkoCard from './components/FunkoCard/FunkoCard';
import Cart from "./components/Cart/Cart";

import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Landing />} />
      </Routes>
      <Cart></Cart>
      <FunkoCard></FunkoCard>
    </div>
  );
}

export default App;
