import React, { Component } from 'react';
import axios from './instance/axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// common
import Chart from './common/lineBar';

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
            description: '',
            totalPoints: '',
            getUserActivity: []    
        };
    }


    getLeadData(){
        let Auth = localStorage.getItem('auth_bdGroup');
        
        axios.get(`/?itemType=pointsummary&userID=${Auth}`)
            .then(res => {
            const data = res.data;
            console.log(data);

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
                            <Col md={10} lg={8}>
                                <div className="heading-area">
                                    <div className="post_type">REFERRAL</div>
                                    <h1>Points Summary</h1>
                                    <p>{this.state.description}</p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="mb-4">
                            <Col>
                                <div className={"graph position-relative my-3 li-grad pt-md-5 px-md-5 px-4 pt-4 pb-0 " + (!this.state.totalPoints ? 'd-none' : null)}>
                                    <div className="graph-info text-uppercase mb-3">
                                        <strong>{this.state.totalPoints}</strong>
                                        Total Points
                                    </div>
                                    {/* <Chart options={this.state.options} series={this.state.series} height={this.state.height} /> */}
                                    <Chart height='300' />
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