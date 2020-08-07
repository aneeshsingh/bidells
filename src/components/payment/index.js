import React, { Component } from 'react';

import Checkout from './CheckoutForm';

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY);

class index extends Component {
  render() {
    return (
      <Elements stripe={stripePromise}>
        <Checkout />
      </Elements>
    );
  }
}

export default index;