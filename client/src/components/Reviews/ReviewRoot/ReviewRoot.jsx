import React, { useState } from "react";
import ReviewList from "../ReviewList/ReviewList";
import FormReview from "../FormReview/FormReview";
import styles from "./ReviewRoot.module.css"
const ReviewRoot = () => {

    const [visible, setVisible] = useState(false);
    return (
        <div className={styles.root}>
      
            <button
                className={styles.btn}
                onClick={() => setVisible(v => !v)}
            >
                <span>Leave a Review</span>
            </button>
            <div className={styles.container} >
                {visible ? <div className={styles.item}> 
            
                <div  className={styles.divHeader}>funko</div>
                <FormReview/>
             <div  className={styles.divClose}>
                <button onClick={() => setVisible(v => !v)} className={styles.btnClose}>Close</button>
                </div>
                </div> : ""}
       
            </div>
  
        </div>
    )
};

export default ReviewRoot;