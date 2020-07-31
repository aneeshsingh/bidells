import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Header
import Header from './header/HeaderDashboard';

// assets
import Ovel_01 from '../assets/Oval_dashboard_01.svg';
import arrowRight from '../assets/arrow-white.svg';
import Ads_02 from '../assets/ads_03.png';
import Ads_03 from '../assets/ads_04.png';
import User from '../assets/post_user.png';

class referSettings extends Component {
    render() {
        return (
            <div className="outer-view">
                <Header />
                
                <div className="top_offset position-relative">
                    <img src={Ovel_01} className="place-oval-Lbottom" alt="ovel shape" />

                    <Container fluid="md">
                        <Row className="align-items-center content-area mb-4">
                            <Col md={8} lg={6}>
                                <div className="heading-area">
                                    <div className="post_type">REFERRAL</div>
                                    <h1>Settings</h1>
                                </div>
                            </Col>
                        </Row>

                        <div className="pt-4">
                            <Row className="justify-content-between">
                                <Col md={7} lg={6} className="mb-2 pr-md-5">
                                    <Form>
                                        <Form.Group>
                                            <input type="file" id="profilePic" className="d-none" />
                                            <Form.Label htmlFor="profilePic" className="form-shadow form-control form-control-label form-radius pt-2 pb-0 border-0">
                                                <img src={User} alt="user" className="profile-image mr-3"/> Change Profile Picture
                                            </Form.Label>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Control type="text" className="form-shadow form-radius border-0" placeholder="Name" />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Control type="email" className="form-shadow form-radius border-0" placeholder="Email" />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Control type="text" className="form-shadow form-radius border-0" placeholder="Phone Number" />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Control type="text" className="form-shadow form-radius border-0" placeholder="Address" />
                                        </Form.Group>
                                        <Button variant="light" type="submit" block className="form-btn d-flex align-items-center border-0 form-btn-skyblue">SUBMIT <img className="ml-auto" src={arrowRight} alt="arrow" /></Button>
                                    </Form>
                                </Col>
                                <Col md={4} lg={3} className="mb-2">

                                <Button variant="dark-grad" type="button" block className="d-flex align-items-center mb-4 mb-md-5 align-items-center border-0"><span>Logout</span> <img className="ml-auto" src={arrowRight} alt="arrow" /></Button>

                                    <div className="ads-portFrame p-md-5 p-sm-4 p-3">
                                        <img src={Ads_03} alt="ads" />
                                    </div>

                                    <div className="ads-portFrame mt-md-5 mt-4">
                                        <img src={Ads_02} alt="ads" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>

                </div>
                
            </div>
        );
    }
}

export default referSettings;