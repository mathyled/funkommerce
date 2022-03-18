import React, { useEffect, useState, useRef } from "react";
import styles from "./CartFromDb.module.css";
import { useSelector } from "react-redux";
import axios from "axios";

const CartFromDb = () => {
  const [cartDb, setCartDb] = useState();
  const UserID = useSelector(state => state.idUser)
  useEffect(() => {
    async function cartFromDb() {
      let getCartFromDb = await axios.get("http://localhost:3001/api/order",{
        UserID: UserID,
      });
      setCartDb(getCartFromDb)
      console.log("test",cartDb)
      console.log("hi",getCartFromDb)
    }
    cartFromDb();
  }, []);

 if(cartDb){
  return (
    <div>
      <div className={styles.subContainer}>
        {/* <h5>{console.log("hola2",cartDb.data)}</h5> */}
     {cartDb.data?.map(e =>  (
       <ul>
         <li>
           <h4> {e.UserId}</h4>
         </li>
       </ul>
     )    ) }
        
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
      
 }else {
   return( <h1>Hola que tal</h1>
   )
 }
};

export default CartFromDb;
