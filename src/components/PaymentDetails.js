import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

// Header
import HeaderLogin from './header/HeaderLogin';

// assets
import BgImage from '../assets/paymentDetails.jpg';
import Ads from '../assets/ads.png';
import arrowRight from '../assets/arrow-right-solid.png';
import Ovel from '../assets/oval_01.svg';
import PaymentCard from '../assets/paymentCard.png';

function PaymentDetails() {
  return (
    <div className="outer-view">
        <HeaderLogin />
        
        <img src={Ovel} className="ovel-bottom-left" alt="ovel shape" />
        <Row noGutters className="mh-100">
            <Col sm={12} md={6}>
                <div className="col-content content-area top_offset">
                    <Row>
                        <Col md={8} lg={7}>
                            <div className="mb-4 pb-1">
                                <h1>Please enter your payment details</h1>
                                <p class="lead">Want to give us a try? Select subscriptions offer a 7 day free trial! You will not be charged until the end of your trial and can cancel at any time.</p>
                            </div>
                        </Col>
                        <Col md={12} lg={12} className="mb-4">
                            <div className="form-grad payment-details d-flex align-items-center">
                                <div className="payment-card mr-3"><img src={PaymentCard} alt="card"/></div>
                                <div className="payment-card-number flex-grow-1"><input type="text" placeholder="Card number" /></div>
                                <div className="payment-card-expire mx-3"><input type="text" placeholder="MM / YY" /></div>
                                <div className="payment-card-cvc"><input type="text" placeholder="CVC" /></div>
                            </div>
                        </Col>
                        <Col md={10} lg={8}>
                            <Button variant="light" type="submit" block className="form-btn d-flex align-items-center border-0 form-btn-skyblue">SUBSCRIBE <img className="ml-auto" src={arrowRight} alt="arrow" /></Button>
                        </Col>
                    </Row>
                </div>
            </Col>

            <Col sm={12} md={6}>
                <div className="cover-image position-relative d-flex h-100 w-100" style={{ backgroundImage: `url(${BgImage})` }}>
                    <div className="ads-frame mx-auto mt-auto mb-3">
                        <img src={Ads} alt="Ads Poster" />
                    </div>
                </div>
            </Col>
        </Row>
    </div>
  );
}

export default PaymentDetails;
