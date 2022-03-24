import React from "react";
import styles from "./FunkoCardContainer.module.css";
import FunkoCard from "../FunkoCard/FunkoCard";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getFunkos,
  addToCart,
  getCategories,
  getLicense,
  getBrand,
  getCartDb,
  setItemsQuantity
} from "../../redux/actions/actions";
import Swal from "sweetalert2";
import gifLoader from "../../assets/gifLoader.gif";

const FunkoCardContainer = () => {
  const funkos = useSelector((state) => state.funkos);

  let cart = useSelector((state) => state.cart);
  
  let cartDb  = useSelector((state) => state.cartDb);
  let token = useSelector((state) => state.token);
  let itemsQuantity = useSelector((state) => state.setItemsQuantity);
  
  let choosenCart =  token ? cartDb : cart

  const dispatch = useDispatch();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    dispatch(getFunkos()).then(() => setLoad(false));
    dispatch(getCategories());
    dispatch(getLicense());
    dispatch(getBrand());

    let objUser = {
      UserID: 4,
    };

    dispatch(getCartDb(objUser));
  }, [dispatch]);

  // function handleClick(e) {
  //   e.preventDefault();
  //   dispatch(getFunkos());
  // }

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
      dispatch(setItemsQuantity());
    }
  };

  useEffect(() => {
    localStorage.setItem("funkosInCart", JSON.stringify(cart));
  }, [cart]);

  





  if (load) {
    return <img src={gifLoader} alt="gifLoader" />;
  }
  return (
    <div>
      <FunkoCard funkos={funkos} addToCart1={addToCart1} choosenCart={choosenCart} cart={cart}/>
    </div>
  );
};
export default FunkoCardContainer;
