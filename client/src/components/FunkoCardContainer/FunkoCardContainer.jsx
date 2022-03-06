import React from "react";
// import styles from "./FunkoCardContainer.module.css";
import FunkoCard from "../FunkoCard/FunkoCard";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFunkos, addToCart } from "../../redux/actions/actions";
import Swal from "sweetalert2";

const FunkoCardContainer = () => {
  const funkos = useSelector((state) => state.funkos);

  let cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFunkos());
  }, [dispatch]);

  const addToCart1 = (id) => {
    let funkoAlreadyInCart = cart.find(
      (item) => String(item.id) === String(id)
    );
   
    if (funkoAlreadyInCart) {
      Swal.fire({
        title: "The item is already in the cart",
        icon: "info",
        timer: 4000,
        timerProgressBar: true,
      });
    } else {
      dispatch(addToCart(id));
    }
  };

  useEffect(() => {
    localStorage.setItem("funkosInCart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <FunkoCard funkos={funkos} addToCart1={addToCart1} cart={cart} />
    </div>
  );
};
export default FunkoCardContainer;
