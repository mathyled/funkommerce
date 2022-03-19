import React, { useEffect, useState, useRef } from "react";
import styles from "./CartFromDb.module.css";
import { useSelector } from "react-redux";
import axios from "axios";

const CartFromDb = () => {
  const [cartDb, setCartDb] = useState();
  const UserID = useSelector(state => state.user.id)
  useEffect(() => {
    async function cartFromDb() {
      let getCartFromDb = await axios.get("http://localhost:3001/api/order/incart",{
        UserID: 1,
      });
      setCartDb(getCartFromDb)
      console.log("test",cartDb)
      console.log("hi",getCartFromDb)
    }
    cartFromDb();
  }, []);

  const addOrLessOneInDb = async () => {
    //   if (token) {
    //     const cartUserdb = await axios.put("http://localhost:3001/api/order", {
    //       UserId: 1,
    //       Items: [cartDb],
    //     });
    //     console.log("hh", cartUserdb);
       }

 if(cartDb){
  return (
    <div>
    <h1>Hola que tal</h1>
    </div>
  );
      
 }else {
   return( <h1>Hola que tal</h1>
   )
 }
};

export default CartFromDb;
