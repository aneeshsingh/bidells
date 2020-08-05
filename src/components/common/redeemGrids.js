import React, { Component } from 'react';
import axios from '../instance/axios';

import {
    Link
  } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class redeemGrids extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            Products: []
        }
    }
    
    getProductData(){
        axios.get(`/?itemType=getProducts`)
            .then(res => {
            const data = res.data;
            console.log(Object.entries(data));
            const products = Object.entries(data).map(([key, product], index) => 
                <Col md={6} lg={4} sm={6} className="mb-4 pb-md-3" key={key}>
                    <div className="post_box redeem_box d-flex py-4 h-100">
                        <img src={product.productLogo} className="post_logo" alt={product.productType} />
                        <div className="m-auto w-100">
                            <div className="post_type">{product.productType}</div>
                            <h2><Link to={product.productID}>{product.productLabel}</Link></h2>
                            <p className="mb-0">{product.productShortDescription}</p>
                        </div>
                        <div className="redeem-points position-absolute">{product.buttonLabel}</div>
                    </div>
                </Col>
             )

            this.setState({
                products
            })
            
        }).catch((error) => {
            console.log(error)
        })
    }

    componentDidMount() {
        this.getProductData();
    }

    render() {
        return (
            <Row>
                {this.state.products}
            </Row>
        );
    }
}

export default redeemGrids;