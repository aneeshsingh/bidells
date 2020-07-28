import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Header
import HeaderLogin from './header/HeaderLogin';

// assets
import BgImage from '../assets/call_of_duty.jpg';
import Ads from '../assets/ads.png';
import arrowRight from '../assets/arrow-right-solid.png';
import Ovel from '../assets/oval_01.svg';
import User from '../assets/user_icon.svg';

function Categories() {
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
                                <h1>We’re nearly there!</h1>
                                <p class="lead">We need to know a little bit more about you to create your personalised plan.</p>
                            </div>
                        </Col>
                        <Col md={12} lg={12} className="mb-4">
                            <Form>
                                <Row>
                                    <Col md={6} lg={3} sm={6} className="mb-4">
                                        <Form.Check type="checkbox" className="form-choose form-choose-box pl-0 text-center" label="SPORTS"  id="sports" />
                                    </Col>
                                    <Col md={6} lg={3} sm={6} className="mb-4">
                                        <Form.Check type="checkbox" className="form-choose form-choose-box pl-0 text-center" label="POLITICS"  id="politics" />
                                    </Col>
                                    <Col md={6} lg={3} sm={6} className="mb-4">
                                        <Form.Check type="checkbox" className="form-choose form-choose-box pl-0 text-center" label="HOLLYWOOD"  id="gollywood" />
                                    </Col>
                                    <Col md={6} lg={3} sm={6} className="mb-4">
                                        <Form.Check type="checkbox" className="form-choose form-choose-box pl-0 text-center" label="TECH"  id="tech" />
                                    </Col>
                                    <Col md={6} lg={3} sm={6} className="mb-4">
                                        <Form.Check type="checkbox" className="form-choose form-choose-box pl-0 text-center" label="EVENTS"  id="events" />
                                    </Col>
                                    <Col md={6} lg={3} sm={6} className="mb-4">
                                        <Form.Check type="checkbox" className="form-choose form-choose-box pl-0 text-center" label="E-SPORTS"  id="e-sports" />
                                    </Col>
                                    <Col md={6} lg={3} sm={6} className="mb-4">
                                        <Form.Check type="checkbox" className="form-choose form-choose-box pl-0 text-center" label="STOCKS"  id="stocks" />
                                    </Col>
                                    <Col md={6} lg={3} sm={6} className="mb-4">
                                        <Form.Check type="checkbox" className="form-choose form-choose-box pl-0 text-center" label="OTHERS"  id="others" />
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                        <Col md={10} lg={8}>
                            <Button variant="light" type="submit" block className="form-btn d-flex align-items-center border-0 form-btn-skyblue">COTINUE TO DASHBOARD <img className="ml-auto" src={arrowRight} alt="arrow" /></Button>
                        </Col>
                    </Row>
                </div>
            </Col>

            <Col sm={12} md={6}>
                <div className="cover-image position-relative d-flex h-100 w-100" style={{ backgroundImage: `url(${BgImage})` }}>
                    <div className="ads-frame mx-auto mt-auto mb-3">
                        <img src={Ads} alt="Ads Image" />
                    </div>
                </div>
            </Col>
        </Row>
    </div>
  );
}

export default Categories;
