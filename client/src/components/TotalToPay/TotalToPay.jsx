import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { modifiedTotal, getCartDb } from "../../redux/actions/actions";

const TotalToPay = () => {
  const cart = useSelector((state) => state.cart);
  const cartDb = useSelector((state) => state.cartDb);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  //console.log(cartDb);
  const totalToPay2 = useSelector((state) => state.totalToPay);
  let objUser = {
    UserID: user?.id,
  };
  useEffect(() => {
    if (user) {
      dispatch(getCartDb(objUser));
      dispatch(modifiedTotal());
    }
  }, [dispatch, cartDb]);
  return <div>US$ {totalToPay2.toFixed(2)}</div>;
};
export default TotalToPay;
