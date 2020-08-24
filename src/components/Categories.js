import React, { Component } from 'react';
import axios from './instance/axios';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Header
import HeaderLogin from './header/HeaderLogin';

// assets
import BgImage from '../assets/call_of_duty.jpg';
import Ads from '../assets/ads.png';
import arrowRight from '../assets/arrow-right-solid.png';
import Oval from '../assets/oval_01.svg';
import OvalLeft from '../assets/Ovalpmob-left.svg';

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        };
    }

    getLeadData(){        
        axios.get(`/?itemType=categories`)
            .then(res => {
            const data = res.data.categories;
            // console.log(data);

            const categories = Object.entries(data).map(([key, category], index) => 
                <Col md={4} lg={3} sm={4} xs={6} className="mb-2" key={key}>
                    <Form.Check type="checkbox" className="form-choose form-choose-box pl-0 text-center" label={category.name}  id={category.name + '-' + category.id} />
                </Col>
            )

            this.setState({
                categories
            })
            
        }).catch((error) => {
            console.log(error)
        })
    }

    componentDidMount() {
        this.getLeadData();
    }

    render() {
        return (
            <div className="outer-view">
                <HeaderLogin />
                
                <img src={Oval} className="ovel-bottom-left d-none d-md-block" alt="ovel shape" />
                <img src={OvalLeft} className="ovel-bottom-left d-block d-md-none" alt="ovel shape" />
                <Row noGutters className="mh-100">
                    <Col sm={12} md={6}>
                        <div className="col-content content-area top_offset">
                            <Row>
                                <Col md={10} lg={10}>
                                    <div className="mb-4 pb-1">
                                        <h1>We’re Nearly There</h1>
                                        <p className="lead">Select Your Domain Of Interest</p>
                                    </div>
                                </Col>
                                <Col md={12} lg={12} className="mb-4">
                                    <Form>
                                        <Form.Row>
                                            {this.state.categories}
                                        </Form.Row>
                                    </Form>
                                </Col>
                                <Col md={10} lg={8}>
                                    <Button variant="light" type="submit" block className="form-btn d-flex align-items-center border-0 form-btn-skyblue">COTINUE TO DASHBOARD <img className="ml-auto" src={arrowRight} alt="arrow" /></Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>

                    <Col sm={12} md={6} className="d-flex">
                        <div className="cover-image position-relative d-flex w-100" style={{ backgroundImage: `url(${BgImage})` }}>
                            <div className="ads-frame mx-auto mt-auto mb-3">
                                <img src={Ads} alt="Ads poster" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Categories;