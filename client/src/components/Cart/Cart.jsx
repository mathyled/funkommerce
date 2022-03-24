import React from "react";
import styles from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  modifiedTotal,
  restartingPost,
  getCartDb,
  modifiedCartDb
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

  const post = useSelector((state) => state.post);

  
  const emptyCartInDb = async () => {

    dispatch(modifiedCartDb());
    const cartUserdb2 = await axios.delete("http://localhost:3001/api/order/", {
      data: { idUser: 2 },
    });
    dispatch(restartingPost());
    
    let objUser = {
      UserID: 2,
    };

    dispatch(getCartDb(objUser));
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



  useEffect(() => {
    localStorage.setItem("funkosInCart", JSON.stringify(cart));
    dispatch(modifiedTotal());
    let objUser = {
      UserID: 4,
    };
    dispatch(getCartDb(objUser));
  }, [dispatch, post, cart, totalToPay2, token, funkosfromdb.length]);



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
           !token ? emptyCart()
            :emptyCartInDb();
          }}
          className={styles.emptyCart}
        >
          Empty cart{" "}
        </button>
      </div>
      <div className={styles.subContainer}>
        {token ? <CartFromDb></CartFromDb> : <CartGeneric />}
      </div>
    </div>
  );
};
export default Cart;
