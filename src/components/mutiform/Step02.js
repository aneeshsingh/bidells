import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Search from '../../assets/search-solid.svg';
import SearchUser from '../../assets/post_user.png';

function Step() {
  return (
    <Row>
        <Col lg={4}>
            <div className="multistep-info d-flex flex-column justify-content-center h-100">
                <div className="step_count">02</div>
                <h2>Create your own</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed magna eros. Quisque eget lorem nec urna convallis posuere.</p>

                <div className="multistep_progress position-absolute d-flex">
                    <span className="flex-grow-1">01</span>
                    <span className="flex-grow-1 active">02</span>
                    <span className="flex-grow-1">03</span>
                    <span className="flex-grow-1">04</span>
                </div>
            </div>
        </Col>
        <Col lg={8}>
            <div className="multistep-inner">
                <div className="multistep-heading mb-4">
                    <h3>Who are the players?</h3>
                    <p>Please make sure that you are friends with the users</p>
                </div>
                <Form>
                    <Form.Row>
                        <Col md={8} lg={6}>
                            <Form.Group className="form-serach position-relative">
                                <Form.Control type="text" className="form-shadow pr-5 form-radius border-0" placeholder="Invite friends" />
                                <Button variant="link" className="search-icon p-0"><img src={Search} alt="search" /></Button>
                            </Form.Group>
                        </Col>
                    </Form.Row>
                </Form>

                <ul className="search-list list-unstyled mt-3">
                    <li>
                        <Button href="#" variant="link" className="btn-reset p-0">
                            <span className="search-pic">
                                <img src={SearchUser} alt="search"/>
                            </span>
                            <span className="search-name">You</span>
                        </Button>
                    </li>
                    <li>
                        <Button href="#" variant="link" className="btn-reset p-0">
                            <span className="search-pic">
                                <img src={SearchUser} alt="search"/>
                            </span>
                            <span className="search-name">Laura Sofía Ureña</span>
                        </Button>
                    </li>
                </ul>
            </div>
        </Col>
    </Row>
  );
}

export default Step;
