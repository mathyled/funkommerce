import React from "react";
import styles from './ItemsQuantity.module.css'
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";


const ItemsQuantity = () => {
  let cart = useSelector((state) => state.cart);
  let cartDb = useSelector((state) => state.cartDb);
  let token = useSelector((state) => state.cartDb);
  let itemsQuantity = useSelector((state) => state.itemsQuantity);
//console.log(9,itemsQuantity)
  let choosenCart =  token ? cartDb : cart
  const [itemsQuantity1, setItemsQuantity1] = useState(0);
//console.log(itemsQuantity1)
  useEffect(() => {
    
  }, [choosenCart,itemsQuantity,choosenCart.length ]);
 

  return (
    <div>
      <h2 className={styles.itemsQuantity}>{choosenCart.length > 0 ? choosenCart.length : ""}</h2>
    </div>
  );
};
export default ItemsQuantity;
