import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Header
import Header from './header/Header';

import ResultGrids from './common/ResultGrids';

// assets
import Ovel_01 from '../assets/Oval_dashboard_01.svg';
import Ads_02 from '../assets/ads_03.png';
import Ads_03 from '../assets/ads_04.png';
import Ads from '../assets/ads.png';
import SearchIcon from '../assets/search-solid.svg';
import Oval from '../assets/Ovalpmob-left.svg';
import OvalRight from '../assets/Oval_dashboard_02.svg';

class AllResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };
    }

    componentDidMount(){
        let Auth = localStorage.getItem('auth_bdGroup');
        if(!Auth){
            this.setState({
                redirect: true
            })
        }
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
                        <Row className="mb-md-5 mb-4">
                            <Col md={8} lg={9} className="mb-2 pr-md-5">
                                <Row className="content-area">
                                    <Col md={8}>
                                        <div className="heading-area">
                                            <div className="post_type">RESULTS</div>
                                            <h1>ALL RESULTS</h1>
                                            <p>Doncaster Mile 2019 is one of the biggest races on the Australian autumn racing calendar.</p>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="pt-4">
                                    <Form>
                                        <Form.Group className="form-search position-relative">
                                            <Button type="submit" className="search-icon position-absolute p-0 btn-reset"><img src={SearchIcon} alt="search"/></Button>
                                            <Form.Control type="text" className="form-shadow rounded-pill border-0" placeholder="SEARCH" />
                                        </Form.Group>
                                    </Form>
                                </div>

                                <div className="mt-4 pt-5">
                                    <ResultGrids />
                                </div>
                            </Col>

                            <Col md={4} lg={3} className="mb-md-2">
                                <div className="ads-portFrame p-md-5 p-4">
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

                        <div className="pt-4">
                            <Row className="justify-content-between">
                                
                                
                            </Row>
                        </div>
                    </Container>

                </div>
                
            </div>
        );
    }
}

export default AllResults;