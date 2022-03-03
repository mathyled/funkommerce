import React from "react";
import cart1 from "../../../src/assets/cart1.png";
import styles from "./Cart.module.css";
import { useSelector } from "react-redux";
import FunkoCard from "../FunkoCard/FunkoCard";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  function deleteFromCart() {}
  return (
    <div>
      {/* <img src={cart1} alt="cart" className={styles.cartImg} /> */}
      <article>
        {cart.map((item, index) => {
          <FunkoCard key={index} data={item} delFromCart={deleteFromCart}/>
         
        })}
      </article>
    </div>
  );
};
export default Cart;
