import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Header
import HeaderLogin from './header/HeaderLogin';

// assets
import BgImage from '../assets/loginImage.jpg';
import Ads from '../assets/ads.png';
import arrowRight from '../assets/arrow-right-solid.png';
import Oval from '../assets/oval_01.svg';
import OvalRight from '../assets/Oval_dashboard_02.svg';

function Login() {
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
                                <h1>Lets get started!</h1>
                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras est justo, ullamcorper et ipsum fringilla, convallis faucibus ex.</p>
                            </div>
                        </Col>
                        <Col md={12} lg={12}>
                            <Form>
                                <Form.Group>
                                    <Form.Control type="email" className="form-shadow form-radius border-0" placeholder="Email Address" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="password" className="form-shadow form-radius border-0" placeholder="Password" />
                                </Form.Group>
                                <Button variant="light" type="submit" block className="form-btn d-flex align-items-center border-0 form-btn-skyblue">SUBMIT <img className="ml-auto" src={arrowRight} alt="arrow" /></Button>
                            </Form>
                            
                            <div className="mt-4">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras est justo, ullamcorper et ipsum fringilla, convallis faucibus ex.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>

            <Col sm={12} md={6}>
                <div className="cover-image position-relative d-flex h-100 w-100" style={{ backgroundImage: `url(${BgImage})` }}>
                    <div className="ads-frame mx-auto mt-auto mb-md-3">
                        <img src={Ads} alt="Ads poster" />
                    </div>
                </div>
            </Col>
        </Row>
    </div>
  );
}

export default Login;
