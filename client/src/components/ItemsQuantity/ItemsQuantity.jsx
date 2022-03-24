import React from "react";
import styles from './ItemsQuantity.module.css'
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";


const ItemsQuantity = ()  => {
  let cart = useSelector((state) => state.cart);
  let cartDb = useSelector((state) => state.cartDb);
  let token = useSelector((state) => state.token);
  let itemsQuantity = useSelector((state) => state.itemsQuantity);

  let choosenCart =  token ? cartDb: cart


  useEffect(() => {
    
  }, [choosenCart ]);
 

  return (
    <div>
      <h2 className={styles.itemsQuantity}>{choosenCart.length > 0 ? choosenCart.length: ""}</h2>
    </div>
  );
};
export default ItemsQuantity;
