import React from "react";
import styles from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFromCart,
  sumInCart,
  clearCart,
  modifiedTotal,
  
} from "../../redux/actions/actions";

import { useEffect, useState } from "react";


import TotalToPay from "../TotalToPay/TotalToPay";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import axios from "axios";
import CartGeneric from "../CartGeneric/CartGeneric.jsx";
import CartFromDb from "../CartFromDb/CartFromDb.jsx";



const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const totalToPay2 = useSelector((state) => state.totalToPay);
  const token = useSelector((state) => state.token);
  const funkosfromdb = useSelector((state) => state.cartDb);
  const dispatch = useDispatch();

  const [render2, setRender2] = useState(true);

  useEffect(() => {
    localStorage.setItem("funkosInCart", JSON.stringify(cart));
    dispatch(modifiedTotal());
   // console.log("t:", token);
  }, [dispatch, cart, totalToPay2, token, funkosfromdb]);
 
  

  const emptyCartInDb = async () => {
     //console.log("idddd", id);
     const cartUserdb2 = await axios.delete(
      "http://localhost:3001/api/order/",
      {
        data: { idUser: 4},
      }
    );
    setRender2(!render2);
  };

  const emptyCart = () => {
    if (cart.lenght < 1 || cart.length === 0) {
      Swal.fire({
        title: "The cart is already empty",
        icon: "info",
        timer: 4000,
        timerProgressBar: true,
      });
    } else {
      dispatch(clearCart());
    }
  };

  const tab = <>&nbsp;</>;

  return (
    <div className={styles.container}>
      <Nav></Nav>

      <h1 className={styles.myCart}>MY CART</h1>
      <div className={styles.myCartAndButtonEmpty}>
        <h3 className={styles.totalToPay}>
          {" "}
          TOTAL: {tab} <TotalToPay totalToPay2={totalToPay2}></TotalToPay>{" "}
        </h3>

        <Link to="/checkout">
          <button className={`${styles.checkOut} ${styles.emptyCart}`}>
            Checkout{" "}
          </button>
        </Link> 

        <button
          onClick={() => {
            emptyCart();
            emptyCartInDb();
          }}
          className={styles.emptyCart}
        >
          Empty cart{" "}
        </button>
      </div>
      <div className={styles.subContainer}>
        {token ? <CartFromDb render2={render2}></CartFromDb> : <CartGeneric />}
      </div>
    </div>
  );
};
export default Cart;
