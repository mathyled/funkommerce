import React, { useEffect, useState } from "react";
import styles from './CartFromDb.module.css';
import { useSelector } from "react-redux";

const CartFromDb = () => {
  const token = useSelector((state) => state.token);
  useEffect(() => {}, [token]);
  //const [cartFromDb,setCartFromDb] = useState([])
  const getCartUserFromDb = () => {
    // const getCartFromDb  = await axios.get ("http://localhost:3001/api/order");
    //setCartFromDb(getCartFromDb)
    console.log("Hago get al back pidiendo cart del user");
  };
  return (
    <div>
      <div className={styles.subContainer}>
          <h1>Hola</h1>
        {/* {cartFromDb.map((product) => (
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
        ))} */}
      </div>
    </div>
  );
};

export default CartFromDb;
