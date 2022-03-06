
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

  console.log("DETAILS", funkoDetails)

    return (
      <div  className={styles.root}>
        <div className={styles.container}>
          <div className={styles.item} >

            <div className={styles.dropdown} >
              <div>
                <p><strong>Items Number: </strong> {funkoDetails[0].number}</p>
              </div>
              <div>
                <p><strong>Category:</strong>{funkoDetails[0].category}</p>
              </div>
              <div>
                <p><strong>License:</strong>{funkoDetails[0].license}</p>
              </div>
              <div>
                <p><strong>Product Type:</strong>{funkoDetails[0].brand}</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    )
};

export default Detail;





