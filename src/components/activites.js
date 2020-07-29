import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Header
import Header from './header/HeaderDashboard';

// assets
import Ovel_01 from '../assets/Oval_dashboard_01.svg';
import Ads_02 from '../assets/ads_03.png';
import Ads_03 from '../assets/ads_04.png';  

function Leaderboard() {
  return (
    <div className="outer-view">
        <Header />
        
        <div className="top_offset position-relative">
            <img src={Ovel_01} className="place-oval-Lbottom" alt="ovel shape" />

            <Container fluid="md">
                <Row className="align-items-center content-area mb-md-5 mb-4">
                    <Col md={6}>
                        <div className="heading-area">
                            <div className="post_type">SHOP</div>
                            <h1>ACTIVITIES</h1>
                            <p>Doncaster Mile 2019 is one of the biggest races on the Australian autumn racing calendar.</p>
                        </div>
                    </Col>
                </Row>

                <div className="pt-4">
                    <Row className="justify-content-between">
                        <Col md={8} lg={9} className="mb-2 pr-md-5">
                            <div className="activites-strip align-items-center d-flex mb-4">
                                <div>
                                    <span class="type">POINTS REDEEMED</span>
                                    <p>You purchased Restaurant Choice Fine Dining Gift Card $50 for B50000</p>
                                </div>
                                <div className="date ml-auto">
                                    02-15-2020
                                </div>
                            </div>
                            <div className="activites-strip align-items-center d-flex mb-4">
                                <div>
                                    <span class="type">POINTS REDEEMED</span>
                                    <p>You finished 10 and won B0 for the Week 4 competition</p>
                                </div>
                                <div className="date ml-auto">
                                    02-15-2020
                                </div>
                            </div>
                            <div className="activites-strip align-items-center d-flex mb-4">
                                <div>
                                    <span class="type">POINTS REDEEMED</span>
                                    <p>You placed a bet on Adam Scott for with the odds of .4</p>
                                </div>
                                <div className="date ml-auto">
                                    02-15-2020
                                </div>
                            </div>
                            <div className="activites-strip align-items-center d-flex mb-4">
                                <div>
                                    <span class="type">POINTS REDEEMED</span>
                                    <p>Sorry you bid was not successful with 3. All Cylinders (9)</p>
                                </div>
                                <div className="date ml-auto">
                                    02-15-2020
                                </div>
                            </div>
                            <div className="activites-strip align-items-center d-flex mb-4">
                                <div>
                                    <span class="type">POINTS REDEEMED</span>
                                    <p>You placed a bet on Sydney Roosters for 2123 with the odds of .25</p>
                                </div>
                                <div className="date ml-auto">
                                    02-15-2020
                                </div>
                            </div>
                            <div className="activites-strip align-items-center d-flex mb-4">
                                <div>
                                    <span class="type">POINTS REDEEMED</span>
                                    <p>You placed a bet on St George for with the odds of .75</p>
                                </div>
                                <div className="date ml-auto">
                                    02-15-2020
                                </div>
                            </div>
                            <div className="activites-strip align-items-center d-flex mb-4">
                                <div>
                                    <span class="type">POINTS REDEEMED</span>
                                    <p>You placed a bet on 3. All Cylinders (9) for 200 with the odds of .7</p>
                                </div>
                                <div className="date ml-auto">
                                    02-15-2020
                                </div>
                            </div>
                            <div className="activites-strip align-items-center d-flex mb-4">
                                <div>
                                    <span class="type">POINTS REDEEMED</span>
                                    <p>You purchased B63000 for $629.37</p>
                                </div>
                                <div className="date ml-auto">
                                    02-15-2020
                                </div>
                            </div>
                            <div className="activites-strip align-items-center d-flex mb-4">
                                <div>
                                    <span class="type">POINTS REDEEMED</span>
                                    <p>You purchased B1000 for $9.99</p>
                                </div>
                                <div className="date ml-auto">
                                    02-15-2020
                                </div>
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
                </div>
            </Container>

        </div>
        
    </div>
  );
}

export default Leaderboard;
