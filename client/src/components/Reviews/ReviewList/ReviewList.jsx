import React from "react";
import ReviewItem from "../ReviewItem/ReviewItem";

const ReviewList= ({reviews})=>{
    
    return(
        <div>
            {reviews.map(review=>(

      <ReviewItem funko={review.funko} review={review.review} />
            ))}
       
        </div>
    )
};

export default ReviewList;