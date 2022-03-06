import styles from './Nav.module.css';
import Searchbar from '../Searchbar/Searchbar';
import { AiOutlineHome } from "react-icons/ai";
import Login from '../Login/Login';
import Register from '../Register/Register';
import { Link } from 'react-router-dom';


const Nav =()=>{

    return (
      <section className={styles.nav}>
        SECTION 
        <Searchbar />
        <Login/>
        <Register/>
        <Link to="/" className={styles.linkToHome}>
        <AiOutlineHome className={styles.home} />
      </Link>
      </section>
    );
}
export default Nav;