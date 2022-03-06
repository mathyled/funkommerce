import styles from "./Nav.module.css";
import Searchbar from "../Searchbar/Searchbar";
import { AiOutlineHome } from "react-icons/ai";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { Link } from "react-router-dom";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import ItemsQuantity from "../ItemsQuantity/ItemsQuantity";

const Nav = () => {
  return (
    <section className={styles.nav}>
      SECTION
      <Searchbar />
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
