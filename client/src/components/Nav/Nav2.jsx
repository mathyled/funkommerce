import styles from "./Nav2.module.css";
import Order from "../Order/Order";
import Filters from "../Filters/Filters";
// import Desplegable from "../componentsReusable/Desplegable/Desplegable";

const Nav2 = () => {
  return (
    <section className={styles.nav}>
      {/* <Order /> */}
      <div className={styles.nav2}>
        <Filters />
      </div>
    </section>
  );
};
export default Nav2;
