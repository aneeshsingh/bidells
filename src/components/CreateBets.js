import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

// Header
import Header from './header/HeaderDashboard';


import Bets from './common/BetsGrids';

// assets
import Ovel_01 from '../assets/Oval_dashboard_01.svg';
import Ads_02 from '../assets/ads_03.png';
import Ads_03 from '../assets/ads_04.png';

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
                            <h1>Create your own</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed magna eros. Quisque eget lorem nec urna convallis posuere.</p>
                        </div>
                    </Col>
                    <Col md={4} lg={4}>
                        <Button href="#" block className="form-btn border-0 rounded text-uppercase">CREATE A NEW BET</Button>
                    </Col>
                </Row>

                <div className="pt-4 pb-5">
                    <Row className="justify-content-between">
                        <Col md={7} lg={9} className="mb-2 pr-md-4">
                            <Tabs defaultActiveKey="bets_created" fill id="tab-bets">
                                <Tab eventKey="bets_created" title="BETS CREATED BY ME">
                                    <Bets />
                                </Tab>
                                <Tab eventKey="bets_invited" title="BETS INVITED TO">
                                    <Bets />    
                                </Tab>
                            </Tabs>
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

export default CreateBets;
