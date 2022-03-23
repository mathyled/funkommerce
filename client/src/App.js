import "./App.css";
import Cart from "./components/Cart/Cart";
import { Routes, Route,Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import FunkoDetail from "./components/FunkoDetail/FunkoDetail";
import CreateFunko from "./components/Form/CreateFunko";
import ContactUs from "./components/componentsReusable/ContactUs/ContactUs";
import CheckoutContainer from "./components/CheckoutContainer/CheckoutContainer";
import "./globalStyles/colors.css";
// import Footer from './components/Footer/Footer';
import About from "./components/About/About";
import Confirm from "./components/componentsReusable/SendMail/Confirm";
import ModifyFunko from "./components/Form/Modification/ModifyFunko";
import {useEffect} from 'react';
import SendMail from "./components/componentsReusable/SendMail/SendMail";
import PanelHome from "./components/AdminPanel/PanelHome/PanelHome";
import ChatbotBtn from "./components/Chatbot-btn/Chatbot-btn"
import StarRating from "./components/Reviews/StartRatting/StarRating"
import { DarkModeContext } from "./components/AdminPanel/PanelHome/DarkMode/context/darkModeContext";
import "./components/AdminPanel/PanelHome/dark.css"
import {useContext} from "react";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import {useDispatch,useSelector} from 'react-redux';
import {salveUser} from './redux/actions/actions';
// import Footer from "./components/Footer/Footer";
import SendConfirmNewPassword from "./components/componentsReusable/SendMail/SendConfirmNewPassword"
import ConfirmNewPassword from "./components/ConfirmNewPassword/ConfirmNewPassword";
import PurchaseOrders from "./components/PurcharseOrders/PurchaseOrders"

function App() {

  const { darkMode } = useContext(DarkModeContext);
  const dispatch=useDispatch();
  const user=useSelector(state=>state.user);

    useEffect(() => {
      dispatch(salveUser());
      
    }, [dispatch])

  return (
    <div className={darkMode ? "app  " : "App"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/header" element={<Header />} />
        <Route path="/detail/:id" element={<FunkoDetail />} />
        <Route path="/create" element={<CreateFunko />} />
        <Route path="/email" element={<ContactUs />} />
        <Route path="/checkout" element={(user ? <CheckoutContainer />: <Navigate to='/'/>)} />
        <Route path="/about" element={<About />} />
        <Route path="/confirm/:token" element={<Confirm />} />
        <Route
          path="/sendmail"
          element={user ? <Navigate to="/" />:<SendMail />  }
        />
        <Route
          path="/admin"
          element={
            user && user.role === "ADMIN" ? <PanelHome /> : <Navigate to="/" />
          }
        />
        <Route path="/footer" element={<ChatbotBtn />} />
        <Route path="/rating" element={<StarRating />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route
          path="/modify"
          element={user ? <ModifyFunko /> : <Navigate to="/" />}
        />
        <Route path="/sendnewpassword" element={<SendConfirmNewPassword />} />
        <Route
          path="/confirmnewpassword/:token"
          element={<ConfirmNewPassword />}
        />
        <Route path="/orders" element={<PurchaseOrders/>} />

        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );

}

export default App;
