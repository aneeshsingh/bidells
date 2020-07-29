import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// assets
import Uber from '../../assets/uber-logo.png';
import TheRestaurant from '../../assets/The-Restaurant-Choice.png';
import EBGames from '../../assets/Logo_of_EB_Games.png';

class PostGrids extends Component {
    render() {
        return (
            <Row>
                <Col md={4} sm={6} className="mb-4 pb-3">
                    <div className="post_box redeem_box d-flex py-4 h-100">
                        <img src={Uber} className="post_logo" alt="horse" />
                        <div className="m-auto">
                            <div className="post_type">EXPERIENCE</div>
                            <h2><Link href="#">Uber Gift Card $50</Link></h2>
                            <p className="mb-0">Get a reliable ride in minutes with the Uber app.</p>
                        </div>

                        <div className="redeem-points position-absolute">50,000</div>
                    </div>
                </Col>
                <Col md={4} sm={6} className="mb-4 pb-3">
                    <div className="post_box redeem_box d-flex py-4 h-100">
                        <img src={TheRestaurant} className="post_logo" alt="horse" />
                        <div className="m-auto">
                            <div className="post_type">EXPERIENCE</div>
                            <h2><Link href="#">Uber Gift Card $50</Link></h2>
                            <p className="mb-0">Get a reliable ride in minutes with the Uber app.</p>
                        </div>

                        <div className="redeem-points position-absolute">50,000</div>
                    </div>
                </Col>
                <Col md={4} sm={6} className="mb-4 pb-3">
                    <div className="post_box redeem_box d-flex py-4 h-100">
                        <img src={EBGames} className="post_logo" alt="horse" />
                        <div className="m-auto">
                            <div className="post_type">EXPERIENCE</div>
                            <h2><Link href="#">Uber Gift Card $50</Link></h2>
                            <p className="mb-0">Get a reliable ride in minutes with the Uber app.</p>
                        </div>

                        <div className="redeem-points position-absolute">50,000</div>
                    </div>
                </Col>
                <Col md={4} sm={6} className="mb-4 pb-3">
                    <div className="post_box redeem_box d-flex py-4 h-100">
                        <img src={Uber} className="post_logo" alt="horse" />
                        <div className="m-auto">
                            <div className="post_type">EXPERIENCE</div>
                            <h2><Link href="#">Uber Gift Card $50</Link></h2>
                            <p className="mb-0">Get a reliable ride in minutes with the Uber app.</p>
                        </div>

                        <div className="redeem-points position-absolute">50,000</div>
                    </div>
                </Col>
                <Col md={4} sm={6} className="mb-4 pb-3">
                    <div className="post_box redeem_box d-flex py-4 h-100">
                        <img src={TheRestaurant} className="post_logo" alt="horse" />
                        <div className="m-auto">
                            <div className="post_type">EXPERIENCE</div>
                            <h2><Link href="#">Uber Gift Card $50</Link></h2>
                            <p className="mb-0">Get a reliable ride in minutes with the Uber app.</p>
                        </div>

                        <div className="redeem-points position-absolute">50,000</div>
                    </div>
                </Col>
                <Col md={4} sm={6} className="mb-4 pb-3">
                    <div className="post_box redeem_box d-flex py-4 h-100">
                        <img src={EBGames} className="post_logo" alt="horse" />
                        <div className="m-auto">
                            <div className="post_type">EXPERIENCE</div>
                            <h2><Link href="#">Uber Gift Card $50</Link></h2>
                            <p className="mb-0">Get a reliable ride in minutes with the Uber app.</p>
                        </div>

                        <div className="redeem-points position-absolute">50,000</div>
                    </div>
                </Col>
                <Col md={4} sm={6} className="mb-4 pb-3">
                    <div className="post_box redeem_box d-flex py-4 h-100">
                        <img src={Uber} className="post_logo" alt="horse" />
                        <div className="m-auto">
                            <div className="post_type">EXPERIENCE</div>
                            <h2><Link href="#">Uber Gift Card $50</Link></h2>
                            <p className="mb-0">Get a reliable ride in minutes with the Uber app.</p>
                        </div>

                        <div className="redeem-points position-absolute">50,000</div>
                    </div>
                </Col>
                <Col md={4} sm={6} className="mb-4 pb-3">
                    <div className="post_box redeem_box d-flex py-4 h-100">
                        <img src={TheRestaurant} className="post_logo" alt="horse" />
                        <div className="m-auto">
                            <div className="post_type">EXPERIENCE</div>
                            <h2><Link href="#">Uber Gift Card $50</Link></h2>
                            <p className="mb-0">Get a reliable ride in minutes with the Uber app.</p>
                        </div>

                        <div className="redeem-points position-absolute">50,000</div>
                    </div>
                </Col>
                <Col md={4} sm={6} className="mb-4 pb-3">
                    <div className="post_box redeem_box d-flex py-4 h-100">
                        <img src={EBGames} className="post_logo" alt="horse" />
                        <div className="m-auto">
                            <div className="post_type">EXPERIENCE</div>
                            <h2><Link href="#">Uber Gift Card $50</Link></h2>
                            <p className="mb-0">Get a reliable ride in minutes with the Uber app.</p>
                        </div>

                        <div className="redeem-points position-absolute">50,000</div>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default PostGrids;