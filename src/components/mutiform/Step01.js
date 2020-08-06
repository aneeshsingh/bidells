import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function Step() {
  return (
    <Row>
        <Col lg={4}>
            <div className="multistep-info d-flex flex-column justify-content-center h-100">
                <div className="step_count">01</div>
                <h2>Create your own</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed magna eros. Quisque eget lorem nec urna convallis posuere.</p>

                <div className="multistep_progress position-absolute d-flex">
                    <span className="flex-grow-1 active">01</span>
                    <span className="flex-grow-1">02</span>
                    <span className="flex-grow-1">03</span>
                    <span className="flex-grow-1">04</span>
                </div>
            </div>
        </Col>
        <Col lg={8}>
            <div className="multistep-inner">
            <Form>
                <Form.Group>
                    <h5>What is this bet about?</h5>
                    <Form.Control type="text" className="form-shadow form-radius border-0" placeholder="E.g. Aneesh vs Nicola, who will win the MAFS" />
                </Form.Group>
                <Form.Group>
                    <h5>Description</h5>
                    <Form.Control as="textarea" rows="3"  className="form-shadow form-radius border-0" placeholder="E.g. Aneesh vs Nicola, who will win the MAFS" />
                </Form.Group>

                <Row>
                    <Col md={6} className="py-md-4 pr-md-4">
                        <Form.Group>
                            <h6>SIDE #1</h6>
                            <Form.Control type="text" className="form-shadow form-radius border-0" placeholder="Amelia Cabal will win" />
                        </Form.Group>
                    </Col>
                    <Col md={6} className="py-md-4 pl-md-4 border-left-dashed">
                        <Form.Group>
                            <h6>SIDE #2</h6>
                            <Form.Control type="text" className="form-shadow form-radius border-0" placeholder="Chinmay Sarasvati will win" />
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
            </div>
        </Col>
    </Row>
  );
}

export default Step;
