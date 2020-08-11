import React from 'react';
import {
    Link
  } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

 // assets
import Logo from '../../assets/logo.png';

function Footer() {
  return (
    <div className="footer">
        <Container>
            <div className="footer-inner px-4 px-md-0">
                <Row className="justify-content-center">
                    <Col md={10} lg={7}>
                        <ul className="d-flex mb-0 list-unstyled align-items-center justify-content-between flex-wrap mx-ms-3 mx-1">
                            <li><Link to="/about">Bets</Link></li>
                            <li><Link to="#">Leaderboards</Link></li>
                            <li><Link to="#">Results</Link></li>
                            <li><Link to="#">Shop</Link></li>
                            <li><Link to="#">Activity</Link></li>
                            <li><Link to="#">Refer a friend</Link></li>
                            <li><Link to="/sitemap">Site map</Link></li>
                        </ul>

                        <div className="copyright text-center">
                            © Bidells
                        </div>

                        <div className="text-center">
                            <img src={Logo} className="f_logo" alt="logo" />
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </div>
  );
}

export default Footer;
