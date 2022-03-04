import React from "react";
import styles from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFromCart,
  addToCart,
  clearCart,
} from "../../redux/actions/actions";
import notFound from "../../assets/notFound.png";
import { useState } from "react";
import { useEffect } from "react";



const Cart = () => {
 let cart = useSelector((state) => state.cart);
 //let cartFromLocalStorage = JSON.parse(localStorage.getItem('funkosInCart')) || '[]'
// let cart = cartFromLocalStorage
  // useEffect(()=>{
  //   localStorage.setItem('funkosInCart', JSON.stringify(cart))
  // },[cart])
  const dispatch = useDispatch();

  const addOneToCart = (id) => {
    dispatch(addToCart(id));
  };

  const deleteOneInTheCart = (id) => {
    dispatch(deleteFromCart(id));
  };

  const deleteAllInTheCart = (id, boolean) => {
    dispatch(deleteFromCart(id, boolean));
  };
  const emptyCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <button onClick={() => emptyCart()}>Empty cart</button>
      {cart.map((product) => (
        <ul key={product.attributes.id}>
          <li>
            <h2 className={styles.title}>{product.attributes.title}</h2>
            <img
              src={product.attributes["image-url"] || notFound}
              alt="Funko-Img"
              className={styles.funkoImg}
            ></img>
            <h5>
              {product.attributes.number}.00 x {product.quantity} =
              {product.attributes.number * product.quantity} USD
            </h5>
            <button onClick={() => addOneToCart(product.attributes.id)}>
              +
            </button>
            <button onClick={() => deleteOneInTheCart(product.attributes.id)}>
              -
            </button>
            <button
              onClick={() => deleteAllInTheCart(product.attributes.id, true)}
            >
              Delete all
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};
export default Cart;
