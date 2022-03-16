import React from "react";
import styles from "./ReviewItem.module.css";
import StartRatting from "../StartRatting/StarRating"
const ReviewItem = ({ funko, review ,imgUser}) => {
    console.log("item", review)
    return (
        <div className={styles.root}>
            <div className={styles.comment}>
                <div className={styles.header}>
                    <h5>{funko}</h5>
                        <StartRatting />
                </div>
                <div className={styles.imgComent}>
                    <img src={imgUser}  className={styles.imgLogo}/>
                    <div className={styles.divSpan}>
                        <span >"{review}"</span>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default ReviewItem;