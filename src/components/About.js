import React, { Component } from 'react';
import axios from './instance/axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Header
import Header from './header/Header';

// assets
// import Image from '../assets/about-image.png';
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
        axios.get(`/?itemType=about`)
            .then(res => {
            const data = res.data;
            console.log(data);
            this.setState({ about : data });
        })
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
              <Row className="mh-100 content-area top_offset">
                <Col md={8}>
                  <div className="mb-4">
                    <h1>A little about us!</h1>
                    {/* <div className="lead content-preformat" dangerouslySetInnerHTML={{ __html: this.state.about.post_content}} /> */}
                    
                    {this.state.about.post_content &&
                    this.state.about.post_content
                        .split("\n")
                        .map((item, i) => <p className="lead" key={i}>{item}</p>)}
                    
                  </div>
                </Col>

                <Col md={4} className="d-none d-md-block">
                  <div className="about_image text-center mb-4">
                    <img
                      src={this.state.about.image}
                      alt="about"
                      className="img-fluid"
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        );
    }
}

export default About;
