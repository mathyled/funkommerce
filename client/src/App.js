import "./App.css";
import Cart from "./components/Cart/Cart";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import FunkoDetail from "./components/FunkoDetail/FunkoDetail";
import CreateFunko from "./components/Form/CreateFunko"
import ContactUs from "./components/componentsReusable/ContactUs/ContactUs"
import CheckoutContainer from "./components/CheckoutContainer/CheckoutContainer";
import "./globalStyles/colors.css";
// import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Confirm from "./components/componentsReusable/SendMail/Confirm";
import SendMail from "./components/componentsReusable/SendMail/SendMail";
import PanelHome from "./components/AdminPanel/PanelHome/PanelHome";
import Confirm from "./components/componentsReusable/SendMail/Confirm"
import ChatbotBtn from "./components/Chatbot-btn/Chatbot-btn"



function App() {
  return (
    <div className="App">
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/header" element={ <Header />} />
        <Route  path="/detail/:id" element={ < FunkoDetail/>} />
        <Route path="/create" element={ <CreateFunko />} />
        <Route  path="/email" element={ < ContactUs/>} />
        <Route  path="/checkout" element={ < CheckoutContainer/>} />
        <Route path='/about' element={<About />} />
        <Route path='/confirm' element={< Confirm />} />
        <Route path='/sendmail' element={< SendMail />} />
        <Route path='/admin' element={< PanelHome />} />
        <Route path= '/footer' element={<ChatbotBtn />}/>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
