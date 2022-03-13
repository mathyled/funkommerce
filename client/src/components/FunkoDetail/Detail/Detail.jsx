
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails } from "../../../redux/actions/actions";
import styles from "./Detail.module.css"

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const funkoDetails = useSelector(state => state.detail)

  useEffect(() => {
    dispatch(getDetails(id))
  }, [dispatch,id])

//  console.log("DETAILS", funkoDetails)

    return (

    
          <div className={styles.item} >
       
              <div  className={styles.item} >
                <h2><strong>Category: </strong>{funkoDetails[0].Category.name}</h2>
              </div>
              
              <div  className={styles.item} >
                <h2><strong>License: </strong>{funkoDetails[0].license}</h2>
              </div>

              <div  className={styles.item} >
                <h2><strong>$ </strong>{funkoDetails[0].price} USD  🤑</h2>
              </div>
          </div>
    )
};

export default Detail;





