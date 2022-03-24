import React, { useEffect, useState } from "react";
import styles from "./CartFromDb.module.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getCartDb } from "../../redux/actions/actions";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";
const CartFromDb = () => {
  let funkosfromdb = useSelector((state) => state.cartDb);
  const post = useSelector((state) => state.post);

  let addOne = "addOne";
  let substractOne = "substractOne";
  const dispatch = useDispatch();

  const [render, setRender] = useState(true);

  const updateQuantityInCartDb = async (id, operation) => {
    
      let itemInCart = funkosfromdb.find((item) => item.id === id);

      let cartToPut = await funkosfromdb.map((item2) =>
        item2.id === itemInCart.id
          ? {
              ...item2,
              quantity:
                operation === addOne ? ++item2.quantity : --item2.quantity,
            }
          : item2
      );
      const cartUserdb = await axios.put(
        "http://localhost:3001/api/order/updataquantity",
        {
          Items: cartToPut,
          idUser: 2,
        }
      );
      setRender(!render);
      console.log("cartToPut", cartToPut);
    
  };

  const deleteProductFromCartDb = async (id) => {
    const cartUserdb2 = await axios.delete(
      "http://localhost:3001/api/order/product",
      {
        data: { idUser: 2, idProduct: id },
      }
    );
    setRender(!render);

    console.log("hice delete del product")
  };

  useEffect(() => {
    
  }, [funkosfromdb,dispatch, render, post]);

  return (
    <div className={styles.subContainer}>
      {funkosfromdb?.map((funko) => (
        <ul key={funko.id}>
          <li key={funko.id} className={styles.li}>
            <div className={styles.title}>
              <h2 className={styles.title}>{funko.title}</h2>
            </div>

            <img
              src={funko["image"]}
              alt="Funko-Img"
              className={styles.funkoImg}
            ></img>

            <div className={styles.price}>
              <h5>
                US$ {funko.price} x {funko.quantity} ={" "}
                {(funko.price * funko.quantity).toFixed(2)}
              </h5>
            </div>

            <div className={styles.buttonsMoreAndLessDiv}>
              <button
                onClick={() => {
                  updateQuantityInCartDb(funko.id, addOne);
                }}
                className={styles.buttonsMoreAndLess}
              >
                +
              </button>

              <button
                onClick={() => {
                  updateQuantityInCartDb(funko.id, substractOne);
                }}
                className={`${styles.buttonsMoreAndLess} ${styles.lessButton}`}
              >
                -
              </button>
            </div>

            <div>
              <button
                onClick={() => {
                  deleteProductFromCartDb(funko.id);
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
  // }
};

export default CartFromDb;
