import React from "react";
import styles from './ItemsQuantity.module.css'
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";


const ItemsQuantity = () => {
  let cart = useSelector((state) => state.cart);
  let cartDb = useSelector((state) => state.cartDb);
  let token = useSelector((state) => state.cartDb);
  let choosenCart =  token ? cartDb : cart
  const [itemsQuantity1, setItemsQuantity1] = useState(0);

  useEffect(() => {
    setItemsQuantity1(choosenCart.length);
  }, [choosenCart,cartDb.length,itemsQuantity1 ]);
 

  return (
    <div>
      <h2 className={styles.itemsQuantity}>{choosenCart.length > 0 ? itemsQuantity1 : ""}</h2>
    </div>
  );
};
export default ItemsQuantity;
