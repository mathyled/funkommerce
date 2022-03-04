import "./App.css";
// import Landing from "./components/Landing/Landing";
import FunkoCard from "./components/FunkoCard/FunkoCard";
import Cart from "./components/Cart/Cart";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header"
// import Searchbar from './components/Searchbar/Searchbar';

//================================================================


import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/header" element={ <Header />} />
      </Routes>
    </div>
  );
}

export default App;
