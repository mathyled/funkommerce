import Chart from "../../PanelHome/chart/Chart";
import styles from "./PageHome.module.css";
import { userData } from "../../PanelHome/data";
import funkommerce3 from '../../../../assets/Funkommerce.png'

export default function PageHome() {
  return (
    <div className={styles.home}>
    
      <div className={styles.homeWidgets}>
       <img src={funkommerce3} alt="logo" width="700px"/> 
     
      </div>
    </div>
  );
}
