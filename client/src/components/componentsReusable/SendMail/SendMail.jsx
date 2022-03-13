import React from "react";
import styles from "./Confirm.module.css";
import Nav from "../../Nav/Nav"
import sendEmail from "../../../assets/sendEmail.png"
const SendMail = () => {

    return (
        <div>
            <Nav />
            <main className={styles.main}>
                <div className={styles.root} >
                    
                    <div className={styles.card}>
                        <div className={styles.cardOneSend} >
                            <h1 className={styles.h1} >Verify your email</h1>
                            <div className={styles.cardTwo} ></div>
                        </div>
                        <img src={sendEmail} className={styles.img} />
                        <p className={styles.p}>please go to your inbox to confirm</p>
                    </div>
                </div>
            </main>
        </div>
    )
};

export default SendMail;