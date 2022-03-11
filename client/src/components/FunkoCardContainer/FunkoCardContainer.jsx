import React from "react";
// import styles from "./FunkoCardContainer.module.css";
import FunkoCard from "../FunkoCard/FunkoCard";
import { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFunkos, addToCart, getCategories, getLicense, getBrand } from "../../redux/actions/actions";
import Swal from "sweetalert2";
import gifLoader from "../../assets/gifLoader.gif";
import Nav from "../Nav/Nav";
import Nav2 from "../Nav/Nav2"
import Footer from "../Footer/Footer";

const FunkoCardContainer = () => {
  const funkos = useSelector((state) => state.funkos);


  let cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const [load,setLoad] = useState(true)
  
  useEffect(() => {
    dispatch(getFunkos())
    .then(()=> setLoad(false));
    dispatch(getCategories());
    dispatch(getLicense());
    dispatch(getBrand())
  }, [dispatch]);



  function handleClick(e) {
    e.preventDefault();
    dispatch(getFunkos());
  }



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

  if(load){
    return <img src={gifLoader} alt="gifLoader"/>
  }
  return (
    <div >
      <Nav/>
      <Nav2/>
      <FunkoCard  funkos={funkos} addToCart1={addToCart1} cart={cart} />
      <Footer></Footer>
    </div>
  );
};
export default FunkoCardContainer;
