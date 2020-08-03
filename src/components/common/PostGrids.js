import React, { Component } from 'react';
import axios from '../instance/axios';
import {
    Link
  } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// assets
import User from '../../assets/post_user.png';

class PostGrids extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            getBets: []
        }
    }
    getBetsData(){
        axios.get(`/?itemType=premiumBets&userID=6`)
            .then(res => {
            const data = res.data;
            console.log(Object.entries(data));
            const getBets = Object.entries(data).map(([key, bets], index) => 
                <Col md={4} lg={3} sm={6} className="mb-4 pb-3" key={key}>
                <div className="post_box d-flex flex-column h-100">
                    <img src={bets.game_logo} className="post_horseIcon" alt="horse" />
                    <div className="post_type text-uppercase">{bets.game_type}</div>
                    <h2><Link to={'/get-bet-details/:'+bets.postID}>{bets.title}</Link></h2>
                    <div className="post_text">
                         {bets.subHeading}
                    </div>
                    <div className="post_info d-flex align-items-center justify-content-between">
                        <span>24/5/2020</span>
                        <span>230 Votes</span>
                    </div>

                    <div className="post_users pt-3 mt-auto d-flex align-items-center">
                        <img src={User} alt="User" />
                        <img src={User} alt="User" />
                        <img src={User} alt="User" />
                        <img src={User} alt="User" />
                        <img src={User} alt="User" />
                        <span>+5</span>
                    </div>
                </div>
            </Col>
             )

            this.setState({
                getBets
            })
            
        }).catch((error) => {
            console.log(error)
        })
    }

    componentDidMount() {
        this.getBetsData();
    }

    render() {
        return (
            <Row>
                {this.state.getBets}
                
                {/* <Col md={4} lg={3} sm={6} className="mb-4 pb-3">
                    <div className="post_box post_innerglow h-100">
                        <img src={Ads} className="img-fluid" alt="poster" />
                    </div>
                </Col> */}
            </Row>
        );
    }
}

export default PostGrids;