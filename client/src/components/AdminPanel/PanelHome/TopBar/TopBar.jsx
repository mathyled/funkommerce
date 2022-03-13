
import React from "react";
import admin from "../../../../assets/admin.png"
import styles from "./TopBar.module.css";
import { AiOutlineBell } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
const TopBar = () => {


    return (


        <div className={styles.root} >

            <div className={styles.left}>
                <h1>Admin Panel</h1>
            </div>
            <div className={styles.right}>
                <div className={styles.notification}>
                    <AiOutlineBell className={styles.icon} />
                    <span className={styles.iconNotif}>2</span>
                </div>
                <div>
                    <GrLanguage className={styles.icon} />
                </div>
                <div>
                    <IoMdSettings className={styles.icon} />
                </div>
                <div>
                    <img src={admin} className={styles.logo} />
                </div>
            </div>

        </div>
    )
};

export default TopBar;
