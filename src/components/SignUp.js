import React, { Component } from 'react';
import PhoneInput from 'react-phone-input-2';
import axios from './instance/axios';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

// Header
import HeaderLogin from './header/HeaderLogin';

// assets
import BgImage from '../assets/signupImage.jpg';
import Ads from '../assets/ads.png';
import arrowRight from '../assets/arrow-right-solid.png';
import Ovel from '../assets/oval_01.svg';
import OvalRight from '../assets/Oval_dashboard_02.svg';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            password:'',
            confirmPassword:''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    }

    gen4() {
    return Math.random().toString(16).slice(-2)
    }

    handleSubmit(e) {
        e.preventDefault();
        // console.log(this.gen4());
        const data = {
          name: this.state.firstName + this.state.lastName,
          phone: this.state.phone ? this.state.phone : this.state.data.phone,
          email: this.state.email ? this.state.email : this.state.data.email,
          password: this.state.password ? this.state.password : this.state.data.password,
          userID: this.gen4()
        };

        axios.post('/?itemType=register', { data })
        .then(res => {
          console.log(data);
          console.log(this.state.data);
        }).catch((error) => {
            console.log(error)
        });

        console.log(data)
    }

    // handleChange(event) {
    //     this.setState({
    //         email: event.target.value
    //     });
    // }

    render() {
        return (
            <div className="outer-view">
                <HeaderLogin />
                
                <img src={Ovel} className="ovel-bottom-left d-none d-lg-block" alt="ovel shape" />
                <img src={OvalRight} className="ovel-bottom-right d-block d-lg-none" alt="ovel shape" />
                <Row noGutters className="mh-100">
                    <Col sm={12} md={6}>
                        <div className="col-content content-area top_offset">
                            <Row>
                                <Col md={10} lg={10}>
                                    <div className="mb-4 pb-1">
                                        <h1>Lets get started!</h1>
                                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras est justo, ullamcorper et ipsum fringilla, convallis faucibus ex.</p>
                                    </div>
                                </Col>
                                <Col md={12} lg={12}>
                                    <Form  onSubmit={this.handleSubmit}>
                                        <Form.Row>
                                            <Col sm={12}>
                                                <Form.Group>
                                                    <Form.Control type="text" className="form-shadow form-radius border-0" value={this.state.firstName} onChange={(e) => this.setState({firstName: e.target.value})} placeholder="First Name" />
                                                </Form.Group>
                                            </Col>
                                            <Col sm={12}>
                                                <Form.Group>
                                                    <Form.Control type="text" className="form-shadow form-radius border-0" value={this.state.lastName} onChange={(e) => this.setState({lastName: e.target.value})} placeholder="Last Name" />
                                                </Form.Group>
                                            </Col>
                                            <Col sm={12}>
                                                <Form.Group>
                                                    <Form.Control type="email" className="form-shadow form-radius border-0" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} placeholder="Email Address" />
                                                </Form.Group>
                                            </Col>
                                            <Col sm={12}>
                                                <Form.Group>
                                                    <PhoneInput country={'au'} enableAreaCodes={true} value={this.state.phone} dropdownClass="form-shadow form-radius border-0" inputClass="form-shadow form-radius border-0" onChange={phone => this.setState({ phone })} />
                                                </Form.Group>
                                            </Col>
                                            {/* <Col xs={3}>
                                                <Form.Group>
                                                    <Form.Control type="text" className="form-shadow form-radius border-0" placeholder="AU" />
                                                </Form.Group>
                                            </Col>
                                            <Col xs={9}>
                                                <Form.Group>
                                                    <Form.Control type="text" className="form-shadow form-radius border-0" placeholder="Phone Number" />
                                                </Form.Group>
                                            </Col> */}
                                            <Col sm={12}>
                                                <Form.Group>
                                                    <Form.Control type="password" className="form-shadow form-radius border-0" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} placeholder="Password" />
                                                </Form.Group>
                                            </Col>
                                            <Col sm={12}>
                                                <Form.Group>
                                                    <Form.Control type="password" className="form-shadow form-radius border-0" value={this.state.confirmPassword} onChange={(e) => this.setState({confirmPassword: e.target.value})} placeholder="Confirm Password" />
                                                </Form.Group>
                                            </Col>
                                        </Form.Row>
                                        
                                        
                                        
                                        <Button variant="light" type="submit" block className="form-btn d-flex align-items-center border-0 form-btn-skyblue">SUBMIT <img className="ml-auto" src={arrowRight} alt="arrow" /></Button>
                                    </Form>
                                    
                                    <div className="mt-4">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras est justo, ullamcorper et ipsum fringilla, convallis faucibus ex.</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>

                    <Col sm={12} md={6}>
                        <div className="cover-image position-relative d-flex h-100 w-100" style={{ backgroundImage: `url(${BgImage})` }}>
                            <div className="ads-frame mx-auto mt-auto mb-md-3">
                                <img src={Ads} alt="Ads Poster" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default SignUp;