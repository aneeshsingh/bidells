import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// Header
import Header from './header/HeaderDashboard';

// assets
import Ovel_01 from '../assets/Oval_dashboard_01.svg';
import Ads_02 from '../assets/ads_03.png';
import Ads_03 from '../assets/ads_04.png';
import SMS from '../assets/sms-solid.png';
import Envelope from '../assets/envelope-open.png';

class refer extends Component {
    render() {
        return (
            <div className="outer-view">
                <Header />
                
                <div className="top_offset position-relative">
                    <img src={Ovel_01} className="place-oval-Lbottom" alt="ovel shape" />

                    <Container fluid="md">
                        <Row className="align-items-center content-area mb-md-5 mb-4">
                            <Col md={8} lg={6}>
                                <div className="heading-area">
                                    <div className="post_type">REFERRAL</div>
                                    <h1>Refer a friend</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia lobortis tristique.</p>
                                </div>
                            </Col>
                        </Row>

                        <div className="pt-4">
                            <Row className="justify-content-between">
                                <Col md={8} lg={9} className="mb-2 pr-md-5">
                                    <Row>
                                        <Col md={4}>
                                            <div className="referal-box li-grad">
                                                <h5>Your referrer code</h5>
                                                <div className="code">hQzgT6</div>
                                                <Button variant="link" size="sm" className="btn-reset">Click to copy</Button>
                                            </div>
                                        </Col>

                                        <Col md={8} className="pl-md-5">
                                            <h4>Share the code with your friends</h4>

                                            <div className="mt-3">
                                                <Button variant="grad" className="border-0 mr-4 mt-3 btn-code">
                                                    <img src={SMS} alt="sms"/>
                                                    SMS
                                                </Button>
                                                <Button variant="grad" className="border-0 mr-4 mt-3 btn-code">
                                                    <img src={Envelope} alt="sms"/>
                                                    EMAIL
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={4} lg={3} className="mb-2">
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

export default refer;