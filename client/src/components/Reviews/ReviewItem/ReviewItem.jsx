import React from "react";
import styles from "./ReviewItem.module.css";

const ReviewItem= ({funko,review})=>{
    console.log("item",review)
    return(
        <div className={styles.root}>
            <h2>{funko}</h2>
            <p>{review}</p>
        </div>
    )
};

export default ReviewItem;