import React, { Component } from 'react';
import axios from './instance/axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// Header
import Header from './header/Header';

// assets
import Ovel_01 from '../assets/Oval_dashboard_01.svg';
import Ads_02 from '../assets/ads_03.png';
import Ads_03 from '../assets/ads_04.png';
import Ads from '../assets/ads.png';
import SMS from '../assets/sms-solid.png';
import Envelope from '../assets/envelope-open.png';
import Oval from '../assets/Ovalpmob-left.svg';
import OvalRight from '../assets/Oval_dashboard_02.svg';

class refer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            referrer: ''
        }
    }

    componentDidMount() {
        let Auth = localStorage.getItem('auth_bdGroup');
        
        axios.get(`/?itemType=getReferralCode&userID=${Auth}`)
            .then(res => {
            const points = res.data;
            this.setState({ referrer : points.referrerCode });
        })
    }
    render() {
        return (
            <div className="outer-view">
                <Header />
                
                <img src={Oval} className="oval-top-left d-block d-md-none" alt="ovel shape" />
                <img src={OvalRight} className="ovel-bottom-right d-block d-md-none" style={{ top: '0px' }} alt="ovel shape" />
                <div className="top_offset position-relative">
                    <img src={Ovel_01} className="place-oval-Lbottom" alt="ovel shape" />

                    <Container fluid="md">
                        <Row className="mb-md-5 mb-4">
                            <Col md={8} lg={9} className="mb-2 pr-md-5">
                                <Row className="content-area">
                                    <Col lg={8}>
                                        <div className="heading-area">
                                            <div className="post_type">REFERRAL</div>
                                            <h1>Refer A friend</h1>
                                            <p>Refer Your Friends And Family To Win ----- Points. Share The Bidells Experience With Your Friends, Colleagues, Family And Neighbours. The More The Merrier.</p>
                                        </div>
                                    </Col>
                                </Row>

                                <div className="pt-md-5 mb-5 pt-4">
                                    <Row>
                                        <Col xl={4} lg={5} md={12} sm={5} className="mb-4">
                                            <div className="referal-box li-grad">
                                                <h5>Your referrer code</h5>
                                                <div className="code">{this.state.referrer}</div>
                                                <Button variant="link" size="sm" className="btn-reset">Click to copy</Button>
                                            </div>
                                        </Col>

                                        <Col xl={8} lg={7} md={12} sm={7} className="pl-lg-5 pl-sm-3">
                                            <h4>Share the code with your friends</h4>

                                            <div className="mt-md-3 mt-2">
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
                                </div>
                            </Col>

                            <Col md={4} lg={3} className="mb-md-2">
                                <div className="ads-portFrame p-md-5 p-sm-4 p-3">
                                    <img src={Ads_03} alt="ads" />
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

export default refer;