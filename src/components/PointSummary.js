import React, { Component } from 'react';
import axios from './instance/axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Chart from 'react-apexcharts';

// Header
import Header from './header/Header';

// assets
import Ovel_01 from '../assets/Oval_dashboard_01.svg';
import Ads_02 from '../assets/ads_03.png';
import Ads from '../assets/ads.png';
import Oval from '../assets/Ovalpmob-left.svg';
import OvalRight from '../assets/Oval_dashboard_02.svg';

class PointSummary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            height: '300', 
            description: '',
            totalPoints: '',
            getUserActivity: [],
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


    getLeadData(){
        let Auth = localStorage.getItem('auth_bdGroup');
        
        axios.get(`/?itemType=pointsummary&userID=${Auth}`)
            .then(res => {
            const data = res.data;
            
            const description = res.data.post_content;
            const totalPoints = res.data.total_points;

            const getUserActivity = Object.entries(data.get_user_activity).map(([key, activity], index) => 
                <div className="activites-strip align-items-center d-flex mb-4" key={key}>
                    <div>
                        <span className="type text-uppercase">{activity.userActivityType}</span>
                        <div className="date pt-0 pb-2 d-block d-lg-none">{activity.userActivityDate}</div>
                        <p>{activity.userActivityName}</p>
                    </div>
                    <div className="date ml-auto d-none d-lg-block">
                        {activity.userActivityDate}
                    </div>
                </div>
            )

            this.setState({
                getUserActivity,
                description,
                totalPoints
            })
            
        }).catch((error) => {
            console.log(error)
        })
    }

    componentWillMount(){
        this.getLeadData();

        if(window.innerWidth < 991){
            this.setState({height: '160'});
        }
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
                        <Row className="align-items-center justify-content-between content-area mb-4">
                            <Col md={8} lg={7}>
                                <div className="heading-area">
                                    <div className="post_type">REFERRAL</div>
                                    <h1>Points Summary</h1>
                                    <p>{this.state.description}</p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="mb-4">
                            <Col>
                                <div className="graph position-relative my-3 li-grad pt-md-5 px-md-5 px-4 pt-4 pb-0">
                                    <div className="graph-info text-uppercase mb-3">
                                        <strong>{this.state.totalPoints}</strong>
                                        Total Points
                                    </div>
                                    <Chart options={this.state.options} series={this.state.series} height={this.state.height} />
                                </div>
                            </Col>
                        </Row>

                        <div className="pt-4 pb-md-5">
                        <Row className="justify-content-between">
                                <Col md={8} lg={9} className="mb-2 pr-md-5">

                                    {this.state.getUserActivity}
                                    
                                </Col>
                                <Col md={4} lg={3} className="mb-md-2">
                                        <div className="ads-portFrame d-none d-md-block">
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
}

export default PointSummary;