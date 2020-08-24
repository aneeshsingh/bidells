import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

// Header
import HeaderLogin from './header/HeaderLogin';

// assets
import BgImage from '../assets/unlimited-access.jpg';
import Ads from '../assets/ads.png';
import arrowRight from '../assets/arrow-right-solid.png';
import Oval from '../assets/oval_01.svg';
import OvalRight from '../assets/Oval_dashboard_02.svg';

function UnlimitedAccess() {
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
                                <h1>Unlimited Access, Cancel Anytime</h1>
                                <p className="lead">Try Our 7-Day Free Trial To Enjoy The Bidells Betting Experience. No Contracts, No Cancellation Fees, And No Commitments. You Can Cancel Anytime</p>
                            </div>
                        </Col>
                        <Col md={12} lg={12}>
                            <div className="mb-3">
                                <h5 className="mb-4">Select A Subscription Package</h5>
                                <Button variant="light" type="button" block className="form-btn text-normal d-flex align-items-center border-0 form-btn-skyblue">
                                    NO ads 
                                    <span className="ml-auto btn-price text-right">
                                        $0.99 <small className="d-block">per week</small>
                                    </span>
                                </Button>
                            </div>
                            <div className="mb-3">
                                <Button variant="light" type="button" block className="form-btn text-normal d-flex align-items-center border-0 form-btn-skyblue">
                                    I don’t mind ads 
                                    <span className="ml-auto btn-price text-right">
                                        Free <small className="d-block">forever</small>
                                    </span>
                                </Button>
                            </div>
                            <div className="pt-4">
                                <Button variant="light" type="submit" block className="form-btn d-flex align-items-center border-0 form-btn-skyblue">SUBMIT <img className="ml-auto" src={arrowRight} alt="arrow" /></Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>

            <Col sm={12} md={6} className="d-flex">
                <div className="cover-image position-relative d-flex w-100" style={{ backgroundImage: `url(${BgImage})` }}>
                    <div className="ads-frame mx-auto mt-auto mb-md-3">
                        <img src={Ads} alt="Ads Poster" />
                    </div>
                </div>
            </Col>
        </Row>
    </div>
  );
}

export default UnlimitedAccess;
