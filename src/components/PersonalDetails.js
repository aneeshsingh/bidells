import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Header
import HeaderLogin from './header/HeaderLogin';

// assets
import BgImage from '../assets/personalDetals.jpg';
import Ads from '../assets/ads.png';
import arrowRight from '../assets/arrow-right-solid.png';
import Ovel from '../assets/oval_01.svg';
import User from '../assets/user_icon.svg';

function PersonalDetails() {
  return (
    <div className="outer-view">
        <HeaderLogin />
        
        <img src={Ovel} className="ovel-bottom-left" alt="ovel shape" />
        <Row noGutters className="mh-100">
            <Col sm={12} md={6}>
                <div className="col-content content-area top_offset">
                    <Row>
                        <Col md={8} lg={7}>
                            <div className="mb-4 pb-1">
                                <h1>We’re nearly there!</h1>
                                <p className="lead">We need to know a little bit more about you to create your personalised plan.</p>
                            </div>
                        </Col>
                        <Col md={10} lg={8}>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Upload your photo</Form.Label>
                                    <div className="form-choose">
                                        <Form.File id="uploadPhoto" className="d-none" />
                                        <Form.Label className="text-normal text-center" htmlFor="uploadPhoto">
                                            <img src={User} alt="user" />
                                            Upload Photo
                                        </Form.Label>
                                    </div>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Please select your gender</Form.Label>
                                    <Form.Row>
                                        <Col>
                                            <Form.Check type="radio" className="form-choose pl-0 text-center" name="gender" label="Male"  id="male" />    
                                        </Col>
                                        <Col>
                                            <Form.Check type="radio" className="form-choose pl-0 text-center" name="gender" label="Female"  id="female" />    
                                        </Col>
                                        <Col>
                                            <Form.Check type="radio" className="form-choose pl-0 text-center" name="gender"  label="Unspecified"  id="unspecified" />    
                                        </Col>
                                    </Form.Row>
                                </Form.Group>


                                <Form.Group className="mb-5">
                                    <Form.Label>What’s your date of birth?</Form.Label>
                                    <Form.Row>
                                        <Col>
                                        <Form.Control as="select" className="form-outerShadow border-0 no-apperance">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                        </Form.Control> 
                                        </Col>
                                        <Col>
                                            <Form.Control as="select" className="form-outerShadow border-0 no-apperance">
                                                <option value="1">January</option>
                                                <option value="2">February</option>
                                                <option value="3">March</option>
                                                <option value="4">April</option>
                                                <option value="5">May</option>
                                                <option value="6">June</option>
                                                <option value="7">July</option>
                                                <option value="8">August</option>
                                                <option value="9">September</option>
                                                <option value="10">October</option>
                                                <option value="11">November</option>
                                                <option value="12">December</option>
                                            </Form.Control>
                                        </Col>
                                        <Col>
                                            <Form.Control as="select" className="form-outerShadow border-0 no-apperance">
                                                <option value="10">2010</option>
                                                <option value="11">2011</option>
                                                <option value="12">2012</option>
                                                <option value="13">2013</option>
                                                <option value="14">2014</option>
                                                <option value="15">2015</option>
                                                <option value="16">2016</option>
                                                <option value="17">2017</option>
                                                <option value="18">2018</option>
                                                <option value="19">2019</option>
                                                <option value="20">2020</option>
                                                <option value="21">2021</option>
                                                <option value="22">2022</option>
                                                <option value="23">2023</option>
                                                <option value="24">2024</option>
                                                <option value="25">2025</option>
                                                <option value="26">2026</option>
                                                <option value="27">2027</option>
                                                <option value="28">2028</option>
                                                <option value="29">2029</option>
                                                <option value="30">2030</option>
                                                <option value="31">2031</option>
                                                <option value="32">2032</option>
                                                <option value="33">2033</option>
                                                <option value="34">2034</option>
                                                <option value="35">2035</option>
                                                <option value="36">2036</option>
                                                <option value="37">2037</option>
                                                <option value="38">2038</option>
                                                <option value="39">2039</option>
                                                <option value="40">2040</option>
                                            </Form.Control>
                                        </Col>
                                    </Form.Row>
                                </Form.Group>                            
                                
                                <Button variant="light" type="submit" block className="form-btn d-flex align-items-center border-0 form-btn-skyblue">SUBSCRIBE <img className="ml-auto" src={arrowRight} alt="arrow" /></Button>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </Col>

            <Col sm={12} md={6}>
                <div className="cover-image position-relative d-flex h-100 w-100" style={{ backgroundImage: `url(${BgImage})` }}>
                    <div className="ads-frame mx-auto mt-auto mb-3">
                        <img src={Ads} alt="Ads Poster" />
                    </div>
                </div>
            </Col>
        </Row>
    </div>
  );
}

export default PersonalDetails;
