import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const ItemsQuantity = () => {
  let cart = useSelector((state) => state.cart);
  const [itemsQuantity1, setItemsQuantity1] = useState(0);

  useEffect(() => {
    setItemsQuantity1(cart.length);
  }, [cart]);

  return (
    <div>
      <h2>{cart.length > 0 ? itemsQuantity1 : ""}</h2>
    </div>
  );
};
export default ItemsQuantity;
