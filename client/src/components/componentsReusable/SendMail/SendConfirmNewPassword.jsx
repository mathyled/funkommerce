import React from "react";
import styles from "./Confirm.module.css";
import Nav from "../../Nav/Nav";
import sendEmail from "../../../assets/sendEmail.png";
import {Link} from "react-router-dom";
const SendConfirmNewPassword = () => {

    return (
        <div>
            <Nav />
            <main className={styles.main}>
                <div className={styles.root} >
                    
                    <div className={styles.card}>
                        <div className={styles.cardOneSend} >
                            <h1 className={styles.h1} >We change the password</h1>
                            <div className={styles.cardTwo} ></div>
                        </div>
                        <img src={sendEmail} className={styles.img} alt="sendingEmail"/>
                        <p className={styles.p}>Ready go <Link to="/">Sign In !</Link></p>
                    </div>
                </div>
            </main>
        </div>
    )
};

export default SendConfirmNewPassword;