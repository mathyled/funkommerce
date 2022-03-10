import React from "react";
import styles from "./ReviewItem.module.css";
import CreditCard2 from "../../../assets/CreditCard/CreditCard2.png"
const ReviewItem = ({ funko, review }) => {
    console.log("item", review)
    return (
        <div className={styles.root}>
            <div className={styles.comment}>
                <div>
                    <h5>{funko}</h5>
                </div>
                <div  className={styles.imgComent}>
                    <img src={CreditCard2} width="24px" height="24px" />
                    <div  className={styles.divSpan}>
                        <span >{review}</span>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default ReviewItem;