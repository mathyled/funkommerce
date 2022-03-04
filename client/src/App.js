import "./App.css";
// import Landing from "./components/Landing/Landing";
import FunkoCard from "./components/FunkoCard/FunkoCard";
import Cart from "./components/Cart/Cart";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header"
import Searchbar from './components/Searchbar/Searchbar';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FunkoCard />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/header" element={ <Header />} />
        <Route exact path="/search" element={ <Searchbar/>} />
      </Routes>
    </div>
  );
}

export default App;
