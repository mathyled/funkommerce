
import React from "react";
import TopBar from "./TopBar/TopBar";
import styles from "./PanelHome.module.css";
import SideBar from "./SideBar/SideBar";
import PageHome from "../Pages/Home/PageHome"
const PanelHome = () => {

    return (
        <div >
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