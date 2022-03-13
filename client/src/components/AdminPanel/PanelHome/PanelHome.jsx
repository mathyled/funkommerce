
import React from "react";
import TopBar from "./TopBar/TopBar";
import styles from "./PanelHome.module.css";
import SideBar from "./SideBar/SideBar";
import Home from "../Pages/Home/Home"
const PanelHome = () => {

    return (
        <div >
            <TopBar />
            <div className={styles.container}>
                <SideBar />
                <div className={styles.others}>
                    <Home />
                </div>
            </div>

        </div>
    )
};

export default PanelHome;