import "./App.css";
import Cart from "./components/Cart/Cart";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header"
import Home from "./components/Home/Home";
import FunkoDetail from "./components/FunkoDetail/FunkoDetail";
import CreateFunko from "./components/Form/CreateFunko"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/header" element={ <Header />} />
        <Route  path="/detail/:id" element={ < FunkoDetail/>} />
        <Route path="/create" element={ <CreateFunko />} />
      </Routes>
    </div>
  );
}

export default App;
