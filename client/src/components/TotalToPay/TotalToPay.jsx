import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const TotalToPay = () => {
  let cart = useSelector((state) => state.cart);
  //console.log(cart);

  const [total, setTotal] = useState(0);
  let sum = 0;

  useEffect(() => {
    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].attributes.id * cart[i].quantity; // - 42550
    }
    setTotal(sum);
    // console.log("hola", sum);
  }, [cart]);

  return (
    <div>
      TOTAL: {total} USD
    </div>
  );
};
export default TotalToPay;
