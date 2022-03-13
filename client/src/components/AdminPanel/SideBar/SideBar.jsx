
import React from "react";

import styles from "./SideBar.module.css"

const SideBar = () => {
    return (
        <div className={styles.sidebar} >
            <div className={styles.sidebarWrapper}>
                <div  className={styles.sidebarMenu}>
                    <h3 className={styles.sidebarTitle}>Dashboard</h3>
                    <ul className={styles.sidebarList}>
                        <li className={styles.sidebarListItem.active}>Home</li>
                        <li className={styles.sidebarListItem}>Analytics</li>
                        <li className={styles.sidebarListItem}>Sales</li>
                    </ul>
                </div>
            </div>

            <div >
                <h3>Quick Menu</h3>
                <ul>
                    <li> Users </li>
                    <li> Products</li>
                    <li>Transactions</li>
                    <li >Reports</li>
                </ul>
            </div>

            <div >
                <h3>Notifications</h3>
                <ul>
                    <li> Mail </li>
                    <li > Feedback</li>
                    <li > Messages</li>
                </ul>
            </div>

            <div >
                <h3 >Staff</h3>
                <ul >
                    <li >Manage</li>
                    <li >Analytics</li>
                    <li >Reports </li>
                </ul>
            </div>
        </div>
    )
};

export default SideBar;


