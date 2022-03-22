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
//MdOutlineAddShoppingCart
import TotalToPay from "../TotalToPay/TotalToPay";
import { AiOutlineHome } from "react-icons/ai";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Funkommerce from "../../assets/Funkommerce.png";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import axios from "axios";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const totalToPay2 = useSelector((state) => state.totalToPay);

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("funkosInCart", JSON.stringify(cart));
    dispatch(modifiedTotal());
  }, [dispatch, cart, totalToPay2]);

  const token = useSelector((state) => state.token);
  // console.log("jjjj",user2);
  const connectWithDb = () => {
    // const db  = await axios.post ("http://localhost:3001/api/order", {
    //   UserId: 1,
    //   Items: cart
    // })

    //recordar cambiar en if del onclick a if(token)...

    console.log("Hago post al back con el array de objetos");
    // console.log(db)
  };
  const deleteOneInCartDb = async () => {
    //   const db  = await axios.delete ("http://localhost:3001/api/order", {
    //     idUser: 1
    //   })
    // // console.log(cart)
    //   console.log(db)
    console.log("Hago delete un objeto entero al back con el array de objetos");
  };
  const emptyCartInDb = async () => {
    //   const db  = await axios.delete ("http://localhost:3001/api/order", {
    //     idUser: 1
    //   })
    // // console.log(cart)
    //   console.log(db)
    console.log("Hago delete de vaciar  cart entero al back con el array de objetos");
  };

  const addOneToCart = (id) => {
    dispatch(sumInCart(id));
  };

  const deleteOneInTheCart = (id) => {
    dispatch(deleteFromCart(id));
  };

  const deleteAllInTheCart = (id, boolean) => {
    dispatch(deleteFromCart(id, boolean));
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
        {cart.map((product) => (
          <ul key={product.id} className={styles.ul}>
            <li className={styles.li}>
              <h2 className={styles.title}>{product.title}</h2>
              <img
                src={product["image"] || notFound}
                alt="Funko-Img"
                className={styles.funkoImg}
              ></img>
              <div className={styles.price}>
                <h5>
                  US$ {product.price} x {product.quantity} ={" "}
                  {(product.price * product.quantity).toFixed(2)}
                </h5>
              </div>
              <div className={styles.buttonsMoreAndLessDiv}>
                <button
                  onClick={() => {
                    addOneToCart(product.id);
                    if (!token) {
                      connectWithDb();
                    }
                  }}
                  className={styles.buttonsMoreAndLess}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    deleteOneInTheCart(product.id);
                    if (!token) {
                      connectWithDb();
                    }
                  }}
                  className={`${styles.buttonsMoreAndLess} ${styles.lessButton}`}
                >
                  -
                </button>
              </div>
              <div>
                <button
                  onClick={() => {deleteAllInTheCart(product.id, true); if(!token)deleteOneInCartDb()}}
                  className={styles.deleteButton}
                >
                  <RiDeleteBin5Line></RiDeleteBin5Line>
                </button>
              </div>
            </li>
          </ul>
        ))}
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};
export default Cart;
