import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

// Header
import Header from './header/HeaderPost';

// assets
import Ovel_01 from '../assets/Oval-right-bottom.svg';
import SubmitArrow from '../assets/arrow-right-solid.svg';
import Ads_02 from '../assets/ads_03.png';
import Ads_03 from '../assets/ads_04.png';
import Minus from '../assets/minus.svg';
import Plus from '../assets/plus.svg';

import Uber from '../assets/uber-logo.png';

function SinglePost() {
  return (
    <div className="outer-view">
        <Header />
        

        <div className="top_offset position-relative">
            <img src={Ovel_01} className="place-oval-Rbottom" alt="ovel shape" />

            <Container fluid="md">
                <Row className="align-items-center content-area mb-5">
                    <Col md={6}>
                        <div className="heading-area">
                            <div className="post_type">EXPERIENCE</div>
                            <h1>Uber Gift Card $50</h1>
                            <p>Get a reliable ride in minutes with the Uber app.</p>
                        </div>
                    </Col>
                    <Col md={6} className="py-3">
                        <img src={Uber} className="img-fluid d-block m-auto mr-md-0" alt="logo"/>
                    </Col>
                </Row>
                
                <Row className="justify-content-between">
                    <Col md={8} lg={8} className="mb-2 pr-md-5">
                        <Row className="mb-4">
                            <Col sm={6} md={5} className="mb-4">
                                <div className="box-grid my-3 li-grad p-md-5 p-4">
                                    <div className="box-grid-info py-2">
                                        <span className="mb-4 d-block">Quantity</span>
                                        
                                        <InputGroup className="form-quality">
                                            <InputGroup.Prepend>
                                                <Button variant="minus"><img src={Minus} alt="minus"/></Button>
                                            </InputGroup.Prepend>
                                            <Form.Control value="2" />
                                            <InputGroup.Append>
                                                <Button variant="plus"><img src={Plus} alt="plus"/></Button>
                                            </InputGroup.Append>
                                        </InputGroup>

                                    </div>
                                </div>  
                            </Col>    
                            <Col sm={6} md={5} className="mb-4">
                                <div className="box-grid my-3 li-grad p-md-5 p-4">
                                    <div className="box-grid-info py-2">
                                        <span className="mb-4 d-block">Total</span>
                                        <strong>100,000</strong>
                                    </div>
                                </div>
                            </Col>

                            <Col sm={12} md={10} className="mt-3">
                                <div className="form-bet-amount d-flex align-items-center">
                                    <span className="submitText">CONTINUE</span>
                                    <Button><img src={SubmitArrow} alt="arrow"/></Button>
                                </div>
                            </Col>    
                        </Row>      

                        <div className="mt-5 tabs-content">
                            <Tabs defaultActiveKey="detail" fill id="tab-redeem">
                                <Tab eventKey="detail" title="Detail">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, magni? Similique nobis odit, soluta beatae pariatur voluptates optio illum, non recusandae eaque dolore eos veniam earum adipisci unde in minima!</p>
                                </Tab>
                                <Tab eventKey="shipping" title="Shipping">
                                    <p>Sed, magni? Similique nobis odit, soluta beatae pariatur voluptates optio illum, non recusandae eaque dolore eos veniam earum adipisci unde inLorem ipsum dolor sit amet consectetur adipisicing elit minima!</p>
                                </Tab>
                                <Tab eventKey="payment" title="Payment">
                                    <p>Consectetur adipisicing elit. Sed, magni? Similique nobis odit, soluta beatae pariatur voluptates optio illum, non recusandae eaque dolore eos veniamLorem ipsum dolor sit amet earum adipisci unde in minima!</p>
                                </Tab>
                            </Tabs>
                        </div>
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
                <Row>
                    <Col md={6} className="mb-4">
                        
                    </Col>
                </Row>
            </Container>

        </div>
        
    </div>
  );
}

export default SinglePost;
