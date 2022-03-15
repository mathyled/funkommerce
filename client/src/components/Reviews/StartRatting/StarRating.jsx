import React, { useState } from "react";
import styles from "./StarRating.module.css";
import { FaStar } from "react-icons/fa"
const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return (
        <div className={styles.root}>
            {[...Array(5)].map((star, i) => {
                const value = i + 1;
                return <label >
                    <input
                        type="radio"
                        name="rating"
                        value={value}
                        onClick={() => setRating(value)}
                    />
                    <FaStar
                    className={styles.star}
                     size={20} 
                     color={value <= (hover || rating ) ? "ffc120" : "e4e5e9"} 
                     onMouseEnter={()=> setHover(value)}
                     onMouseLeave={()=> setHover(null)}
                     />
                </label>
            })}

        </div>
    )
};

export default StarRating;