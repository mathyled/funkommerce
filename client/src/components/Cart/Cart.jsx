import React from "react";
import styles from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFromCart,
  sumInCart,
  clearCart,
  modifiedTotal,
} from "../../redux/actions/actions";
import notFound from "../../assets/notFound.png";
import { useEffect, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

import TotalToPay from "../TotalToPay/TotalToPay";
import { AiOutlineHome } from "react-icons/ai";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Funkommerce from "../../assets/Funkommerce.png";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import axios from "axios";
import CartGeneric from "../CartGeneric/CartGeneric.jsx";
import CartFromDb from "../CartFromDb/CartFromDb.jsx";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const totalToPay2 = useSelector((state) => state.totalToPay);
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("funkosInCart", JSON.stringify(cart));
    dispatch(modifiedTotal());
    console.log("t:", token);
  }, [dispatch, cart, totalToPay2, token]);

  useEffect(() => {
    async function j() {
      let getCartFromDb = await axios.get("http://localhost:3001/api/order");
      //console.log("getCartFromDb",getCartFromDb);
    }
    j();
  }, []);
  // const addOrLessOneInDb = async () => {
  //   if (token) {
  //     const cartUserdb = await axios.post("http://localhost:3001/api/order", {
  //       UserId: 1,
  //       Items: cart,
  //     });
  //     console.log("hh", cartUserdb);
  //   }

  //   //recordar cambiar en if del onclick a if(token)...

  //   console.log("Hago post al back con el array de objetos");
  //   // console.log(db)
  // };
  // const deleteOneInCartDb = async () => {
  //   //   const db  = await axios.delete ("http://localhost:3001/api/order", {
  //   //     idUser: 1
  //   //   })
  //   // // console.log(cart)
  //   //   console.log(db)
  //   console.log("Hago delete un objeto entero al back con el array de objetos");
  // };
  const emptyCartInDb = async () => {
    //   const db  = await axios.delete ("http://localhost:3001/api/order", {
    //     idUser: 1
    //   })
    // // console.log(cart)
    //   console.log(db)
    console.log(
      "Hago delete de vaciar  cart entero al back con el array de objetos"
    );
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
        {token ? <CartFromDb></CartFromDb> : <CartGeneric />}
      </div>
    </div>
  );
};
export default Cart;
