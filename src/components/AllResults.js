import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Header
import Header from './header/HeaderDashboard';

import ResultGrids from './common/ResultGrids';

// assets
import Ovel_01 from '../assets/Oval_dashboard_01.svg';
import Ads_02 from '../assets/ads_03.png';
import Ads_03 from '../assets/ads_04.png';
import SearchIcon from '../assets/search-solid.svg';

// Commit code

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
                            <div className="post_type">RESULTS</div>
                            <h1>ALL RESULTS</h1>
                            <p>Doncaster Mile 2019 is one of the biggest races on the Australian autumn racing calendar.</p>
                        </div>
                    </Col>
                </Row>

                <div className="pt-4">
                    <Row className="justify-content-between">
                        <Col md={8} lg={9} className="mb-2 pr-md-5">
                            <Form>
                                <Form.Group className="form-search position-relative">
                                    <Button type="submit" className="search-icon position-absolute p-0 btn-reset"><img src={SearchIcon} alt="search"/></Button>
                                    <Form.Control type="text" className="form-shadow rounded-pill border-0" placeholder="SEARCH" />
                                </Form.Group>
                            </Form>

                            <div className="mt-4 pt-5">
                                <ResultGrids />
                            </div>
                        </Col>
                        <Col md={4} lg={3} className="mb-2">
                            <div className="ads-portFrame p-md-5 p-sm-4 p-3">
                                <img src={Ads_03} alt="ads" />
                            </div>

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
