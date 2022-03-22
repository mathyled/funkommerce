
import React,{useContext} from "react";
import TopBar from "./TopBar/TopBar";
import styles from "./PanelHome.module.css";
import SideBar from "./SideBar/SideBar";
import PageHome from "../Pages/Home/PageHome";
import { DarkModeContext } from "./DarkMode/context/darkModeContext";
import "./dark.css"
import {RouterContext} from './context/RoutesContext/routerContext';


const switchView=(valor)=>{

    console.log('dentro de switch :',valor)
    switch (valor) {
      case "users":
        return <h1>Soy usuario</h1>;
      case "products":
        return <h1>Soy productos</h1>;

      case "transactions":
        return <h1>Soy transacciones</h1>;

      case "analitics":
        return <h1>Soy analitics</h1>;

      case "reports":
        return <h1>Soy reports</h1>;

      case "sales":
        return <h1>Sales</h1>;

      case "home":
        return <PageHome />;
      default:
        return <PageHome />;
    }

}



const PanelHome = () => {
    const { darkMode } = useContext(DarkModeContext);
    const {viewPage}=useContext(RouterContext);
    return (
      <div className={darkMode ? "dark" : "app"}>
        <TopBar />
        <div className={styles.container}>
          {console.log("panel renderizado: ", viewPage, darkMode)}
          <SideBar />
          <div className={styles.others}>{switchView(viewPage)}</div>
        </div>
      </div>
    );
};

export default PanelHome;