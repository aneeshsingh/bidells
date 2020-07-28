import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Header
import Header from './header/Header';

// assets
import Image from '../assets/about-image.png';
import Ovel from '../assets/oval_01.svg';

function About() {
  return (
    <div className="outer-view">
        <Header />
        
        <img src={Ovel} className="ovel-bottom-left" alt="ovel shape" />
        <Container>
            <Row noGutters className="mh-100 content-area top_offset">
                <Col>
                    <div className="mb-4">
                        <h1>A little bit about us!</h1>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras est justo, ullamcorper et ipsum fringilla, convallis faucibus ex. Mauris fermentum, tellus venenatis venenatis accumsan, risus ante aliquam tortor, eget laoreet nibh arcu et augue. Curabitur interdum nibh vel sem posuere, in ornare felis rutrum. Sed condimentum turpis sed ipsum condimentum aliquet. Quisque eget feugiat odio. Nullam at nibh elementum, pellentesque enim et, efficitur massa. Nulla facilisi. Duis dictum feugiat lacus non vehicula.</p>
                    </div>
                </Col>

                <Col>
                    <div className="about_image text-center">
                        <img src={Image} alt="Image" className="img-fluid" />
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default About;
