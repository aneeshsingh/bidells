import React, { Component } from 'react';
import axios from "./instance/axios";
import { Redirect } from "react-router-dom";
import {
    Link
  } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Header
import Header from './header/HeaderPost';

// assets
import Ovel_01 from '../assets/Oval_dashboard_01.svg';
import arrowRight from '../assets/arrow-right-solid.png';
import Ads_02 from '../assets/ads_03.png';
import Ads from '../assets/ads.png';
import OvalRight from '../assets/Oval_dashboard_02.svg';

import Uber from '../assets/uber-logo.png';

class RedeemCongrats extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          email: "",
          phone: "",
          address: "",
          redirect: false,
          message: '',
          errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getData() {
        let Auth = localStorage.getItem("auth_bdGroup");
    
        axios
          .get(`/?itemType=getUserDetails&userID=${Auth}`)
          .then((res) => {
            const data = res.data;
            // console.log(data);

            const name = data.userFullName;
            const email = data.emailAddress;
            const phone = data.phoneNumber;
            const address = data.address;
    
            this.setState({
              name,
              email,
              phone,
              address,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    
      componentWillMount() {
        this.getData();
      }


      handleSubmit(e) {
        e.preventDefault();
        if (this.validateForm()){
      
          const data = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            address: this.state.address,
          };
      
          axios
          .post(`/?itemType=orderIsBeingProcessed&quantity&orderID=${this.props.location.state.order_id}&user-email-address=${data.email}&address=${data.address}&phone=${data.phone}&user-full-name=${data.name}`)
          .then((res) => {
                const data = res.data;
                // console.log(data);
                if(data.order_id){
                  this.setState({
                    redirect: true, 
                    message: data.message
                  });                  
                }
            })
            .catch((error) => {
                console.log(error);
            });
            
            
          }
      }

      validateForm() {
        let fields = this.state;
        let errors = {};
        let formIsValid = true;
        
        // First Name error messages
        if (!fields.name) {
          formIsValid = false;
          errors["name"] = "*Please enter your fullname.";
        }
    
        if (typeof fields.name !== "undefined") {
          if (!fields.name.match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["name"] = "*Please enter alphabet characters only.";
          }
        }
    
        // Email Address error messages
        if (!fields.email) {
          formIsValid = false;
          errors["email"] = "*Please enter your email address.";
        }
    
        if (typeof fields.email !== "undefined") {
          //regular expression for email validation
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(fields.email)) {
            formIsValid = false;
            errors["email"] = "*Please enter valid email address.";
          }
        }
        
        if (!fields.phone) {
          formIsValid = false;
          errors["phone"] = "*Please enter your phone no.";
        }
    
        // if (typeof fields.phone !== "undefined") {
        //   if (!fields.phone.match(/^[0-9]{10}$/)) {
        //     formIsValid = false;
        //     errors["phone"] = "*Please enter valid phone no.";
        //   }
        // }
    
    
        this.setState({
          errors: errors
        });
        return formIsValid;
      }

    render() {
      if (this.state.redirect) {
        return <Redirect to='/redeem-order' />;
      }

        return (
            <div className="outer-view">
                <Header />
                

                <img src={OvalRight} className="ovel-bottom-right d-block d-md-none" style={{ top: '0px' }} alt="ovel shape" />
                <div className="top_offset position-relative">
                    <img src={Ovel_01} className="place-oval-Lbottom" alt="ovel shape" />

                    <Container fluid="md">
                        <Row className="justify-content-between">
                            <Col md={8} lg={8} className="mt-md-5 mt-md-4 mt-3">
                                <Row>
                                    <Col md={9} className="mb-md-5 mb-4">
                                        <div className="heading-area d-none d-md-block">
                                            <div className="post_type">EXPERIENCE</div>
                                            <h1>Congratulations!</h1>
                                            <p>Yay! Your Transaction Is Now Complete. Please Fill Up The Form For Confirmation</p>
                                        </div>
                                        <div className="heading-area d-block d-md-none">
                                            <div className="post_type">EXPERIENCE</div>
                                            <h1>Uber Gift Card $50!</h1>
                                            <p>Get a reliable ride in minutes with the Uber app.</p>
                                        </div>
                                    </Col>

                                    <Col md={8} lg={7}>
                                        <Form onSubmit={this.handleSubmit}>
                                            <Form.Group>
                                                <Form.Control 
                                                    type="text" 
                                                    name="name"
                                                    className="form-shadow form-radius border-0" 
                                                    placeholder="Name" 
                                                    value={this.state.name}
                                                    onChange={(e) =>
                                                        this.setState({ name: e.target.value })
                                                    }
                                                />
                                                <div className="error_msg">{this.state.errors.name}</div>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Control 
                                                    type="email" 
                                                    name="email"
                                                    className="form-shadow form-radius border-0" 
                                                    placeholder="Email" 
                                                    value={this.state.email}
                                                    onChange={(e) =>
                                                    this.setState({ email: e.target.value })
                                                    }
                                                />
                                                <div className="error_msg">{this.state.errors.email}</div>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Control 
                                                    type="text" 
                                                    name="phone"
                                                    className="form-shadow form-radius border-0" 
                                                    placeholder="Phone Number" 
                                                    value={this.state.phone}
                                                    onChange={(e) =>
                                                    this.setState({ phone: e.target.value })
                                                    }
                                                />
                                                <div className="error_msg">{this.state.errors.phone}</div>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Control 
                                                    type="text"
                                                    name="address" 
                                                    className="form-shadow form-radius border-0" 
                                                    placeholder="Address" 
                                                    value={this.state.address}
                                                    onChange={(e) =>
                                                    this.setState({ address: e.target.value })
                                                    }
                                                />
                                            </Form.Group>
                                            <Button 
                                                variant="light" 
                                                type="submit" 
                                                block 
                                                className="form-btn d-flex align-items-center border-0 form-btn-skyblue">
                                                    SUBMIT 
                                                    <img className="ml-auto" src={arrowRight} alt="arrow" />
                                            </Button>
                                            {
                                                this.state.message 
                                                ?   
                                            <p className="lead mt-4 text-success"><strong>Congratulations! Order has been Created</strong></p>
                                                :
                                                null
                                                }
                                        </Form>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={4} lg={3} className="mb-md-5">
                                <div className="post_box redeem_box d-md-flex py-4 d-none">
                                    <img src={Uber} className="post_logo" alt="horse" />
                                    <div className="m-auto">
                                        <div className="post_type">EXPERIENCE</div>
                                        <h2><Link to="#">Uber Gift Card $50</Link></h2>
                                        <p className="mb-0">Get a reliable ride in minutes with the Uber app.</p>
                                    </div>

                                    <div className="redeem-points position-absolute">50,000</div>
                                </div>

                                <div className="ads-portFrame mt-md-5 mt-4 d-none d-md-block">
                                    <img src={Ads_02} alt="ads" />
                                </div>
                                <div className="ads-frame mx-auto mt-4 d-block d-md-none">
                                    <img src={Ads} alt="Ads Poster" />
                                </div>
                            </Col>
                        </Row>
                    </Container>

                </div>
                
            </div>
        );
    }
}

export default RedeemCongrats;
