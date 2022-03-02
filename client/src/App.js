
import './App.css';
import Landing from "./components/Landing.jsx";
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Landing />} />
      </Routes>
    </div>
  );
}

export default App;
