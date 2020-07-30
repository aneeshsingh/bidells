import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Chart from 'react-apexcharts';

// Header
import Header from './header/HeaderDashboard';

// assets
import Ovel_01 from '../assets/Oval_dashboard_01.svg';
import Ads_02 from '../assets/ads_03.png';

class Leaderboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
        
          series: [{
              name: "Leads",
              data: [100, 260, 423, 390, 200]
          }],
          options: {
            chart: {
              type: 'line',
              zoom: {
                enabled: false
              },
              toolbar: {
                  show: false
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            title: {
                enabled: false
            },
            grid: {
                show: false
            },
            tooltip: {
                theme: 'dark',
            },
            xaxis: {
                labels: {
                    show: false
                },
                tooltip:{
                    enabled: false
                },
                crosshairs: {
                    show: false
                },
                categories: ['1/11/2020', '2/11/2020', '3/11/2020', '4/11/2020', '5/11/2020'],
            },
            yaxis: {
                labels: {
                    show: false
                }
            },
            colors: ['#FE3A21'],
            fill: {
                type: 'gradient',
                gradient: {
                    gradientToColors: [ '#FC7B45'],
                    shadeIntensity: 1,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 200, 100, 100]
                }
            },
            markers: {
                size: 6,
                colors: ["#FE3A21"],
                strokeColors: "transparent",
                strokeWidth: 0,
                hover:{
                    size: 10
                }
            },
            legend: {
                show: false
            }
          },    
        };
    }

    render() {
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
                                <div className="graph position-relative my-3 li-grad pt-md-5 px-4 pt-4 pb-0">
                                    <div className="graph-info position-absolute">
                                        <strong>423</strong>
                                        AVERAGE POSITION
                                    </div>

                                    <Chart options={this.state.options} series={this.state.series} height="250" />
                                </div>
                            </Col>
                        </Row>

                        <div className="pt-4 pb-5">
                            <Row className="justify-content-between">
                                <Col md={8} lg={8} className="mb-4">
                                    <Link to="#" className="lead-strip li-grad d-flex align-items-center mb-4">
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
                                    <Link to="#" className="lead-strip li-grad d-flex align-items-center mb-4">
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
                                    <Link to="#" className="lead-strip li-grad d-flex align-items-center mb-4">
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
                                    <Link to="#" className="lead-strip li-grad d-flex align-items-center mb-4">
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
                                    <Link to="#" className="lead-strip li-grad d-flex align-items-center mb-4">
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
                                    <Link to="#" className="lead-strip li-grad d-flex align-items-center mb-4">
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
                                    <Link to="#" className="lead-strip li-grad d-flex align-items-center mb-4">
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
}

export default Leaderboard;