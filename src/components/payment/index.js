import React from "react";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { BrowserRouter } from "react-router-dom";

import CardForm from './cardForm';

const stripePromise = loadStripe("pk_test_51HD6rjBs0tLIdmO2IfHnaC8x7hAUSruv4iMlj2KtxEusOMz8sz93bb0B84eizIh3LlLKY6XzWWkWWYyG7szNWcxr00mmWoYIIp");

const Payment = () => {
    return (
      <BrowserRouter>
        <Elements stripe={stripePromise}>
          <CardForm />
        </Elements>
      </BrowserRouter>
    );
  };

  export default Payment;