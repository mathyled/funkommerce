
import React from "react";
import styles from "./SideBar.module.css";
import { AiOutlineHome } from "react-icons/ai";
import {
     MdTimeline,
    MdPermIdentity,
    MdStorefront,
    MdAttachMoney,
    MdBarChart 
} from "react-icons/md";
import { BiTrendingUp } from "react-icons/bi";
const SideBar = () => {
    return (
        <div className={styles.sidebar} >

            <div className={styles.sidebarWrapper}>
                <div className={styles.sidebarMenu}>
                    <h3 className={styles.sidebarTitle}>Dashboard</h3>
                    <ul className={styles.sidebarList}>
                        <li className={styles.sidebarListItem}>
                        <AiOutlineHome className={styles.sidebarIcon} />
                            Home
                        </li>
                        <li className={styles.sidebarListItem}>
                          <MdTimeline className={styles.sidebarIcon} />
                            Analytics
                        </li>
                        <li className={styles.sidebarListItem}>
                            <BiTrendingUp className={styles.sidebarIcon} />
                            Sales
                            </li>
                    </ul>
                </div>
            </div>

            <div className={styles.sidebarWrapper}>
                <div className={styles.sidebarMenu}>
                    <h3 className={styles.sidebarTitle}>Quick Menu</h3>
                    <ul className={styles.sidebarList}>
                        <li className={styles.sidebarListItem}>
                            <MdPermIdentity className={styles.sidebarIcon} />
                            Users
                            </li>
                        <li className={styles.sidebarListItem}>
                            <MdStorefront className={styles.sidebarIcon} />
                            Products
                            </li>
                        <li className={styles.sidebarListItem}>
                            <MdAttachMoney className={styles.sidebarIcon} />
                            Transactions
                            </li>
                        <li className={styles.sidebarListItem}>
                            <MdBarChart className={styles.sidebarIcon} />
                            Reports
                            </li>
                    </ul>
                </div>
            </div>

            <div className={styles.sidebarWrapper}>
                <div className={styles.sidebarMenu}>
                    <h3 className={styles.sidebarTitle}>Notifications</h3>
                    <ul className={styles.sidebarList}>
                        <li className={styles.sidebarListItem}>
                            <AiOutlineHome className={styles.sidebarIcon} />
                            Mail
                            </li>
                        <li className={styles.sidebarListItem}>
                            <AiOutlineHome className={styles.sidebarIcon} />
                            Feedback
                            </li>
                        <li className={styles.sidebarListItem}>
                            <AiOutlineHome className={styles.sidebarIcon} />
                            Messages
                            </li>
                    </ul>
                </div>
            </div>


            <div className={styles.sidebarWrapper}>
                <div className={styles.sidebarMenu}>
                    <h3 className={styles.sidebarTitle}>Staff</h3>
                    <ul className={styles.sidebarList}>
                        <li className={styles.sidebarListItem}>
                            <AiOutlineHome className={styles.sidebarIcon} />
                            Manage
                            </li>
                        <li className={styles.sidebarListItem}>
                            <AiOutlineHome className={styles.sidebarIcon} />
                            Analytics
                            </li>
                        <li className={styles.sidebarListItem}>
                            <AiOutlineHome className={styles.sidebarIcon} />
                            Reports
                            </li>
                    </ul>
                </div>
            </div>


        </div>
    )
};

export default SideBar;


