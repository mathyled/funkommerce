import React, { useEffect, useState } from "react";
import styles from "./CartFromDb.module.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getCartDb,modifiedTotal } from "../../redux/actions/actions";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";
import { userRows } from "../AdminPanel/PanelHome/data";
const CartFromDb = () => {
  let funkosfromdb = useSelector((state) => state.cartDb);
  const post = useSelector((state) => state.post);
  const user = useSelector((state) => state.user);

  let addOne = "addOne";
  let substractOne = "substractOne";
  const totalToPay = useSelector(state=>state.totalToPay)
  const dispatch = useDispatch();

  const [render, setRender] = useState(true);

  const updateQuantityInCartDb = async (id, operation) => {
    let itemInCart = funkosfromdb.find((item) => item.id === id);
   
    if (itemInCart.stock > itemInCart.quantity) {
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
          idUser: user.user.id,
        }
      );
      setRender(!render);
      console.log("cartToPut", cartToPut);
      dispatch(modifiedTotal)
     
    } else if (
      itemInCart.stock === itemInCart.quantity &&
      operation === substractOne
    ) {
      
      let cartToPut = await funkosfromdb.map((item2) =>
        item2.id === itemInCart.id
          ? {
              ...item2,
              quantity: --item2.quantity,
            }
          : item2
      );
      const cartUserdb = await axios.put(
        "http://localhost:3001/api/order/updataquantity",
        {
          Items: cartToPut,
          idUser: user.user.id,
        }
      );
     
      setRender(!render);
      console.log("cartToPut", cartToPut);
      dispatch(modifiedTotal)
    } else {
      Swal.fire({
        title: "Maximum quantity of this product reaches",
        icon: "info",
        timer: 4000,
        timerProgressBar: true,
      });
    }
  };

  const deleteProductFromCartDb = async (id) => {
    const cartUserdb2 = await axios.delete(
      "http://localhost:3001/api/order/product",
      {
        data: { idProduct: id, idUser: user.user.id },
      }
    );
    let objUser = {
      UserID: user.user.id,
    };
    dispatch(getCartDb(objUser));
    setRender(!render);

    console.log("hice delete del product");
    dispatch(modifiedTotal)
  };

  useEffect(() => {}, [dispatch, post, funkosfromdb,totalToPay]);

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
