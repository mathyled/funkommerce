import React from "react";
import ReviewItem from "../ReviewItem/ReviewItem";
import {useSelector} from "react-redux";
const ReviewList= ()=>{
    const reviews= useSelector(state=> state.reviews)
    console.log("state",reviews)
    return(
        <div>
            {reviews.map(review=>(

      <ReviewItem funko={review.funko} review={review.review} key={review.id} />
            ))}
       
        </div>
    )
};

export default ReviewList;