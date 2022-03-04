
import './App.css';
import Landing from "./components/Landing/Landing";
import FunkoCard from './components/FunkoCard/FunkoCard';
import Cart from "./components/Cart/Cart";

import {Routes,Route} from "react-router-dom";
import Header from "./components/Header/Header"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Landing />} />
        <Route path="/header" element={ <Header />} />
      </Routes>
      <Cart></Cart>
      <FunkoCard></FunkoCard>
    </div>
  );
}

export default App;
