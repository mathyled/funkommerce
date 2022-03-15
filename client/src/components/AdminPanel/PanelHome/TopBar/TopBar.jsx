
import React, { useContext } from "react";
import admin from "../../../../assets/admin.png"
import "./TopBar.css";
import { AiOutlineBell } from "react-icons/ai";
import { MdLanguage, MdDarkMode } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { DarkModeContext } from "../DarkMode/context/darkModeContext";

const TopBar = () => {
    const { dispatch } = useContext(DarkModeContext);

    return (
        <div class="root_tb" >

            <div class="left_tb">
                <h1>Admin Panel</h1>
            </div>
            <div class="right_tb">
                <MdDarkMode class="icon_tb" onClick={() => dispatch({ type: "TOGGLE" })} />

                <div class="notification_tb">
                    <AiOutlineBell class="icon_tb" />
                    <span class="iconNotif_tb"><strong>2</strong></span>
                </div>
                <div>
                    <MdLanguage class="icon_tb" />
                </div>
                <div>
                    <IoMdSettings class="icon_tb" />
                </div>
                <div>
                    <img src={admin} class="logo_tb" />
                </div>
            </div>

        </div>
    )
};

export default TopBar;
