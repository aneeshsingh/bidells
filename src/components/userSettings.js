import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import axios from './instance/axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Header
import Header from './header/Header';

// assets
import Ovel_01 from '../assets/Oval_dashboard_01.svg';
import arrowRight from '../assets/arrow-right-solid.png';
import arrowRightWhite from '../assets/arrow-white.svg';
import Ads_02 from '../assets/ads_03.png';
import Ads_03 from '../assets/ads_04.png';
import Ads from '../assets/ads.png';
import Oval from '../assets/Ovalpmob-left.svg';
import OvalRight from '../assets/Oval_dashboard_02.svg';
import UserPic from '../assets/user_pic.png';

class referSettings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            address: '',
            profilepic: '',
            file: null,
            redirect: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getLeadData(){
        let Auth = localStorage.getItem('auth_bdGroup');
        
        axios.get(`/?itemType=getUserDetails&userID=${Auth}`)
            .then(res => {
            const data = res.data;
            console.log(data);

            const profilepic = data.profilePicUrl || UserPic;
            const name = data.userFullName;
            const email = data.emailAddress;
            const phone = data.phoneNumber;
            const address = data.address;
            
            this.setState({
              profilepic,
              name,
              email,
              phone,
              address,
            });
            
        }).catch((error) => {
            console.log(error)
        })
    }

    componentWillMount(){
        this.getLeadData();
    }

    logout = () => {
        localStorage.removeItem('auth_bdGroup');

        this.setState({
            redirect: true
        })
    }


    async  handleSubmit(e) {
        e.preventDefault();
        let Auth = localStorage.getItem('auth_bdGroup');

        // const toBase64 = file => new Promise((resolve, reject) => {
        // const reader = new FileReader();
        // reader.readAsDataURL(file);
        // reader.onload = () => resolve(reader.result);
        // reader.onerror = error => reject(error);
        // });
        
        const fd = new FormData();
        fd.append('image', this.state.file);
        fd.append('name', this.state.name);
        fd.append('email', this.state.email);
        fd.append('phone', this.state.phone);
        fd.append('address', this.state.address);

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        
        console.log(this.state.file, this.state.file.name);

        // const data = {
        //     userFullName: this.state.name,
        //     emailAddress: this.state.email,
        //     phoneNumber: this.state.phone,
        //     address: this.state.address,
        //     profilePicUrl: await toBase64(this.state.file.name)
        // }; 

        // 
        axios.post(`/?itemType=updateUserDetails&userID=${Auth}&userfullname=${this.state.name}&useremailaddress=${this.state.email}&phone=${this.state.phone}&address=${this.state.address}&profilepic=${this.state.file.name}`, {fd}, config)
          .then((res) => {
            const data = res;
            console.log(data.data);
            // this.getLeadData();
            // if(data.userID){
            //     this.setState({
            //         redirect: true
            //     })
            // }else{
              
            //   this.setState({
            //     alreadyHas: data.error
            //   })
            // }
          })
          .catch((error) => {
            console.log(error);
          });    
    
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />;
        }
        return (
            <div className="outer-view">
                <Header />
                
                <img src={Oval} className="oval-top-left d-block d-md-none" alt="ovel shape" />
                <img src={OvalRight} className="ovel-bottom-right d-block d-md-none" style={{ top: '0px' }} alt="ovel shape" />
                <div className="top_offset position-relative">
                    <img src={Ovel_01} className="place-oval-Lbottom" alt="ovel shape" />

                    <Container fluid="md">
                        <Row className="align-items-center content-area mb-4">
                            <Col sm={12} className="d-md-none">
                                <Button variant="dark-grad" type="button" className="d-flex float-right align-items-center mb-2 align-items-center border-0"><span>Logout</span> <img className="ml-3" src={arrowRightWhite} alt="arrow" /></Button>
                            </Col>
                            <Col md={8} lg={6}>
                                <div className="heading-area">
                                    <div className="post_type">REFERRAL</div>
                                    <h1>Settings</h1>
                                </div>
                            </Col>
                        </Row>

                        <div className="pt-4">                            
                            <Row className="justify-content-between">
                                <Col md={7} lg={6} className="mb-4 pr-md-5">
                                    <Form onSubmit={this.handleSubmit}>
                                        <Form.Group>
                                            <input 
                                                type="file" 
                                                id="profilePic" 
                                                className="d-none" 
                                                accept="image/png, image/jpeg"
                                                onChange={(e) =>
                                                    this.setState({ file: e.target.files[0] })
                                                }
                                            />
                                            <Form.Label htmlFor="profilePic" className="form-shadow text-truncate form-control form-control-label form-radius py-0 d-flex align-items-center border-0">
                                                <img src={this.state.profilepic} alt="user" className="profile-image mr-sm-3 mr-2"/> Change Profile Picture
                                            </Form.Label>
                                        </Form.Group>
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
                                        <Button variant="light" type="submit" block className="form-btn d-flex align-items-center border-0 form-btn-skyblue">SUBMIT <img className="ml-auto" src={arrowRight} alt="arrow" /></Button>
                                    </Form>
                                </Col>
                                <Col md={4} lg={3} className="mb-md-2">

                                <Button onClick={() => this.logout()} variant="dark-grad" type="button" block className="d-md-flex align-items-center mb-4 mb-md-5 align-items-center d-none border-0"><span>Logout</span> <img className="ml-auto" src={arrowRightWhite} alt="arrow" /></Button>

                                    <div className="ads-portFrame p-lg-5 p-sm-4 p-3">
                                        <img src={Ads_03} alt="ads" />
                                    </div>

                                    <div className="ads-portFrame mt-md-5 mt-4 d-none d-md-block">
                                        <img src={Ads_02} alt="ads" />
                                    </div>
                                    <div className="ads-frame mx-auto mt-4 d-block d-md-none">
                                        <img src={Ads} alt="Ads Poster" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>

                </div>
                
            </div>
        );
    }
}

export default referSettings;