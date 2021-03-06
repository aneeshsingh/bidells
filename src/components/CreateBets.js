import React from 'react';
import {
    Link
  } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

// Header
import Header from './header/Header';


import Bets from './common/BetsGrids';

// assets
import Ovel_01 from '../assets/Oval_dashboard_01.svg';
import Ads_02 from '../assets/ads_03.png';
import Ads_03 from '../assets/ads_04.png';
import Ads from '../assets/ads.png';
import Oval from '../assets/Ovalpmob-left.svg';
import OvalRight from '../assets/Oval_dashboard_02.svg';

function CreateBets() {
  return (
    <div className="outer-view">
        <Header />
        
        <img src={Oval} className="oval-top-left d-block d-md-none" alt="ovel shape" />
        <img src={OvalRight} className="ovel-bottom-right d-block d-md-none" style={{ top: '0px' }} alt="ovel shape" />
        <div className="top_offset position-relative">
            <img src={Ovel_01} className="place-oval-Lbottom" alt="ovel shape" />

            <Container fluid="md">
                <Row className="align-items-center justify-content-between content-area mb-4">
                    <Col md={8} lg={7}>
                        <div className="heading-area mb-4 mb-md-0">
                            <div className="post_type">REFERRAL</div>
                            <h1>Create your own</h1>
                            <p>Think Out Of The Box And Create A Customised Bet Of Your Choice. With This Feature Create Your Very Own Betting Event And Invite Others To Bid. Set Up Bets For Your Favourite TV Shows, Political Events, World Events Or Winners For The Award Season. Create A Bet, Invite Your Friends & Family, And Place A Wager On The Outcome. <strong>Simple And Fun</strong>.</p>
                        </div>
                    </Col>
                    <Col md={4} lg={4}>
                        <Link to="/create-refer" className="form-btn btn btn-block border-0 rounded text-uppercase">CREATE A NEW BET</Link>
                    </Col>
                </Row>

                <div className="pt-md-4 pb-md-5">
                    <Row className="justify-content-between">
                        <Col md={8} lg={9} className="mb-2 pr-md-4">
                            <Tabs defaultActiveKey="bets_created" fill id="tab-bets">
                                <Tab eventKey="bets_created" title="BETS CREATED BY ME">
                                    <Bets />
                                </Tab>
                                <Tab eventKey="bets_invited" title="BETS INVITED TO">
                                    <Bets />    
                                </Tab>
                            </Tabs>
                        </Col>
                        <Col md={4} lg={3} className="mb-md-2">
                            <div className="ads-portFrame p-lg-5 p-sm-4 p-3">
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
                </div>
            </Container>

        </div>
        
    </div>
  );
}

export default CreateBets;
