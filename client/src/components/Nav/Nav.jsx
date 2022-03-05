import styles from './Nav.module.css';
import Searchbar from '../Searchbar/Searchbar';

import Login from '../Login/Login';
import Register from '../Register/Register';



const Nav =()=>{

    return (
      <section className={styles.nav}>
        SECTION 
        <Searchbar />
        <Login/>
        <Register/>
      </section>
    );
}
export default Nav;