import React, { useMemo } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import useResponsiveFontSize from "../common/useResponsiveFontSize";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// assets
import arrowRight from '../../assets/arrow-right-solid.png';

const useOptions = () => {
    const fontSize = useResponsiveFontSize();
    const options = useMemo(
      () => ({
        style: {
          base: {
            fontSize,
            color: "#2D2F33",
            letterSpacing: "0.025em",
            fontFamily: 'Sweet Sans Pro',
            "::placeholder": {
              color: "#9b9b9b"
            }
          },
          invalid: {
            color: "#9e2146"
          }
        }
      }),
      [fontSize]
    );
  
    return options;
  };

const CardForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    });

    console.log("[PaymentMethod]", payload);
  };

  return (
    <form onSubmit={handleSubmit}>
        <Row>
        <Col md={12} lg={12} className="mb-4">
            <CardElement
                options={options}
                className="form-grad payment-details"
                onReady={() => {
                    console.log("CardElement [ready]");
                }}
                onChange={event => {
                    console.log("CardElement [change]", event);
                }}
                onBlur={() => {
                    console.log("CardElement [blur]");
                }}
                onFocus={() => {
                    console.log("CardElement [focus]");
                }}
            />
        </Col>
        {/* <button type="submit" disabled={!stripe}>
            Pay
        </button> */}
        <Col md={10} lg={8}>
            <Button variant="light" type="submit" disabled={!stripe} block className="form-btn d-flex align-items-center border-0 form-btn-skyblue">SUBSCRIBE <img className="ml-auto" src={arrowRight} alt="arrow" /></Button>
        </Col>
      </Row>
    </form>
  );
};

export default CardForm;
