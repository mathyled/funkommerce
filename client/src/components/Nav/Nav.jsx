import styles from "./Nav.module.css";
import Searchbar from "../Searchbar/Searchbar";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { Link } from "react-router-dom";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import ItemsQuantity from "../ItemsQuantity/ItemsQuantity";
import Funkommerce3 from "../../assets/funkommerce3.png";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/actions/actions";

import { useEffect } from "react";

// import LoginAunth0 from "../LoginAuth0/LoginAuth0";
 import Profile from "../Profile/Profile";
// import LoginOutAuth0 from "../LoginOutAuth0/LoginOutAuth0";
// import { useAuth0 } from "@auth0/auth0-react";

// import { AiOutlineHome } from "react-icons/ai";
// import Order from "../Order/Order"
// import Filters from '../Filters/Filters'
// import Desplegable from "../componentsReusable/Desplegable/Desplegable";

const Nav = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userGoogle);
  const token = useSelector((state) => state.token);
  

  // const { isAuthenticated } = useAuth0();
  useEffect(() => {}, [ItemsQuantity]);


  return (
    <section className={styles.nav}>
      <Link to="/">
        <img src={Funkommerce3} alt="img-not found" className={styles.img} />
      </Link>
      <Searchbar />
      <div className={styles.userbtns}>
        {!token ? (
          <>
            { token ? (
              <div className={styles.auth}>
              <button>Logout</button>
              <Profile />
              </div>
            ) : (
              <div className={styles.auth}>
            
                <Login />  
                  <Register />
             
            
              </div>
            )}
          </>
        ):token && (
          <button
            className={styles.logout}
            onClick={(event) => {
              dispatch(logoutUser());
              
            }}
          >
            LOGOUT
          </button>
        )}
      </div>
      <div>
        {/* {user.role === "ADMIN" ? <button> <Link to ="/admin"> Settings </Link> </button> : ""} */}
      </div>
      <Link to="/cart" className={styles.linkToCart}>
        <ItemsQuantity />
        <MdOutlineAddShoppingCart className={styles.cartImg} />
      </Link>
    </section>
  );
};
export default Nav;
