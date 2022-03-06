import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getDetails } from "../../redux/actions/actions";
import { Link } from "react-router-dom";
import styles from "./FunkoDetail.module.css";
import Loader from "../../assets/Funko.gif";
import { addToCart } from "../../redux/actions/actions";
import Swal from "sweetalert2";
import Desplegable from "../componentsReusable/Desplegable/Desplegable";
import Nav from "../Nav/Nav";
// const capitalize = (input)=>{
//     return input.charAt(0).toUpperCase() + input.slice(1);
// }

const FunkoDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const funkoDetails = useSelector((state) => state.detail);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch]);

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
                  
             /* <button
                onClick={() => addToCart1(id)}
                className={styles.buttonAdd}>
               <strong>ADD TO CART </strong> 
              </button>*/
            <button
               onClick={() => addToCart1(id)}
               className={styles.buttonAdd}
              >
            {cart.find((item) => item.id === id)
              ? "In cart"
              :  "Add to cart"}


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
