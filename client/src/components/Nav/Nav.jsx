import styles from "./Nav.module.css";
import Searchbar from "../Searchbar/Searchbar";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { Link } from "react-router-dom";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import ItemsQuantity from "../ItemsQuantity/ItemsQuantity";
import Funkommerce3 from "../../assets/funkommerce3.png";
import { useDispatch, useSelector} from "react-redux";
import { logoutUser } from "../../redux/actions/actions";
// import { AiOutlineHome } from "react-icons/ai";
// import Order from "../Order/Order"
// import Filters from '../Filters/Filters'
// import Desplegable from "../componentsReusable/Desplegable/Desplegable";


const Nav = () => {

  const dispatch = useDispatch();
  const usuario=useSelector(state=>state.user);


  return (
    <section className={styles.nav}>
      <Link to="/">
        {console.log('el usuario es: ',usuario)}
        <img src={Funkommerce3} alt="img-not found" className={styles.img} />
      </Link>
      <Searchbar />
      <div className={styles.userbtns}>
        {!usuario && (
          <>
            <Login />
            <Register />
          </>
        )}

        {usuario && (
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

      <Link to="/cart" className={styles.linkToCart}>
        <ItemsQuantity />
        <MdOutlineAddShoppingCart className={styles.cartImg} />
      </Link>
    </section>
  );
};
export default Nav;
