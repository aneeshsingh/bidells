import React, { Component } from "react";
import PhoneInput from "react-phone-input-2";
import axios from "./instance/axios";
import { Redirect, Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Header
import HeaderLogin from "./header/HeaderLogin";

// assets
import BgImage from "../assets/signupImage.jpg";
import Ads from "../assets/ads.png";
import arrowRight from "../assets/arrow-right-solid.png";
import Ovel from "../assets/oval_01.svg";
import OvalRight from "../assets/Oval_dashboard_02.svg";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      phoneError: '',
      confirmPassword: "",
      fields: {},
      errors: {},
      curTime: new Date().toLocaleString(),
      redirect: false,
      alreadyHas: '',
      checked: true
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // gen4() {
  // return Math.random().toString(16).slice(-2)
  // }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    
    if (this.validateForm()) {
      let fields = {};
      fields["firstname"] = "";
      fields["lastname"] = "";
      fields["email"] = "";
      fields["password"] = "";
      fields["confirm_password"] = "";     

      this.setState({
        fields:fields
      })

      axios
      .post(
        `/?itemType=register&full-name=${
          this.state.fields.firstname + ' ' + this.state.fields.lastname
        }+&email=${this.state.fields.email}&phone=${this.state.phone}&password=${
          this.state.fields.password
        }&currentTime=${this.state.curTime}`
      )
      .then((res) => {
        const data = res.data;
        console.log(data);
        if(data.userID){
            // this.setState({
            //     redirect: true
            // })
        }else{
          
          this.setState({
            alreadyHas: data.error
          })
        }
      })
      .catch((error) => {
        console.log(error);
      });

      // verify API
      axios
      .post(`?itemType=verify&phone=+${this.state.phone}`)
      .then((res) => {
        const data = res.data;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });

    }
    


  }
  

  validateForm() {
    let fields = this.state.fields;
    let phoneError = this.state.phoneError;
    let errors = {};
    let formIsValid = true;

    // First Name error messages
    if (!fields["firstname"]) {
      formIsValid = false;
      errors["firstname"] = "*Please enter your firstname.";
    }

    if (typeof fields["firstname"] !== "undefined") {
      if (!fields["firstname"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["firstname"] = "*Please enter alphabet characters only.";
      }
    }

    // Last Name error messages
    if (!fields["lastname"]) {
      formIsValid = false;
      errors["lastname"] = "*Please enter your lastname.";
    }

    if (typeof fields["lastname"] !== "undefined") {
      if (!fields["lastname"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["lastname"] = "*Please enter alphabet characters only.";
      }
    }

    // Email Address error messages
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter your email address.";
    }

    if (typeof fields["email"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email address.";
      }
    }
    // Phone error messages
    // if (!fields["phone"]) {
    //   formIsValid = false;
    //   errors["phone"] = "*Please enter your phone no.";
    // }

    // if (typeof fields["phone"] !== "undefined") {
    //   if (!fields["phone"].match(/^[0-9]{10}$/)) {
    //     formIsValid = false;
    //     errors["phone"] = "*Please enter valid phone no.";
    //   }
    // }


    // Password error messages
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }
    
    // Confirm Password error messages
    if (!fields["confirm_password"]) {
      formIsValid = false;
      errors["confirm_password"] = "Please enter your confirm password.";
    }

    // Compare Password error messages
    if (typeof fields["password"] !== "undefined" && typeof fields["confirm_password"] !== "undefined") {
          
      if (fields["password"] !== fields["confirm_password"]) {
        formIsValid = false;
        errors["password"] = "Passwords don't match.";
      }
    } 


    // console.log(this.state.phone);
    if (!this.state.phone) {
      formIsValid = false;
      phoneError = "Please enter your phone number.";
    }

    // if (typeof this.state.phone !== "undefined") {  
    //   var pattern_01 = new RegExp(/^[0-9\b]+$/);
    //   if (!pattern_01.test(this.state.phone)) {
    //     formIsValid = false;
    //     phoneError = "Please enter only number.";
    //   }
    //   else if(this.state.phone.length !== 12){
    //     formIsValid = false;
    //     phoneError = "Please enter valid phone number.";
    //   }
    // }


    this.setState({
      errors: errors,
      phoneError
    });
    return formIsValid;
  }

  render() {
    if (this.state.redirect) {
        return <Redirect to="/verification" />;
    }
    return (
      <div className="outer-view">
        <HeaderLogin />

        <img
          src={Ovel}
          className="ovel-bottom-left d-none d-lg-block"
          alt="ovel shape"
        />
        <img
          src={OvalRight}
          className="ovel-bottom-right d-block d-lg-none"
          alt="ovel shape"
        />
        <Row noGutters className="mh-100">
          <Col sm={12} md={6}>
            <div className="col-content content-area top_offset offset_sm">
              <Row>
                <Col md={10} lg={10}>
                  <div className="mb-4 pb-1">
                    <h1>Lets get started!</h1>                    
                    <p className="lead">Sign Up In Two Easy Steps. <br/>Enter Your Personal Information Below:</p>
                  </div>
                </Col>
                <Col md={12} lg={12}>
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                      <Col sm={12}>
                        <Form.Group>
                          <Form.Control
                            type="text"
                            name="firstname"
                            className="form-shadow form-radius border-0"
                            value={this.state.fields.firstname || ''}
                            onChange={this.handleChange}
                            placeholder="First Name"
                          />
                          <div className="error_msg">{this.state.errors.firstname}</div>
                        </Form.Group>
                      </Col>
                      <Col sm={12}>
                        <Form.Group>
                          <Form.Control
                            type="text"
                            name="lastname"
                            className="form-shadow form-radius border-0"
                            value={this.state.fields.lastname || ''}
                            onChange={this.handleChange}
                            placeholder="Last Name"
                          />
                          <div className="error_msg">{this.state.errors.lastname}</div>
                        </Form.Group>
                      </Col>
                      <Col sm={12}>
                        <Form.Group>
                          <Form.Control
                            type="email"
                            name="email"
                            className="form-shadow form-radius border-0"
                            value={this.state.fields.email || ''}
                            onChange={this.handleChange}
                            placeholder="Email Address"
                          />
                          <div className="error_msg">{this.state.errors.email || this.state.alreadyHas}</div>
                        </Form.Group>
                      </Col>
                      <Col sm={12}>
                        <Form.Group>
                          <PhoneInput
                            country={"au"}
                            inputProps={{
                              required: true
                            }}
                            enableAreaCodes={true}
                            value={this.state.phone || ''}
                            dropdownClass="form-shadow form-radius border-0"
                            inputClass="form-shadow form-radius border-0"
                            // onChange={this.handleChange}
                            onChange={phone => this.setState({ phone })}
                          />
                          <div className="error_msg">{this.state.phoneError}</div>
                        </Form.Group>
                      </Col>
                      <Col sm={12}>
                        <Form.Group>
                          <Form.Control
                            type="password"
                            name="password"
                            className="form-shadow form-radius border-0"
                            value={this.state.fields.password || ''}
                            onChange={this.handleChange}
                            placeholder="Password"
                          />
                          <div className="error_msg">{this.state.errors.password}</div>
                        </Form.Group>
                      </Col>
                      <Col sm={12}>
                        <Form.Group>
                          <Form.Control
                            type="password"
                            name="confirm_password"
                            className="form-shadow form-radius border-0"
                            value={this.state.fields.confirm_password || ''}
                            onChange={this.handleChange}
                            placeholder="Confirm Password"
                          />
                          <div className="error_msg">{this.state.errors.confirm_password}</div>
                        </Form.Group>
                      </Col>
                      <Col sm={12}>
                        <Form.Group>
                          <Form.Control
                            type="text"
                            name="referral_code"
                            className="form-shadow form-radius border-0"
                            value={this.state.fields.referral_code || ''}
                            onChange={this.handleChange}
                            placeholder="Referral Code (Optional)"
                          />
                        </Form.Group>
                      </Col>
                      
                      <Col sm={12}>
                        <Form.Group>
                          <label className="custom_check lead">
                            <input 
                              type="checkbox" 
                              className="d-none" 
                              checked={this.state.checked} 
                              onChange={() => this.setState({ checked : !this.state.checked })}
                            />
                            <span>I hereby accept all <Link to="/">T’s an C’s</Link></span>
                          </label>
                        </Form.Group>
                      </Col>
                    </Form.Row>

                    <Button
                      variant="light"
                      type="submit"
                      block
                      disabled={this.state.checked ? false : true}
                      className="form-btn d-flex align-items-center border-0 form-btn-skyblue"
                    >
                      SUBMIT{" "}
                      <img className="ml-auto" src={arrowRight} alt="arrow" />
                    </Button>
                  </Form>

                  <div className="mt-4 d-none">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cras est justo, ullamcorper et ipsum fringilla, convallis
                      faucibus ex.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>

          <Col sm={12} md={6} className="d-flex">
            <div
              className="cover-image position-relative d-flex w-100"
              style={{ backgroundImage: `url(${BgImage})` }}
            >
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
