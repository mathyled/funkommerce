import styles from "./Home.module.css";
import Nav from "../Nav/Nav";
import FunkoCardContainer from "../FunkoCardContainer/FunkoCardContainer";
import Nav2 from "../Nav/Nav2";

const Home = () => {
  return (
    <div >
      <div>
        <Nav />
      </div>
      <div className={styles.divNavAndCards}>
        <div className={styles.navFilters}>
          <Nav2 />
        </div>
        <div className={styles.funkoCard}>
          <FunkoCardContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
