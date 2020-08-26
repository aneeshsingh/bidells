import React, { Component } from 'react';
import axios from './instance/axios';
import { Redirect } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Header
import HeaderLogin from './header/HeaderLogin';

// assets
import BgImage from '../assets/loginImage.jpg';
import Ads from '../assets/ads.png';
import arrowRight from '../assets/arrow-right-solid.png';
import Oval from '../assets/oval_01.svg';
import OvalRight from '../assets/Oval_dashboard_02.svg';


class Verify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code:'',
            redirect: false,
            error: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        console.log(this.props.location.state.phonenumber)
    }
    

    handleSubmit(e) {
        e.preventDefault();
        // console.log(this.gen4());
        // const data = {
        //   email: this.state.email ? this.state.email : this.state.data.email,
        //   password: this.state.password ? this.state.password : this.state.data.password
        // };

      

        axios.get(`/?itemType=verifyCode&phone=${this.props.location.state.phonenumber}&code=${this.state.code}`)
        .then(res => {
            const data = res.data;
            if(data){
                this.setState({
                    redirect: true
                })
            }
        //   console.log(data);

        }).catch((error) => {
            console.log(error)
        });

        // console.log(data)
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/login" />;
        }

        return (
            <div className="outer-view">
                <HeaderLogin />
                
                <img src={Oval} className="ovel-bottom-left d-none d-lg-block" alt="ovel shape" />
                <img src={OvalRight} className="ovel-bottom-right d-block d-lg-none" alt="ovel shape" />
                <Row noGutters className="mh-100">
                    <Col sm={12} md={6}>
                        <div className="col-content content-area top_offset">
                            <Row>
                                <Col md={10} lg={10}>
                                    <div className="mb-4 pb-1">
                                        <h1>Verification</h1>
                                        <p className="lead">Please enter the verification code send to +{this.props.location.state.phonenumber}.</p>
                                    </div>
                                </Col>
                                <Col md={12} lg={12}>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Form.Group>
                                            <Form.Control type="text" className="form-shadow form-radius border-0" value={this.state.code} onChange={(e) => this.setState({code: e.target.value})} placeholder="Enter Code here" />
                                            {/* <Form.Text className="text-danger">{this.state.error}</Form.Text> */}
                                        </Form.Group>
                                        <Button variant="light" type="submit" block className="form-btn d-flex align-items-center border-0 form-btn-skyblue">Verify <img className="ml-auto" src={arrowRight} alt="arrow" /></Button>
                                    </Form>
                                </Col>
                            </Row>
                        </div>
                    </Col>

                    <Col sm={12} md={6} className="d-flex">
                        <div className="cover-image position-relative d-flex w-100" style={{ backgroundImage: `url(${BgImage})` }}>
                            <div className="ads-frame mx-auto mt-auto mb-md-3">
                                <img src={Ads} alt="Ads poster" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Verify;