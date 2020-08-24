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
            getBets: [],
            isfatching: false
        }
    }
    getBetsData(){
        let Auth = localStorage.getItem('auth_bdGroup');

        axios.get(`/?itemType=premiumBets&userID=${Auth}`)
            .then(res => {
            const data = res.data;
            console.log(Object.entries(data));
            const getBets = Object.entries(data).map(([key, bets], index) => 
                <Col md={6} lg={4} xl={3} sm={6} className="mb-md-4 mb-3 pb-3" key={key}>
                <Link to={'/get-bet-details/'+bets.postID} className="post_box d-flex flex-column h-100">
                    <img src={bets.game_logo} className="post_horseIcon" alt="horse" />
                    <div className="post_type text-uppercase">{bets.game_type}</div>
                    <h2>{bets.title}</h2>
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
                </Link>
            </Col>
             )

            this.setState({
                getBets,
                isfatching: true
            })
            
        }).catch((error) => {
            console.log(error);
            this.setState({
                isfatching: false
            })
        })
    }

    componentDidMount() {
        this.getBetsData();
    }

    render() {
        if(!this.state.isfatching){
            return(
                <div className="preloader">
                    <div className="lds-ripple"><div></div><div></div></div>
                </div>
            )
        }
        
        return (
            <Row>
                {this.state.getBets}
            </Row>
        );
    }
}

export default PostGrids;