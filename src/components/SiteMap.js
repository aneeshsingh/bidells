import React, { Component } from 'react';

import {
    Link
  } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// assets
import Ovel_01 from '../assets/Oval_dashboard_01.svg';



class SiteMap extends Component {
    render() {
        return (
            <div className="outer-view">
                <div className="pt-5 text-dark position-relative mh-100">
                    <img src={Ovel_01} className="place-oval-Lbottom" alt="ovel shape" />

                    <Container fluid="md">
                        <Row className="mt-4">
                            <Col sm={12} className="mb-5">
                                <div className="display-1">Site Map</div>
                            </Col>
                            <Col sm={12}>
                                <ol className="site-map-list text-dark">
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/sign-up">SignUp</Link></li>
                                    <li><Link to="/welcome">Welcome</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/unlimited-access">UnlimitedAccess</Link></li>
                                    <li><Link to="/payment-details">PaymentDetails</Link></li>
                                    <li><Link to="/personal-details">PersonalDetails</Link></li>
                                    <li><Link to="/categories">Categories</Link></li>
                                    <li><Link to="/dashboard">Dashboard</Link></li>
                                    <li><Link to="/post">Post</Link></li>
                                    <li><Link to="/leaderboard">Leaderboard</Link></li>
                                    <li><Link to="/leaderboard-view">LeaderboardView</Link></li>
                                    <li><Link to="/all-results">AllResults</Link></li>
                                    <li><Link to="/redeem-points">RedeemPoints</Link></li>
                                    <li><Link to="/redeem-single">RedeemSingle</Link></li>
                                    <li><Link to="/redeem-congrats">RedeemCongrats</Link></li>
                                    <li><Link to="/redeem-order">RedeemOrder</Link></li>
                                    <li><Link to="/activities">Activities</Link></li>
                                    <li><Link to="/refer">Refer</Link></li>
                                    <li><Link to="/refer-settings">ReferSettings</Link></li>
                                    <li><Link to="/create-bets">CreateBets</Link></li>
                                    <li><Link to="/point-summary">PointSummary</Link></li>
                                    <li><Link to="/create-refer">CreateRefer</Link></li>
                                </ol>
                            </Col>
                        </Row>
                    </Container>

                </div>
                
            </div>
        );
    }
}

export default SiteMap;