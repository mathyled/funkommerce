// import send from "./mailer";
import React,{useEffect} from "react";
import styles from "./Confirm.module.css";
import Nav from "../../Nav/Nav";
import success from "../../../assets/success.png";
import {useParams} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {getConfirm} from "../../../redux/actions/actions"
const Confirm = () => {
const {token} = useParams()
const dispatch = useDispatch()
const  confirm = useSelector(state=> state.confirm)
console.log( confirm)


useEffect(()=>{
    dispatch(getConfirm(token))
},[dispatch,token])
    return (
        <div>
            <Nav />
            <main className={styles.main}>
                <div className={styles.root} >
                    
                    <div className={styles.card}>
                        <div className={styles.cardOne} >
                            <h1 className={styles.h1} >Successful verification</h1>
                            <p>{confirm.msg}</p>
                            <div className={styles.cardTwo} ></div>
                        </div>
                        <img src={success} className={styles.img} alt="succesIcon"/>
                        <p className={styles.p}>Thanks, you can sign in</p>
                    </div>

                </div>
            </main>
        </div>
    )
};

export default Confirm;