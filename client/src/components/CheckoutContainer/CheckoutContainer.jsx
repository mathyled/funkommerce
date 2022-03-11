import React from "react";
import styles from "./CheckoutContainer.module.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import Footer from "../Footer/Footer";
const PUBLIC_KEY =
  "pk_test_51KbQJ1Jx3UlXGWRupFNnUw3mQU4mri2NEVaDEf6NRW8obts6Zx0k5v9r7PL9a6J182GkNT8e0o9yeuTqbaRD43ob00au1GlukH";

const stripeTestPromise = loadStripe(PUBLIC_KEY, {locale: 'en'});

const CheckoutContainer = () => {
  return (
    <div>
      <Elements stripe={stripeTestPromise}>
        <CheckoutForm />
      </Elements>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default CheckoutContainer;
