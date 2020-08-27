import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Header
import Header from './header/Header';

// assets
import Oval_01 from '../assets/welcome_oval.svg';
import OvalRight from '../assets/Oval_dashboard_02.svg';
import DesktopView from '../assets/Desktop.jpg';


class Devices extends Component {
    render() {     
        return (
            <div className="outer-view welcome-outer">
                <img src={OvalRight} className="ovel-bottom-right d-block d-md-none" alt="ovel shape" />
                <Header />
                <div className="top_offset">
                    <section className="infomation_area content-area position-relative">
                        <img src={Oval_01} className="oval bottom-left welcome-oval" alt="ovel shape" />
                        <Container fluid="md">
                            <Row className="space-bottom justify-content-between">
                                <Col md={6} lg={6} className="mb-md-0 mb-4">
                                    <img src={DesktopView} className="img-fluid rounded-2x" alt="screen" />
                                </Col>
                                <Col md={6} lg={6}>
                                    <div className="mb-4">
                                        <h1 className="display-3">Desktops</h1>
                                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies lectus et eros bibendum, quis auctor nisi convallis. Cras quis pulvinar velit, id placerat lectus. Fusce aliquet dolor nec eros sollicitudin, id ornare nunc blandit.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className="infomation_area content-area position-relative">
                        <img src={Oval_01} className="oval bottom-left welcome-oval" alt="ovel shape" />
                        <Container fluid="md">
                            <Row className="space-bottom justify-content-between">
                                <Col md={6} lg={5} className="order-md-2 mb-md-0 mb-4">
                                    <img src={DesktopView} className="img-fluid rounded-2x" alt="screen" />
                                </Col>
                                <Col md={6} lg={6}>
                                    <div className="mb-4">
                                        <h1 className="display-3">iPhone</h1>
                                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies lectus et eros bibendum, quis auctor nisi convallis. Cras quis pulvinar velit, id placerat lectus. Fusce aliquet dolor nec eros sollicitudin, id ornare nunc blandit.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <section className="infomation_area content-area position-relative">
                        <img src={Oval_01} className="oval bottom-left welcome-oval" alt="ovel shape" />
                        <Container fluid="md">
                            <Row className="space-bottom justify-content-between">
                                <Col md={6} lg={5} className="mb-md-0 mb-4">
                                    <img src={DesktopView} className="img-fluid rounded-2x" alt="screen" />
                                </Col>
                                <Col md={6} lg={6}>
                                    <div className="mb-4">
                                        <h1 className="display-3">Android</h1>
                                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies lectus et eros bibendum, quis auctor nisi convallis. Cras quis pulvinar velit, id placerat lectus. Fusce aliquet dolor nec eros sollicitudin, id ornare nunc blandit.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>                
            </div>
        );
    }
}

export default Devices;
