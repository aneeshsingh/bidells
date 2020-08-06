import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Header
import Header from './header/HeaderPost';

// assets
import Ovel_01 from '../assets/Oval_dashboard_01.svg';
import arrowRight from '../assets/arrow-right-solid.png';
import Ads_02 from '../assets/ads_03.png';
import Ads from '../assets/ads.png';
import Oval from '../assets/Ovalpmob-left.svg';
import OvalRight from '../assets/Oval_dashboard_02.svg';

import Uber from '../assets/uber-logo.png';

class RedeemOrder extends Component {
    render() {
        return (
            <div className="outer-view">
                <Header />
                

                <img src={Oval} className="oval-top-left d-block d-md-none" alt="ovel shape" />
                <img src={OvalRight} className="ovel-bottom-right d-block d-md-none" style={{ top: '0px' }} alt="ovel shape" />
                <div className="top_offset position-relative">
                    <img src={Ovel_01} className="place-oval-Lbottom" alt="ovel shape" />

                    <Container fluid="md">
                        <Row className="justify-content-between">
                            <Col md={8} lg={8} className="mt-md-5 mt-md-4 mt-3">
                                <Row>
                                    <Col md={9} className="mb-md-5 mb-4">
                                        <div className="heading-area">
                                            <div className="post_type">EXPERIENCE</div>
                                            <h1>Your order is on it way!</h1>
                                            <p>You should recieve a confirmation email from us soon.</p>
                                        </div>
                                    </Col>

                                    <Col md={8} lg={9}>
                                        <Form>
                                            <Row>
                                                <Col lg={4} className="mb-3">
                                                    <Form.Group>
                                                        <input type="radio" name="orderStatus" id="recieved" className="d-none" />
                                                        <Form.Label className="label-box text-center text-lg-left" htmlFor="recieved"><strong>1</strong> We have recieved your order</Form.Label>
                                                    </Form.Group>
                                                </Col>
                                                <Col lg={4} className="mb-3">
                                                    <Form.Group>
                                                        <input type="radio" name="orderStatus" id="dispatched" className="d-none" />
                                                        <Form.Label className="label-box text-center text-lg-left" htmlFor="dispatched"><strong>2</strong> Your order has been dispatched</Form.Label>
                                                    </Form.Group>
                                                </Col>
                                                <Col lg={4} className="mb-3">
                                                    <Form.Group>
                                                        <input type="radio" name="orderStatus" id="delivered" className="d-none" />
                                                        <Form.Label className="label-box text-center text-lg-left" htmlFor="delivered"><strong>3</strong> Your order has been delivered</Form.Label>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Button variant="light" type="submit" block className="form-btn mb-5 d-flex align-items-center border-0 form-btn-skyblue">CONTINUE BIDDING <img className="ml-auto" src={arrowRight} alt="arrow" /></Button>
                                        </Form>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={4} lg={3} className="mb-5">
                                <div className="post_box redeem_box d-md-flex py-4 d-none">
                                    <img src={Uber} className="post_logo" alt="horse" />
                                    <div className="m-auto">
                                        <div className="post_type">EXPERIENCE</div>
                                        <h2><Link to="#">Uber Gift Card $50</Link></h2>
                                        <p className="mb-0">Get a reliable ride in minutes with the Uber app.</p>
                                    </div>

                                    <div className="redeem-points position-absolute">50,000</div>
                                </div>

                                <div className="ads-portFrame mt-md-5 mt-4 d-none d-md-block">
                                    <img src={Ads_02} alt="ads" />
                                </div>
                                <div className="ads-frame mx-auto mt-4 d-block d-md-none">
                                    <img src={Ads} alt="Ads Poster" />
                                </div>
                            </Col>
                        </Row>
                    </Container>

                </div>
                
            </div>
        );
    }
}

export default RedeemOrder;