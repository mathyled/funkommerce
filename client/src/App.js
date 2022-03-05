import "./App.css";
// import Landing from "./components/Landing/Landing";
import FunkoCard from "./components/FunkoCard/FunkoCard";
import Cart from "./components/Cart/Cart";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header"

import Navbar from "./components/Navbar/Navbar"

import FunkoDetail from "./components/FunkoDetail/FunkoDetail";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FunkoCard />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/header" element={ <Header />} />
        <Route  path="/detail/:id" element={ < FunkoDetail/>} />
       
      </Routes>
    </div>
  );
}

export default App;
