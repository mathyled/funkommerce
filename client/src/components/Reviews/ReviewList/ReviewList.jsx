import React from "react";
import ReviewItem from "../ReviewItem/ReviewItem";

import styles from "./ReviewList.module.css"
import reviewData from "./reviewData"
const ReviewList= ({reviews})=>{
  
  //  console.log("state",reviews)
    return(
        <div className={styles.root} >
            {reviews.length ? reviews.map(review=>(

      <ReviewItem funko={review.funko} review={review.review} key={review.id} />
            )) :
                 ( reviewData.map(review=> (
                    <ReviewItem funko={review.funko} review={review.review}   />
                 ) ) )

            
       
            }
        </div>
    )
};

export default ReviewList;