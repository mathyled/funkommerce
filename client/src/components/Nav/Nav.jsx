import styles from "./Nav.module.css";
import Searchbar from "../Searchbar/Searchbar";
import { AiOutlineHome } from "react-icons/ai";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { Link } from "react-router-dom";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import ItemsQuantity from "../ItemsQuantity/ItemsQuantity";
import Order from "../Order/Order"
import Funkommerce from "../../assets/Funkommerce.png"
const Nav = () => {
  return (
    <section className={styles.nav}>
      <Link to="/">
   <img src={Funkommerce} alt="img-not found" className={styles.img} /> 
      </Link>
      <Searchbar />
      < Order />
      <Login />
      <Register />
      <Link to="/" >
        <AiOutlineHome className={styles.home} />
      </Link>
      <Link to="/cart" className={styles.linkToCart}>
        <ItemsQuantity />
        <MdOutlineAddShoppingCart className={styles.cartImg} />
      </Link>
    </section>
  );
};
export default Nav;
