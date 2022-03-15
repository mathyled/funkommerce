// import send from "./mailer";
import React from "react";
import styles from "./Confirm.module.css";
import Nav from "../../Nav/Nav"
import success from "../../../assets/success.png"
const Confirm = () => {

    return (
        <div>
            <Nav />
            <main className={styles.main}>
                <div className={styles.root} >
                    
                    <div className={styles.card}>
                        <div className={styles.cardOne} >
                            <h1 className={styles.h1} >Successful verification</h1>
                            <div className={styles.cardTwo} ></div>
                        </div>
                        <img src={success} className={styles.img} />
                        <p className={styles.p}>Thanks, you can sign in</p>
                    </div>

                </div>
            </main>
        </div>
    )
};

export default Confirm;