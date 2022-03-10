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

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalToPay2 = useSelector((state) => state.totalToPay);
  // const[total, setTotal] = useState(arr)
  console.log(totalToPay2);
  useEffect(() => {
    localStorage.setItem("funkosInCart", JSON.stringify(cart));
    dispatch(modifiedTotal());
  }, [dispatch, cart, totalToPay2]);

  // const [total, setTotal] = useState(0);
  // let sum = 0;

  // useEffect(() => {
  //   for (let i = 0; i < cart.length; i++) {
  //     sum += cart[i].price * cart[i].quantity;
  //   }
  //   setTotal(sum);

  // }, [cart]);

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
    //console.log(cart.length)
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
        <button onClick={() => emptyCart()} className={styles.emptyCart}>
          Empty cart{" "}
        </button>
        {/* */}
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
                  onClick={() => addOneToCart(product.id)}
                  className={styles.buttonsMoreAndLess}
                >
                  +
                </button>
                <button
                  onClick={() => deleteOneInTheCart(product.id)}
                  className={`${styles.buttonsMoreAndLess} ${styles.lessButton}`}
                >
                  -
                </button>
              </div>
              <div>
                <button
                  onClick={() => deleteAllInTheCart(product.id, true)}
                  className={styles.deleteButton}
                >
                  <RiDeleteBin5Line></RiDeleteBin5Line>
                </button>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};
export default Cart;
