import React from 'react';
import {
    Link
  } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// Header
import Header from './header/HeaderDashboard';

// assets
import Ovel_01 from '../assets/Oval_dashboard_01.svg';
import LineChart from '../assets/Lin-chart.png';
import Ads_02 from '../assets/ads_03.png';

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
                            <div className="post_type">YOUR LEADERBOARD</div>
                            <h1>WEEKLY LEADERBOARDS</h1>
                            <p>Doncaster Mile 2019 is one of the biggest races on the Australian autumn racing calendar.</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="graph position-relative my-3 li-grad p-md-5 p-4">
                            <div className="graph-info position-absolute">
                                <strong>423</strong>
                                AVERAGE POSITION
                            </div>
                            <img src={LineChart} className="w-100" alt="line chart"/>
                        </div>
                    </Col>
                </Row>

                <div className="pt-4 pb-5">
                    <Row className="justify-content-between">
                        <Col md={8} lg={8} className="mb-4">
                            <Link href="#" className="lead-strip li-grad d-flex align-items-center mb-4">
                                <div className="lead-date flex-grow-1">
                                    08-19-2020
                                </div>
                                <div className="lead-data text-right">
                                    <span className="d-block">Position</span> 1
                                </div>
                                <div className="lead-data text-right ml-md-5 ml-4 pl-md-4">
                                    <span className="d-block">Points</span> 2,145,000
                                </div>
                            </Link>
                            <Link href="#" className="lead-strip li-grad d-flex align-items-center mb-4">
                                <div className="lead-date flex-grow-1">
                                    08-19-2020
                                </div>
                                <div className="lead-data text-right">
                                    <span className="d-block">Position</span> 1
                                </div>
                                <div className="lead-data text-right ml-md-5 ml-4 pl-md-4">
                                    <span className="d-block">Points</span> 2,145,000
                                </div>
                            </Link>
                            <Link href="#" className="lead-strip li-grad d-flex align-items-center mb-4">
                                <div className="lead-date flex-grow-1">
                                    08-19-2020
                                </div>
                                <div className="lead-data text-right">
                                    <span className="d-block">Position</span> 1
                                </div>
                                <div className="lead-data text-right ml-md-5 ml-4 pl-md-4">
                                    <span className="d-block">Points</span> 2,145,000
                                </div>
                            </Link>
                            <Link href="#" className="lead-strip li-grad d-flex align-items-center mb-4">
                                <div className="lead-date flex-grow-1">
                                    08-19-2020
                                </div>
                                <div className="lead-data text-right">
                                    <span className="d-block">Position</span> 1
                                </div>
                                <div className="lead-data text-right ml-md-5 ml-4 pl-md-4">
                                    <span className="d-block">Points</span> 2,145,000
                                </div>
                            </Link>
                            <Link href="#" className="lead-strip li-grad d-flex align-items-center mb-4">
                                <div className="lead-date flex-grow-1">
                                    08-19-2020
                                </div>
                                <div className="lead-data text-right">
                                    <span className="d-block">Position</span> 1
                                </div>
                                <div className="lead-data text-right ml-md-5 ml-4 pl-md-4">
                                    <span className="d-block">Points</span> 2,145,000
                                </div>
                            </Link>
                            <Link href="#" className="lead-strip li-grad d-flex align-items-center mb-4">
                                <div className="lead-date flex-grow-1">
                                    08-19-2020
                                </div>
                                <div className="lead-data text-right">
                                    <span className="d-block">Position</span> 1
                                </div>
                                <div className="lead-data text-right ml-md-5 ml-4 pl-md-4">
                                    <span className="d-block">Points</span> 2,145,000
                                </div>
                            </Link>
                            <Link href="#" className="lead-strip li-grad d-flex align-items-center mb-4">
                                <div className="lead-date flex-grow-1">
                                    08-19-2020
                                </div>
                                <div className="lead-data text-right">
                                    <span className="d-block">Position</span> 1
                                </div>
                                <div className="lead-data text-right ml-md-5 ml-4 pl-md-4">
                                    <span className="d-block">Points</span> 2,145,000
                                </div>
                            </Link>
                        </Col>
                        <Col md={4} lg={3} className="mb-4">
                            <Button href="#" block className="form-btn border-0 text-uppercase">SEE ALL TIME LEADERBOARD</Button>

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
