import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails, clearCart } from "../../redux/actions/actions";
import { Link } from "react-router-dom";
// import Loading from "./Loading"
import styles from "./FunkoDetail.module.css";
import Loader from "../../assets/Funko.gif";

import { addToCart } from "../../redux/actions/actions";
import Swal from "sweetalert2";
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
    // dispatch(clearCart());
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
    }
  };

  if (funkoDetails.length < 1) {
    return <img src={Loader} />;
  } else {
    return (
      <div>
        <h1>funkoDetails details</h1>

        <p>{funkoDetails[0].attributes.brand}</p>

        <p>{funkoDetails[0].attributes.title}</p>

        <button
          onClick={() => addToCart1(id)}
          className={styles.buttonAdd}
        >
          {cart.find((item) => item.id === id)
            ? "In cart"
            : "Add to cart"}
        </button>
        <Link to="/">
          <button>Go back</button>
        </Link>
      </div>
    );
  }
};

export default FunkoDetail;
