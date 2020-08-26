import React, { Component } from 'react';
// import axios from './instance/axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Header
import Header from './header/Header';

// assets
import Call from '../assets/phone-call.png';
import Email from '../assets/envelope.png';
import Chat from '../assets/conversation.png';
import Oval from '../assets/oval_01.svg';
import OvalRight from '../assets/Oval_dashboard_02.svg';

class About extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            about: {}
        }
    }

    componentDidMount() {        
        // axios.get(`/?itemType=about`)
        //     .then(res => {
        //     const data = res.data;
        //     console.log(data);
        //     this.setState({ about : data });
        // })
    }
    render() {
        return (
          <div className="outer-view">
            <Header />

            <img
              src={Oval}
              className="ovel-bottom-left d-none d-lg-block"
              alt="ovel shape"
            />
            <img
              src={OvalRight}
              className="ovel-bottom-right d-block d-lg-none"
              alt="ovel shape"
            />
            <Container>
              <Row className="mh-100 justify-content-center content-area top_offset">
                <Col xl={9}>
                  <div className="mb-4">
                    <h1 className="text-center">Get in touch</h1>
                    
                    <div className="pt-4">
                        <Row className="justify-content-center">
                            <Col lg="4" sm="6" className="mb-4">
                                <div className="contact-info li-grad">
                                    <img src={Call} alt="icon" />
                                    <h6 className="mt-3 mb-0 d-block">Call Us</h6>
                                    <h3>1300 123 452</h3>
                                </div>
                            </Col>
                            <Col lg="4" sm="6" className="mb-4">
                                <div className="contact-info li-grad">
                                    <img src={Email} alt="icon" />
                                    <h6 className="mt-3 mb-0 d-block">Email us</h6>
                                    <h3>hello@bidells.com</h3>
                                </div>
                            </Col>
                            <Col lg="4" sm="6" className="mb-4">
                                <div className="contact-info li-grad">
                                    <img src={Chat} alt="icon" />
                                    <h6 className="mt-3 mb-0 d-block">Live Chat</h6>
                                    <a href="/" className="btn-link h3">Start now</a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        );
    }
}

export default About;
