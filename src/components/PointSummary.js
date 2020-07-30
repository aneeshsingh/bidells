import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Chart from 'react-apexcharts';

// Header
import Header from './header/HeaderDashboard';

// assets
import Ovel_01 from '../assets/Oval_dashboard_01.svg';
import Ads_02 from '../assets/ads_03.png';

class PointSummary extends Component {
    constructor(props) {
        super(props);

        this.state = {
        
          series: [{
              name: "Leads",
              data: [100, 70, 85, 95, 65, 70, 65, 40, 30, 65, 45, 95, 95, 45, 50, 40, 20, 75, 25, 75]
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
                categories: ['1/11/2020', '2/11/2020', '3/11/2020', '4/11/2020', '5/11/2020', '6/11/2020', '7/11/2020', '8/11/2020', '9/11/2020', '10/11/2020', '11/11/2020', '12/11/2020', '13/11/2020', '14/11/2020', '15/11/2020', '16/11/2020', '17/11/2020', '18/11/2020', '19/11/2020', '20/11/2020'],
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
                                <div className="graph position-relative my-3 li-grad pt-md-5 px-md-5 px-4 pt-4 pb-0">
                                    <div className="graph-info text-uppercase mb-3">
                                        <strong>3,000</strong>
                                        Total Points
                                    </div>
                                    <Chart options={this.state.options} series={this.state.series} height="300" />
                                </div>
                            </Col>
                        </Row>

                        <div className="pt-4 pb-5">
                        <Row className="justify-content-between">
                                <Col md={8} lg={9} className="mb-2 pr-md-5">
                                    <div className="activites-strip align-items-center d-flex mb-4">
                                        <div>
                                            <span className="type">POINTS REDEEMED</span>
                                            <p>You purchased Restaurant Choice Fine Dining Gift Card $50 for B50000</p>
                                        </div>
                                        <div className="date ml-auto">
                                            02-15-2020
                                        </div>
                                    </div>
                                    <div className="activites-strip align-items-center d-flex mb-4">
                                        <div>
                                            <span className="type">POINTS REDEEMED</span>
                                            <p>You finished 10 and won B0 for the Week 4 competition</p>
                                        </div>
                                        <div className="date ml-auto">
                                            02-15-2020
                                        </div>
                                    </div>
                                    <div className="activites-strip align-items-center d-flex mb-4">
                                        <div>
                                            <span className="type">POINTS REDEEMED</span>
                                            <p>You placed a bet on Adam Scott for with the odds of .4</p>
                                        </div>
                                        <div className="date ml-auto">
                                            02-15-2020
                                        </div>
                                    </div>
                                    <div className="activites-strip align-items-center d-flex mb-4">
                                        <div>
                                            <span className="type">POINTS REDEEMED</span>
                                            <p>Sorry you bid was not successful with 3. All Cylinders (9)</p>
                                        </div>
                                        <div className="date ml-auto">
                                            02-15-2020
                                        </div>
                                    </div>
                                    <div className="activites-strip align-items-center d-flex mb-4">
                                        <div>
                                            <span className="type">POINTS REDEEMED</span>
                                            <p>You placed a bet on Sydney Roosters for 2123 with the odds of .25</p>
                                        </div>
                                        <div className="date ml-auto">
                                            02-15-2020
                                        </div>
                                    </div>
                                    <div className="activites-strip align-items-center d-flex mb-4">
                                        <div>
                                            <span className="type">POINTS REDEEMED</span>
                                            <p>You placed a bet on St George for with the odds of .75</p>
                                        </div>
                                        <div className="date ml-auto">
                                            02-15-2020
                                        </div>
                                    </div>
                                    <div className="activites-strip align-items-center d-flex mb-4">
                                        <div>
                                            <span className="type">POINTS REDEEMED</span>
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
}

export default PointSummary;