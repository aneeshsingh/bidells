import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// Header
import Header from './header/HeaderPost';

// assets
import Ovel_01 from '../assets/Oval_dashboard_01.svg';
import Check from '../assets/check-solid.svg';
import Flag from '../assets/flag_circle.png';
import SubmitArrow from '../assets/arrow-right-solid.svg';
import Ads from '../assets/ads.png';

function SinglePost() {
  return (
    <div className="outer-view">
        <Header />
        

        <div className="top_offset position-relative">
            <img src={Ovel_01} className="place-oval-Lbottom" alt="ovel shape" />

            <Container fluid="md">
                <Row className="align-items-end content-area mb-5">
                    <Col md={6}>
                        <div className="post-info">
                            <div className="post_type">SPORTS</div>
                            <h1>Randwick Race 8</h1>
                            <p><strong className="d-block">1600m R9 The Star Doncaster Mile</strong> Doncaster Mile 2019 is one of the biggest races on the Australian autumn racing calendar.</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="d-flex justify-content-between release-time">
                            <p>TIME OF THE GAME <strong>5.15pm</strong></p>
                            <p>DATE OF THE GAME <strong>13-4-2019</strong></p>
                        </div>
                    </Col>
                </Row>
                

                <Row className="mb-md-5 mb-4">
                    <Col md={6} className="mt-4">
                        <div className="strip-bidell d-flex align-items-center">
                            <div className="flag-icon mr-4"><img src={Flag} alt="flag"/></div>
                            <div className="strip-content flex-grow-1">
                                <h4>Hartnell (7)</h4>
                                <span className="d-flex">J: Yonekura Satoshi 56kg</span>
                                <span className="d-flex">T: Nakagawa Masayuki</span>
                            </div>
                            <div className="ml-auto text-center bids">
                                <span>Odds</span>
                                3.40
                            </div>
                            <div className="check-icon ml-5">
                                <img src={Check} alt="check icon"/>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="mt-4">
                        <div className="strip-bidell d-flex align-items-center">
                            <div className="flag-icon mr-4"><img src={Flag} alt="flag"/></div>
                            <div className="strip-content flex-grow-1">
                                <h4>Hartnell (7)</h4>
                                <span className="d-flex">J: Yonekura Satoshi 56kg</span>
                                <span className="d-flex">T: Nakagawa Masayuki</span>
                            </div>
                            <div className="ml-auto text-center bids">
                                <span>Odds</span>
                                3.40
                            </div>
                            <div className="check-icon ml-5">
                                <img src={Check} alt="check icon"/>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="mt-4">
                        <div className="strip-bidell d-flex align-items-center">
                            <div className="flag-icon mr-4"><img src={Flag} alt="flag"/></div>
                            <div className="strip-content flex-grow-1">
                                <h4>Hartnell (7)</h4>
                                <span className="d-flex">J: Yonekura Satoshi 56kg</span>
                                <span className="d-flex">T: Nakagawa Masayuki</span>
                            </div>
                            <div className="ml-auto text-center bids">
                                <span>Odds</span>
                                3.40
                            </div>
                            <div className="check-icon ml-5">
                                <img src={Check} alt="check icon"/>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="mt-4">
                        <div className="strip-bidell d-flex align-items-center">
                            <div className="flag-icon mr-4"><img src={Flag} alt="flag"/></div>
                            <div className="strip-content flex-grow-1">
                                <h4>Hartnell (7)</h4>
                                <span className="d-flex">J: Yonekura Satoshi 56kg</span>
                                <span className="d-flex">T: Nakagawa Masayuki</span>
                            </div>
                            <div className="ml-auto text-center bids">
                                <span>Odds</span>
                                3.40
                            </div>
                            <div className="check-icon ml-5">
                                <img src={Check} alt="check icon"/>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="mt-4">
                        <div className="strip-bidell active d-flex align-items-center">
                            <div className="flag-icon mr-4"><img src={Flag} alt="flag"/></div>
                            <div className="strip-content flex-grow-1">
                                <h4>Hartnell (7)</h4>
                                <span className="d-flex">J: Yonekura Satoshi 56kg</span>
                                <span className="d-flex">T: Nakagawa Masayuki</span>
                            </div>
                            <div className="ml-auto text-center bids">
                                <span>Odds</span>
                                3.40
                            </div>
                            <div className="check-icon ml-5">
                                <img src={Check} alt="check icon"/>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="mt-4">
                        <div className="strip-bidell d-flex align-items-center">
                            <div className="flag-icon mr-4"><img src={Flag} alt="flag"/></div>
                            <div className="strip-content flex-grow-1">
                                <h4>Hartnell (7)</h4>
                                <span className="d-flex">J: Yonekura Satoshi 56kg</span>
                                <span className="d-flex">T: Nakagawa Masayuki</span>
                            </div>
                            <div className="ml-auto text-center bids">
                                <span>Odds</span>
                                3.40
                            </div>
                            <div className="check-icon ml-5">
                                <img src={Check} alt="check icon"/>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="mt-4">
                        <div className="strip-bidell d-flex align-items-center">
                            <div className="flag-icon mr-4"><img src={Flag} alt="flag"/></div>
                            <div className="strip-content flex-grow-1">
                                <h4>Hartnell (7)</h4>
                                <span className="d-flex">J: Yonekura Satoshi 56kg</span>
                                <span className="d-flex">T: Nakagawa Masayuki</span>
                            </div>
                            <div className="ml-auto text-center bids">
                                <span>Odds</span>
                                3.40
                            </div>
                            <div className="check-icon ml-5">
                                <img src={Check} alt="check icon"/>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="mt-4">
                        <div className="strip-bidell d-flex align-items-center">
                            <div className="flag-icon mr-4"><img src={Flag} alt="flag"/></div>
                            <div className="strip-content flex-grow-1">
                                <h4>Hartnell (7)</h4>
                                <span className="d-flex">J: Yonekura Satoshi 56kg</span>
                                <span className="d-flex">T: Nakagawa Masayuki</span>
                            </div>
                            <div className="ml-auto text-center bids">
                                <span>Odds</span>
                                3.40
                            </div>
                            <div className="check-icon ml-5">
                                <img src={Check} alt="check icon"/>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md={6} className="mb-4">
                        <div className="form-bet-amount d-flex">
                            <input type="text" className="border-0 bg-transparent pl-0" placeholder="Enter your bet amount" />
                            <Button><img src={SubmitArrow} alt="arrow"/></Button>
                        </div>
                    </Col>
                    <Col md={6} className="mb-4">
                        <div className="ads-frame mx-auto mt-auto mb-3">
                            <img src={Ads} alt="Ads Image" />
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
        
    </div>
  );
}

export default SinglePost;
