import React, { useState } from "react";
import styles from "./CheckoutForm.module.css";
import Nav from "../Nav/Nav";
import TotalToPay from "../TotalToPay/TotalToPay";
import axios from "axios";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { validator } from "../../helpers/validatorsForm";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const tab = <>&nbsp;</>;

  const total = useSelector((state) => state.totalToPay);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      //ENVIO PETICION POST AL BACK
      //   console.log(paymentMethod);
      console.log({
        amount: total,
      });
      elements.getElement(CardElement).clear();
      // try {
      //     const { id } = paymentMethod;
      //     const response = await axios.post("http://localhost:3001/payment", {
      //         amount: total,
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
          <input
            type="text"
            name="name"
            placeholder="Name"
            className={styles.inputName}
            onChange={(e) => {
              setInputs({
                ...inputs,
                [e.target.name]: e.target.value,
              });
              setErrors(validator(errors, e.target));
            }}
          />
          {errors.name && <span className={styles.err}>{errors.name}</span>}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className={`${styles.inputName} ${styles.inputEmail}`}
            onChange={(e) => {
              setInputs({
                ...inputs,
                [e.target.name]: e.target.value,
              });
              setErrors(validator(errors, e.target));
            }}
          />
          {errors.email && <span className={styles.err}>{errors.email}</span>}
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
            US${total.toFixed(2)}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
