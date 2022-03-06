

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails, addToCart } from "../../redux/actions/actions";
// import { Link } from "react-router-dom";
// import Loading from "./Loading"
import styles from "./FunkoDetail.module.css"
import Loader from "../../assets/Funko.gif"
import Desplegable from "../componentsReusable/Desplegable/Desplegable";
import Nav from "../Nav/Nav";
import Swal from 'sweetalert2';
// const capitalize = (input)=>{
//     return input.charAt(0).toUpperCase() + input.slice(1);
// }

const FunkoDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const funkoDetails = useSelector(state => state.detail)

  const addToCart1 = (id) => {
    if(id){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Satisfactorily added',
        showConfirmButton: false,
        timer: 1500
      })
    }
    dispatch(addToCart(id));
  };

  useEffect(() => {
    dispatch(getDetails(id))
   
  }, [dispatch,id])

  console.log("H", funkoDetails)
  if (funkoDetails.length === 0) {
    return (
      <div>
        <h1>Loading..</h1>
        <img src={Loader} alt="img-not-found" />

      </div>
    )
  } else {
    return (
      <div >
       <Nav />
        <div className={styles.container}>

          <div  className={styles.img} >
            <img src={funkoDetails[0].attributes["image-url"]} alt="Funko-Img" className={styles.img} />
          </div>

          <div className={styles.item} >

            <div className={styles.header} >
              <div className={styles.brand}>
                <p>{funkoDetails[0].attributes.brand}</p>
              </div>
              <div>
                <h1>{funkoDetails[0].attributes.title}</h1>
              </div>
            </div>
              
            <div>
              <button
                onClick={() => addToCart1(id)}
                className={styles.buttonAdd}>
               <strong>ADD TO CART </strong> 
              </button>
            </div>

            <Desplegable />
          </div>
        </div>

        {/* <div>
        <Link to="/">
            <button >Go back</button>
        </Link>
          </div> */}
      </div>
    )
  }
};

export default FunkoDetail;





