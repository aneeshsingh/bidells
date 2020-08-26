import React, { Component } from 'react';
import axios from '../instance/axios';
import {
    Link
  } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// assets
import User from '../../assets/user_pic.png';

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
            // console.log(Object.entries(data));
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
                        <span>{bets.total_bets} Votes</span>
                    </div>

                    <div className="post_users pt-3 mt-auto d-flex align-items-center">
                        {                            
                            Object.entries(bets.users).map(([key, user], index) => {
                                    const userLength = bets.users.length;
                                    if(index < 5){
                                        return <img src={user.profilePicUrl || User} alt="User" key={key} />
                                    }else{
                                        if(index < 6){
                                            return <span key={key}>+{userLength - 5}</span>
                                        }else{
                                            return null
                                        }
                                    }
                                }
                            )
                        }
                        {/* <img src={User} alt="User" />
                        <img src={User} alt="User" />
                        <img src={User} alt="User" />
                        <img src={User} alt="User" />
                        <span>+5</span> */}
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