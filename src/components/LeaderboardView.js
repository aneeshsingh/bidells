import React, { Component } from 'react';
import axios from './instance/axios';
import {
    Link
  } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// Header
import Header from './header/Header';

// assets
import Ovel_01 from '../assets/Oval_dashboard_01.svg';
import Ads_02 from '../assets/ads_03.png';
import Ads from '../assets/ads.png';
import LeadUser from '../assets/post_user.png';
import Oval from '../assets/Ovalpmob-left.svg';
import OvalRight from '../assets/Oval_dashboard_02.svg';

class LeaderboardView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            getLeads: []
        }
    }

    getLeadData(){
        axios.get(`/?itemType=getLeaderboardDetails&leaderboardID=768`)
            .then(res => {
            const data = res.data;
            console.log(Object.entries(data));
            const getLeads = Object.entries(data).map(([key, bets], index) => 
                <Link to="#" className="lead-strip li-grad d-flex flex-wrap align-items-center mb-4" key={key}>
                    <div className="lead-date d-flex align-items-center text-uppercase flex-grow-1">
                        <img src={LeadUser} className="mr-md-3 mr-2 lead-user" alt="user"/>
                        {bets.user_name}
                    </div>
                    <div className="lead-data text-sm-right">
                        <span className="d-block">Position</span> {bets.position}
                    </div>
                    <div className="lead-data text-sm-right ml-md-5 ml-4 pl-md-4">
                        <span className="d-block">Points</span> {bets.points}
                    </div>
                </Link>
             )

            this.setState({
                getLeads
            })
            
        }).catch((error) => {
            console.log(error)
        })
    }

    componentDidMount() {
        this.getLeadData();
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
                        <Row className="align-items-center content-area mb-md-5 mb-4">
                            <Col md={6}>
                                <div className="heading-area">
                                    <div className="post_type">YOUR LEADERBOARD</div>
                                    <h1>08-19-2020</h1>
                                    <p>Doncaster Mile 2019 is one of the biggest races on the Australian autumn racing calendar.</p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <Row>
                                    <Col sm={6}>
                                        <div className="leader-data my-3 li-grad p-md-5 p-4">
                                            <div className="leader-data-info py-2">
                                                <strong>10</strong>
                                                YOUR POSITION
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="leader-data my-3 li-grad p-md-5 p-4">
                                            <div className="leader-data-info py-2">
                                                <strong>423</strong>
                                                YOUR POINTS
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <div className="pt-4 pb-md-5">
                            <Row className="justify-content-between">
                                <Col className="d-md-none mb-4">
                                    <Button href="#" block className="form-btn border-0 text-truncate text-uppercase">SEE ALL TIME LEADERBOARD</Button>
                                </Col>
                                <Col md={8} lg={8} className="mb-4">
                                    {this.state.getLeads}
                                    
                                    {/* <Link to="#" className="lead-strip li-grad d-flex align-items-center mb-4">
                                        <div className="lead-user mr-3">
                                            <img src={LeadUser} alt="user"/>
                                        </div>
                                        <div className="lead-date text-uppercase flex-grow-1">
                                            Alexa Tenorio
                                        </div>
                                        <div className="lead-data text-right">
                                            <span className="d-block">Position</span> 1
                                        </div>
                                        <div className="lead-data text-right ml-md-5 ml-4 pl-md-4">
                                            <span className="d-block">Points</span> 2,145,000
                                        </div>
                                    </Link> */}
                                </Col>
                                <Col md={4} lg={3} className="mb-md-4">
                                    <Button href="#" block className="form-btn d-none d-md-block border-0 text-truncate text-uppercase">SEE ALL TIME LEADERBOARD</Button>

                                    <div className="ads-portFrame mt-md-5 mt-4 d-none d-md-block">
                                        <img src={Ads_02} alt="ads" />
                                    </div>
                                    <div className="ads-frame mx-auto mt-auto d-block d-md-none">
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
}

export default LeaderboardView;