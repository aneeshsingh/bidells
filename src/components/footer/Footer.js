import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

 // assets
import Logo from '../../assets/logo.png';

function Footer() {
  return (
    <div className="footer">
        <Container>
            <div className="footer-inner">
                <Row className="justify-content-center">
                    <Col md={7}>
                        <ul className="d-flex mb-0 list-unstyled align-items-center justify-content-between flex-wrap mx-ms-3 mx-1">
                            <li><a href="/about">Bets</a></li>
                            <li><a href="#">Leaderboards</a></li>
                            <li><a href="#">Results</a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">Activity</a></li>
                            <li><a href="#">Refer a friend</a></li>
                        </ul>

                        <div className="copyright text-center">
                            © Bidells
                        </div>

                        <div className="text-center">
                            <img src={Logo} alt="logo" />
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </div>
  );
}

export default Footer;
