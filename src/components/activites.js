import React, { Component } from 'react';
import axios from './instance/axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Header
import Header from './header/Header';

// assets
import Ovel_01 from '../assets/Oval_dashboard_01.svg';
import Ads_02 from '../assets/ads_03.png';
import Ads_03 from '../assets/ads_04.png';  
import Ads from '../assets/ads.png';
import Oval from '../assets/Ovalpmob-left.svg';
import OvalRight from '../assets/Oval_dashboard_02.svg';

class activites extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            activites: []
        }
    }

    getActivites(){
        axios.get(`/?itemType=getAllUserActivity&userID=6`)
            .then(res => {
            const data = res.data;
            console.log(Object.entries(data));
            const activites = Object.entries(data).map(([key, activity], index) => 
                <div className="activites-strip align-items-center d-flex mb-4"  key={key}>
                    <div>
                        <span className="type text-uppercase">{activity.userActivityType}</span>
                        <div className="date pt-0 pb-2 d-block d-lg-none">
                            {activity.userActivityDate}
                        </div>
                        <p>{activity.userActivityName}</p>
                    </div>
                    <div className="date ml-auto d-none d-lg-block">
                        {activity.userActivityDate}
                    </div>
                </div>
             )

            this.setState({
                activites
            })
            
        }).catch((error) => {
            console.log(error)
        })
    }

    componentDidMount() {
        this.getActivites();
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
                                    <div className="post_type">SHOP</div>
                                    <h1>ACTIVITIES</h1>
                                    <p>Doncaster Mile 2019 is one of the biggest races on the Australian autumn racing calendar.</p>
                                </div>
                            </Col>
                        </Row>

                        <div className="pt-4">
                            <Row className="justify-content-between">
                                <Col md={8} lg={9} className="mb-2 pr-md-5">
                                    {this.state.activites}
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
}

export default activites;