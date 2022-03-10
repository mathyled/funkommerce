import React from "react";
import styles from "./CheckoutForm.module.css";
import Nav from "../Nav/Nav";
import TotalToPay from "../TotalToPay/TotalToPay";
import axios from "axios";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const tab = <>&nbsp;</>;

  const total = useSelector((state) => state.totalToPay);
  console.log("hola", total);
  const handleSubmit = async (e) => {
    e.preventDefault();
    //   const algo = await useStripe.createPaymentMethod({
    //       type: "card",
    //       card: elements.getElement(CardElement),
    //   })
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    elements.getElement(CardElement).clear();
    if (!error) {
      //ENVIO PETICION POST AL BACK
      //   console.log(paymentMethod);
      console.log({
        amount: total,
      });
      // try {
      //     const { id } = paymentMethod;
      //     const response = await axios.post("http://localhost:4000/payment", {
      //         amount: <TotalToPay/>,
      //         id
      //     })
      // } catch (error) {
      //     console.log("Error", error);
      // }
    }
  };
  return (
    <div>
      <Nav />
      <form>
        <div>
          <input type="text" placeholder="Name" className={styles.inputName} />
        </div>

        <div>
          <input
            type="text"
            placeholder="Your email"
            className={`${styles.inputName} ${styles.inputEmail}`}
          />
        </div>
        <fieldset className={styles.cardElement}>
          <div>
            <CardElement />
          </div>
        </fieldset>
        <div className={styles.buttonSub}>
          <button onClick={handleSubmit} className={styles.buttonPay}>
            {"Pay"}
            {tab}
            US${total}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
