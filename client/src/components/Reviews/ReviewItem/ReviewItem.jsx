import React from "react";
import styles from "./ReviewItem.module.css";
// import StartRatting from "../StartRatting/StartRatting"
const ReviewItem = ({ funko, review ,imgUser}) => {
    console.log("item", review)
    return (
        <div className={styles.root}>
            <div className={styles.comment}>
                <div>
                    <h5>{funko}</h5>
                </div>
                <div className={styles.imgComent}>
                    <img src={imgUser}  className={styles.imgLogo}/>
                    <div className={styles.divSpan}>
                        <span >"{review}"</span>
                        {/* <StartRatting /> */}
                    </div>
                </div>
            </div>

        </div>
    )
};

export default ReviewItem;