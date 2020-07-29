import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

// Header
import HeaderLogin from './header/HeaderLogin';

// assets
import BgImage from '../assets/signupImage.jpg';
import Ads from '../assets/ads.png';
import arrowRight from '../assets/arrow-right-solid.png';
import Ovel from '../assets/oval_01.svg';

function SignUp() {
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
                                <h1>Lets get started!</h1>
                                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras est justo, ullamcorper et ipsum fringilla, convallis faucibus ex.</p>
                            </div>
                        </Col>
                        <Col md={10} lg={8}>
                            <Form>
                                <Form.Row>
                                    <Col sm={12}>
                                        <Form.Group>
                                            <Form.Control type="text" className="form-shadow form-radius border-0" placeholder="First Name" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={12}>
                                        <Form.Group>
                                            <Form.Control type="text" className="form-shadow form-radius border-0" placeholder="Last Name" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={12}>
                                        <Form.Group>
                                            <Form.Control type="email" className="form-shadow form-radius border-0" placeholder="Email Address" />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={3}>
                                        <Form.Group>
                                            <Form.Control type="text" className="form-shadow form-radius border-0" placeholder="AU" />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={9}>
                                        <Form.Group>
                                            <Form.Control type="text" className="form-shadow form-radius border-0" placeholder="Phone Number" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={12}>
                                        <Form.Group>
                                            <Form.Control type="password" className="form-shadow form-radius border-0" placeholder="Password" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={12}>
                                        <Form.Group>
                                            <Form.Control type="password" className="form-shadow form-radius border-0" placeholder="Confirm Password" />
                                        </Form.Group>
                                    </Col>
                                </Form.Row>
                                
                                
                                
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
                    <div className="ads-frame mx-auto mt-auto mb-3">
                        <img src={Ads} alt="Ads Poster" />
                    </div>
                </div>
            </Col>
        </Row>
    </div>
  );
}

export default SignUp;
