import "./App.css";
// import Landing from "./components/Landing/Landing";
import FunkoCard from "./components/FunkoCard/FunkoCard";
import Cart from "./components/Cart/Cart";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FunkoCard />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
