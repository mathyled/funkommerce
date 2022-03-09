import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getDetails } from "../../redux/actions/actions";
import styles from "./FunkoDetail.module.css";
import gifLoader from "../../assets/gifLoader.gif";
import { addToCart } from "../../redux/actions/actions";
import Swal from "sweetalert2";
import Desplegable from "../componentsReusable/Desplegable/Desplegable";
import Nav from "../Nav/Nav";
import ReviewRoot from "../Reviews/ReviewRoot/ReviewRoot";
import Detail from '../../components/FunkoDetail/Detail/Detail';
// const capitalize = (input)=>{
//     return input.charAt(0).toUpperCase() + input.slice(1);
// }

const FunkoDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const funkoDetails = useSelector((state) => state.detail);
  const cart = useSelector((state) => state.cart);
console.log(funkoDetails)
  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch,id]);

  const addToCart1 = (id) => {
    let funkoAlreadyInCart = cart.find(
      (item) => String(item.id) === String(id)
    );
    if (funkoAlreadyInCart) {
      Swal.fire({
        title: "The item is already in the cart",
        icon: "info",
        timer: 4000,
        timerProgressBar: true,
      });
    } else {
      
      dispatch(addToCart(Number(id)));
       Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Satisfactorily added',
        showConfirmButton: false,
        timer: 1500
      })
    }
  };
 
    


  if (funkoDetails.length === 0) {
    return (
      <div>
        <h1>Loading...</h1>
        <img src={gifLoader} alt="gifLoader" />

      </div>
    )
  } else {
    return (
      <div >
       <Nav />
        <div className={styles.container}>

          <div  className={styles.item} >
            <img src={funkoDetails[0].image} alt="Funko-Img" className={styles.img} />
          </div>

          <div className={styles.item} >

            <div className={styles.header} >
              <div className={styles.brand}>
                <p>{funkoDetails[0].brand}</p>
              </div>
              <div className={styles.title}>
                <h1>{funkoDetails[0].title}</h1>
              </div>
            </div>
              
            <div>
                  
              {/* <button
                onClick={() => addToCart1(id)}
                className={styles.buttonAdd}>
               <strong>ADD TO CART </strong> 
              </button> */}
            <button
               onClick={() => addToCart1(id)}
               className={styles.buttonAdd}
              >
            {cart.find((item) => String(item.id) === id)
              ? "In cart"
              :  "Add to cart"}

</button>
<ReviewRoot />
            </div>

            {/* <Desplegable /> */}
          </div>
            <div className={styles.item}></div>
            <div className={styles.item}> <Detail /></div>
        </div>

      </div>
    )
  }
};

export default FunkoDetail;
