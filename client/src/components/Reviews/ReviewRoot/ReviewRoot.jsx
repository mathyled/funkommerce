import React, { useState } from "react";
import ReviewList from "../ReviewList/ReviewList";
import FormReview from "../FormReview/FormReview";
import styles from "./ReviewRoot.module.css"
const ReviewRoot = () => {
    const [reviews, setReviews] = useState([]);
    const [form, setForm] = useState({ funko: "", review: "", id: crypto.randomUUID() })
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
                <FormReview
         form={form} 
         setForm={setForm}
         setReviews={setReviews}
         reviews={reviews}
         />
             <div  className={styles.divClose}>
                <button onClick={() => setVisible(v => !v)} className={styles.btnClose}>Close</button>
                </div>
                </div> : ""}
         <ReviewList reviews={reviews}/>
            </div>
  
        </div>
    )
};

export default ReviewRoot;