import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Header
import Header from './header/HeaderDashboard';

// assets
import Ovel_01 from '../assets/Oval_dashboard_01.svg';
import LineChart from '../assets/Line-chart-lg.png';
import Ads_02 from '../assets/ads_03.png';

function CreateBets() {
  return (
    <div className="outer-view">
        <Header />
        
        <div className="top_offset position-relative">
            <img src={Ovel_01} className="place-oval-Lbottom" alt="ovel shape" />

            <Container fluid="md">
                <Row className="align-items-center justify-content-between content-area mb-4">
                    <Col md={8} lg={7}>
                        <div className="heading-area">
                            <div className="post_type">REFERRAL</div>
                            <h1>Points Summary</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed magna eros. Quisque eget lorem nec urna convallis posuere.</p>
                        </div>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col>
                        <div className="graph position-relative my-3 li-grad p-md-5 p-4">
                            <div className="graph-info text-uppercase mb-3">
                                <strong>3,000</strong>
                                Total Points
                            </div>
                            <img src={LineChart} className="w-100" alt="line chart"/>
                        </div>
                    </Col>
                </Row>

                <div className="pt-4 pb-5">
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
                        </Col>
                        <Col md={4} lg={3} className="mb-2">
                            <div className="ads-portFrame">
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

export default CreateBets;
