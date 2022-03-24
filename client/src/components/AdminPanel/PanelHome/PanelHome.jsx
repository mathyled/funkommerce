
import React,{useContext} from "react";
import TopBar from "./TopBar/TopBar";
import styles from "./PanelHome.module.css";
import SideBar from "./SideBar/SideBar";
import PageHome from "../Pages/Home/PageHome";
import { DarkModeContext } from "./DarkMode/context/darkModeContext";
import "./dark.css"
import {RouterContext} from './context/RoutesContext/routerContext';

import Create from "../../Form/CreateFunko";
import Modify from "../../Form/Modification/ModifyFunko"

import UsersTable from "./UserPanel/UsersTable";
import PurchaseOrders from "../../PurcharseOrders/PurchaseOrders"


const switchView=(valor)=>{

    console.log('dentro de switch :',valor)
    switch (valor) {
      case "users":

        console.log('se monta los usuarios')
        return <UsersTable/>;
      case "products":
        return <h1>Soy productos</h1>;

      case "create": 
        return <Create/>;

      case "modify":
        return <Modify />;

      case "reports":
        return <h1>Soy reports</h1>;

      case "sales":
        return <PurchaseOrders/>;

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