// import send from "./mailer";
import React from "react";
import {useParams} from "react-router-dom";
import styles from "./Confirm.module.css";
import mailSend from "../../../assets/mailSend.svg"
import Nav from "../../Nav/Nav"

const Confirm = () => {
    const {confirmationCode} = useParams()
    console.log(confirmationCode)
    return (
        <div>

        <Nav />
        <div className={styles.root} >
            <div  className={styles.card}>
            <div className={styles.cardOne} >
                <div >
                {/* <img src={mailSend} height="90px" width="95px" /> */}
                </div>
                <h1>Verificacion exitosa</h1>
            <div className={styles.cardTwo} >
            </div>
            </div>

            </div>


        </div>
        </div>
    )

}

export default Confirm;