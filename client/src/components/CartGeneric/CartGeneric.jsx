import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./CartGeneric.module.css";
import {
  deleteFromCart,
  sumInCart,
  clearCart,
  modifiedTotal,
} from "../../redux/actions/actions";
import Swal from "sweetalert2";
import { RiDeleteBin5Line } from "react-icons/ri";

const CartGeneric = () => {
  const cart = useSelector((state) => state.cart);
  console.log("cart",cart)
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  const addOneToCart = (id) => {
    dispatch(sumInCart(id));
  };

  const deleteOneInTheCart = (id) => {
    dispatch(deleteFromCart(id));
  };

  const deleteAllInTheCart = (id, boolean) => {
    dispatch(deleteFromCart(id, boolean));
  };


  return (
    <div className={styles.subContainer}>
      {cart.map((product) => (
        <ul key={product.id} className={styles.ul}>
          <li className={styles.li}>
            <div className={styles.title}>
              <h2 className={styles.title}>{product.title}</h2>
            </div>

            <img
              src={product["image"]}
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
                }}
                className={styles.buttonsMoreAndLess}
              >
                +
              </button>

              <button
                onClick={() => {
                  deleteOneInTheCart(product.id);
                }}
                className={`${styles.buttonsMoreAndLess} ${styles.lessButton}`}
              >
                -
              </button>
            </div>

            <div>
              <button
                onClick={() => {
                  deleteAllInTheCart(product.id, true);
                  
                }}
                className={styles.deleteButton}
              >
                <RiDeleteBin5Line></RiDeleteBin5Line>
              </button>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default CartGeneric;
