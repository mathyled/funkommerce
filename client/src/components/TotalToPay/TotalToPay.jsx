import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const TotalToPay = () => {
  const cart = useSelector((state) => state.cart);
  const cartDb = useSelector((state) => state.cartDb);
  const totalToPay2 = useSelector((state) => state.totalToPay);
  useEffect(() => {

  }, [cartDb, cart]);
  return <div>US$ {totalToPay2.toFixed(2)}</div>;
};
export default TotalToPay;
