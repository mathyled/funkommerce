
import React,{useContext} from "react";
import TopBar from "./TopBar/TopBar";
import styles from "./PanelHome.module.css";
import SideBar from "./SideBar/SideBar";
import PageHome from "../Pages/Home/PageHome";
import { DarkModeContext } from "./DarkMode/context/darkModeContext";
import "./dark.css"
const PanelHome = () => {
    const { darkMode } = useContext(DarkModeContext);
    return (
        <div className={darkMode ? "dark" : "app"} >
            <TopBar />
            <div className={styles.container}>
                <SideBar />
                <div className={styles.others}>
                    <PageHome />
                </div>
            </div>

        </div>
    )
};

export default PanelHome;