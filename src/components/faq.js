import React, { Component, useContext } from 'react';
// import axios from './instance/axios';

import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import AccordionContext from 'react-bootstrap/AccordionContext';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Header
import Header from './header/Header';

// assets
import ArrowDown from '../assets/down_arrow.svg';
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
                <Col md={8}>
                  <div className="mb-4">
                    <h1>FAQ</h1>
                    
                    <div className="pt-4">
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Card.Header>
                                    <ContextAwareToggle eventKey="0">
                                        What is Bidells?
                                        <img src={ArrowDown} className="card-arrow" alt="arrow" />
                                    </ContextAwareToggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body className="lead">
                                        Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <ContextAwareToggle eventKey="1">
                                        How much does Bidells cost?
                                        <img src={ArrowDown} className="card-arrow" alt="arrow" />
                                    </ContextAwareToggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body className="lead">Nothing… Nothing at all!</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <ContextAwareToggle eventKey="2">
                                        Where and When can I bid? 
                                        <img src={ArrowDown} className="card-arrow" alt="arrow" />
                                    </ContextAwareToggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body className="lead">Anytime and anywhere. Bidells is available on iOS and Android apps.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <ContextAwareToggle eventKey="3">
                                        How do I cancel?
                                        <img src={ArrowDown} className="card-arrow" alt="arrow" />
                                    </ContextAwareToggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body className="lead">Just let us know if you would like us to cancel your account. But remember its 100% free to stay on the platform for as long as you want.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </div>
                    
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        );
    }
}


function ContextAwareToggle({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);
  
    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    const isCurrentEventKey = currentEventKey === eventKey;
  
    return (
      <div
        className={`card-header-btn ${isCurrentEventKey ? 'down' : 'up'}`}
        onClick={decoratedOnClick}
      >
        {children}
      </div>
    );
  }

export default About;
