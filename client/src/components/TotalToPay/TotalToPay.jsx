import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const TotalToPay = () => {
  // let cart = useSelector((state) => state.cart);
  // //console.log(cart);
  const totalToPay2 = useSelector(state => state.totalToPay)
  // const [total, setTotal] = useState(0);
  // let sum = 0;

  // useEffect(() => {
  //   for (let i = 0; i < cart.length; i++) {
  //     sum += cart[i].price * cart[i].quantity; 
  //   }
  //   setTotal(sum);
   
  // }, [cart]);
// console.log(total)
  return <div>US$ {totalToPay2.toFixed(2)}</div>;
};
export default TotalToPay;
