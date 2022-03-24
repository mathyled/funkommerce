
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails } from "../../../redux/actions/actions";
import styles from "./Detail.module.css"
import hotSale from "../../../assets/hotSale.png"
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
                <h2><strong>License: </strong>{funkoDetails[0].License.name}</h2>
              </div>

              <div  className={styles.img} >
               <h2><span  className={styles.span}>US$ {Math.round(funkoDetails[0].price*(1.2))}.5      </span>   US$ {funkoDetails[0].price}  </h2>
               <img src={hotSale} alt="hot_sale" height="55px" />  
              </div>
          </div>
    )
};

export default Detail;





