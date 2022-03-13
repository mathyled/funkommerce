
import React from "react";
import TopBar from "../TopBar/TopBar";
import styles from "./PanelHome.module.css"
import SideBar from "../SideBar/SideBar"
const PanelHome = () => {

    return (
        <div >
        <TopBar />
        <div  className={styles.container}>
            <SideBar />
        <div className={styles.others}>
other pages
        </div>
        </div>

        </div>
    )
};

export default PanelHome;