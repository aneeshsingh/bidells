import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';

// Header
import HeaderLogin from './header/HeaderLogin';

// common
import PaymentMethod from './payment/index';

// assets
import BgImage from '../assets/paymentDetails.jpg';
import Ads from '../assets/ads.png';
// import arrowRight from '../assets/arrow-right-solid.png';
// import PaymentCard from '../assets/paymentCard.png';
import Oval from '../assets/oval_01.svg';
import OvalRight from '../assets/Oval_dashboard_02.svg';

function PaymentDetails() {
  return (
    <div className="outer-view">
        <HeaderLogin />
        
        <img src={Oval} className="ovel-bottom-left d-none d-lg-block" alt="ovel shape" />
        <img src={OvalRight} className="ovel-bottom-right d-block d-lg-none" alt="ovel shape" />
        <Row noGutters className="mh-100">
            <Col sm={12} md={6}>
                <div className="col-content content-area top_offset">
                    <Row>
                        <Col md={10} lg={10}>
                            <div className="mb-4 pb-1">
                                <h1>Please enter your payment details</h1>
                                <p className="lead">Want to give us a try? Select subscriptions offer a 7 day free trial! You will not be charged until the end of your trial and can cancel at any time.</p>
                            </div>
                        </Col>
                        {/* <Col md={12} lg={12} className="mb-4"> 
                            <div className="form-grad payment-details d-lg-flex d-none align-items-center">
                                <div className="payment-card mr-3"><img src={PaymentCard} alt="card"/></div>
                                <div className="payment-card-number flex-grow-1"><input type="text" placeholder="Card number" /></div>
                                <div className="payment-card-expire mx-3"><input type="text" placeholder="MM / YY" /></div>
                                <div className="payment-card-cvc"><input type="text" placeholder="CVC" /></div>
                            </div>
                            <div className="form-grad payment-details d-flex d-lg-none align-items-center mb-3">
                                <div className="payment-card mr-3"><img src={PaymentCard} alt="card"/></div>
                                <div className="payment-card-number flex-grow-1"><input type="text" placeholder="Card number" /></div>
                            </div>
                            <div className="form-grad payment-details d-flex d-lg-none align-items-center">
                                <div className="payment-card-expire mr-auto"><input type="text" placeholder="MM / YY" /></div>
                                <div className="payment-card-cvc"><input type="text" placeholder="CVC" /></div>
                            </div>
                        </Col>
                        <Col md={10} lg={8}>
                            <Button variant="light" type="submit" block className="form-btn d-flex align-items-center border-0 form-btn-skyblue">SUBSCRIBE <img className="ml-auto" src={arrowRight} alt="arrow" /></Button>
                        </Col> */}

                        <Col md={12}>
                            <PaymentMethod />
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
