import React, { Component } from 'react';
import axios from './instance/axios';
import {
    Link,
    Redirect
  } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

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

class Leaderboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
            getLeads: []    
        };
    }

    componentWillMount(){
        let Auth = localStorage.getItem('auth_bdGroup');
        if(!Auth){
            this.setState({
                redirect: true
            })
        }
    }

    getLeadData(){
        let Auth = localStorage.getItem('auth_bdGroup');

        axios.get(`/?itemType=getAllLeaderboards&userID=${Auth}`)
            .then(res => {
            const data = res.data;
            console.log(data);
            if(!data.error){
                const getLeads = Object.entries(data).map(([key, lead], index) => 
                    <Link to={'/leaderboard-view/'+lead.leaderboard_id} className="lead-strip li-grad d-flex flex-wrap align-items-center mb-4" key={key}>
                    <div className="lead-date flex-grow-1">
                        {lead.week_name}
                    </div>
                    <div className="lead-data text-sm-right">
                        <span className="d-block">Position</span> {lead.position}
                    </div>
                    <div className="lead-data text-sm-right ml-md-5 ml-4 pl-md-4">
                        <span className="d-block">Points</span> {lead.points}
                    </div>
                </Link>
                )

                this.setState({
                    getLeads
                })
            }

            
        }).catch((error) => {
            console.log(error)
        })
    }

    componentDidMount() {
        this.getLeadData();
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/login" />;
        }
        return (
            <div className="outer-view">
                <Header />
                

                <img src={Oval} className="oval-top-left d-block d-md-none" alt="ovel shape" />
                <img src={OvalRight} className="ovel-bottom-right d-block d-md-none" style={{ top: '0px' }} alt="ovel shape" />
                <div className="top_offset position-relative">
                    <img src={Ovel_01} className="place-oval-Lbottom" alt="ovel shape" />

                    <Container fluid="md">
                        <Row className="align-items-center content-area mb-md-5 mb-4">
                            <Col lg={6}>
                                <div className="heading-area">
                                    <div className="post_type">YOUR LEADERBOARD</div>
                                    <h1>WEEKLY LEADERBOARDS</h1>
                                    <p>Doncaster Mile 2019 is one of the biggest races on the Australian autumn racing calendar.</p>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="graph position-relative my-3 li-grad pt-md-5 px-4 pt-4 pb-0">
                                    <div className="graph-info position-absolute">
                                        <strong>423</strong>
                                        AVERAGE POSITION
                                    </div>

                                    {/* <Chart options={this.state.options} series={this.state.series} height={this.state.height} /> */}
                                    <Chart height='220' />
                                </div>
                            </Col>
                        </Row>

                        <div className="pt-4 pb-md-5">
                            <Row className="justify-content-between">
                                <Col className="d-md-none mb-4">
                                    <Button href="#" block variant="-" className="form-btn border-0 text-truncate text-uppercase">SEE ALL TIME LEADERBOARD</Button>
                                </Col>
                                <Col md={8} lg={8} className="mb-4">
                                    {this.state.getLeads}                                    
                                    {/* <Link to="#" className="lead-strip li-grad d-flex align-items-center mb-4">
                                        <div className="lead-date flex-grow-1">
                                            08-19-2020
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
                                    <Button href="#" block variant="-" className="form-btn d-none d-md-block border-0 text-truncate text-uppercase">SEE ALL TIME LEADERBOARD</Button>

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

export default Leaderboard;