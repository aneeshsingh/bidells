import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// assets
import User from '../../assets/post_user.png';

class BetsGrids extends Component {
    render() {
        return (
            <Row>
                <Col md={4} sm={6} className="mb-4 pb-3">
                    <div className="bet_box h-100">
                        <h2><Link href="#">Aneesh vs Nicola, who will win the MAFS</Link></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed magna eros. Quisque eget lorem nec urna convallis posuere.</p>

                        <div className="bet_info d-flex align-items-center justify-content-between">
                            <span>24/5/2020</span>
                            <span>230 Votes</span>
                        </div>

                        <div className="post_users pt-3 d-flex align-items-center">
                            <img src={User} alt="User" />
                            <img src={User} alt="User" />
                            <img src={User} alt="User" />
                            <img src={User} alt="User" />
                            <img src={User} alt="User" />
                            <span>+5</span>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={6} className="mb-4 pb-3">
                    <div className="bet_box h-100">
                        <h2><Link href="#">Aneesh vs Nicola, who will win the MAFS</Link></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed magna eros. Quisque eget lorem nec urna convallis posuere.</p>

                        <div className="bet_info d-flex align-items-center justify-content-between">
                            <span>24/5/2020</span>
                            <span>230 Votes</span>
                        </div>

                        <div className="post_users pt-3 d-flex align-items-center">
                            <img src={User} alt="User" />
                            <img src={User} alt="User" />
                            <img src={User} alt="User" />
                            <img src={User} alt="User" />
                            <img src={User} alt="User" />
                            <span>+5</span>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={6} className="mb-4 pb-3">
                    <div className="bet_box h-100">
                        <h2><Link href="#">Aneesh vs Nicola, who will win the MAFS</Link></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed magna eros. Quisque eget lorem nec urna convallis posuere.</p>

                        <div className="bet_info d-flex align-items-center justify-content-between">
                            <span>24/5/2020</span>
                            <span>230 Votes</span>
                        </div>

                        <div className="post_users pt-3 d-flex align-items-center">
                            <img src={User} alt="User" />
                            <img src={User} alt="User" />
                            <img src={User} alt="User" />
                            <img src={User} alt="User" />
                            <img src={User} alt="User" />
                            <span>+5</span>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={6} className="mb-4 pb-3">
                    <div className="bet_box h-100">
                        <h2><Link href="#">Aneesh vs Nicola, who will win the MAFS</Link></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed magna eros. Quisque eget lorem nec urna convallis posuere.</p>

                        <div className="bet_info d-flex align-items-center justify-content-between">
                            <span>24/5/2020</span>
                            <span>230 Votes</span>
                        </div>

                        <div className="post_users pt-3 d-flex align-items-center">
                            <img src={User} alt="User" />
                            <img src={User} alt="User" />
                            <img src={User} alt="User" />
                            <img src={User} alt="User" />
                            <img src={User} alt="User" />
                            <span>+5</span>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={6} className="mb-4 pb-3">
                    <div className="bet_box h-100">
                        <h2><Link href="#">Aneesh vs Nicola, who will win the MAFS</Link></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed magna eros. Quisque eget lorem nec urna convallis posuere.</p>

                        <div className="bet_info d-flex align-items-center justify-content-between">
                            <span>24/5/2020</span>
                            <span>230 Votes</span>
                        </div>

                        <div className="post_users pt-3 d-flex align-items-center">
                            <img src={User} alt="User" />
                            <img src={User} alt="User" />
                            <img src={User} alt="User" />
                            <img src={User} alt="User" />
                            <img src={User} alt="User" />
                            <span>+5</span>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={6} className="mb-4 pb-3">
                    <div className="bet_box h-100">
                        <h2><Link href="#">Aneesh vs Nicola, who will win the MAFS</Link></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed magna eros. Quisque eget lorem nec urna convallis posuere.</p>

                        <div className="bet_info d-flex align-items-center justify-content-between">
                            <span>24/5/2020</span>
                            <span>230 Votes</span>
                        </div>

                        <div className="post_users pt-3 d-flex align-items-center">
                            <img src={User} alt="User" />
                            <img src={User} alt="User" />
                            <img src={User} alt="User" />
                            <img src={User} alt="User" />
                            <img src={User} alt="User" />
                            <span>+5</span>
                        </div>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default BetsGrids;