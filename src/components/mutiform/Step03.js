import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function Step() {
  return (
    <Row>
        <Col lg={4}>
            <div className="multistep-info d-flex flex-column justify-content-center h-100">
                <div className="step_count">03</div>
                <h2>Create your own</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed magna eros. Quisque eget lorem nec urna convallis posuere.</p>

                <div className="multistep_progress position-absolute d-flex">
                    <span className="flex-grow-1">01</span>
                    <span className="flex-grow-1">02</span>
                    <span className="flex-grow-1 active">03</span>
                    <span className="flex-grow-1">04</span>
                </div>
            </div>
        </Col>
        <Col lg={8}>
            <div className="multistep-inner">
                <div className="multistep-heading mb-4">
                    <h3>Is this bet public?</h3>
                    <p>If you make this bet public then anyone can wager on this bet?</p>
                </div>
                <Form>
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        label=""
                    />
                </Form>
            </div>
        </Col>
    </Row>
  );
}

export default Step;
