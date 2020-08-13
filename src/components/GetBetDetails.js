import React, { Component } from 'react';
import axios from './instance/axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// Header
import Header from './header/Header';

// assets
import Ovel_01 from '../assets/Oval_dashboard_01.svg';
import Check from '../assets/check-solid.svg';
import SubmitArrow from '../assets/arrow-right-solid.svg';
import Ads from '../assets/ads.png';
import Oval from '../assets/Ovalpmob-left.svg';
import OvalRight from '../assets/Oval_dashboard_02.svg';



class singlePost extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            betDetails: [],
            playerDetails: []
        }
    }
    
    getProductDate(){
        // const { match: { params } } = this.props;
        let Auth = localStorage.getItem('auth_bdGroup');

        axios.get(`/?itemType=betDetails&betID=688&userID=${Auth}`)
            .then(res => {
                const data = res.data;
                console.log(data);
                // const betDetails = Object.entries(res.data);
                const betDetails = data.bid_detail;
                
                const playerDetails = Object.entries(data.player_detail).map(([key, player], index) => 
                    <Col lg={6} className="mt-4" key={key}>
                        <input type="radio" name="bets" hidden id={player.playerID} />
                        <label htmlFor={player.playerID} className="strip-bidell d-flex align-items-center">
                            <div className="flag-icon mr-xl-4 mr-sm-3 mr-2"><img src={player.image} alt="flag"/></div>
                            <div className="strip-content flex-grow-1">
                                <h4>{player.teamName}</h4>
                                <span className="d-none d-md-block">{player.winnings}</span>
                                {/* <span className="d-none d-md-block">T: Nakagawa Masayuki</span> */}
                            </div>
                            <div className="ml-auto text-center bids">
                                <span>Odds</span>
                                {player.odds}
                            </div>
                            <div className="ml-xl-5 ml-3">
                                <div className="check-icon">
                                    <img src={Check} alt="check"/>
                                </div>
                            </div>
                        </label>
                    </Col>
                )

            this.setState({ 
                betDetails,
                playerDetails
            });
            
        }).catch((error) => {
            console.log(error)
        })

    }

    componentDidMount() {
        this.getProductDate();
    }
    
    render() {
        console.log(this.state)
        return (
            <div className="outer-view">
                <Header />
                

                <img src={Oval} className="oval-top-left d-block d-md-none" alt="ovel shape" />
                <img src={OvalRight} className="ovel-bottom-right d-block d-md-none" style={{ top: '0px' }} alt="ovel shape" />
                <div className="top_offset position-relative">
                    <img src={Ovel_01} className="place-oval-Lbottom" alt="ovel shape" />

                    <Container fluid="md">
                        <Row className="align-items-end content-area mb-md-4">
                            <Col lg={6} className="mb-3">
                                <div className="heading-area">
                                    <div className="post_type">{this.state.betDetails.sub_heading}</div>
                                    <h1>{this.state.betDetails.title}</h1>
                                    <p><strong className="d-block"></strong> {this.state.betDetails.description}</p>
                                </div>
                            </Col>
                            <Col lg={6} className="mb-3">
                                <div className="d-md-flex justify-content-between release-time">
                                    <p>TIME OF THE GAME <strong>{this.state.betDetails.time_of_the_game}</strong></p>
                                    <p>DATE OF THE GAME <strong>{this.state.betDetails.date_of_the_game}</strong></p>
                                </div>
                            </Col>
                        </Row>
                        

                        <Row className="mb-md-5 mb-4">
                            {this.state.playerDetails}
                        </Row>

                        <Row className="align-items-center">
                            <Col lg={6} className="mb-4">
                                <div className="form-bet-amount d-flex align-items-center">
                                    <input type="text" className="border-0 bg-transparent pl-0" placeholder="Enter your bet amount" />
                                    {/* <span className="submitText">Enter your bet amount</span> */}
                                    <Button><img src={SubmitArrow} alt="arrow"/></Button>
                                </div>
                            </Col>
                            <Col lg={6} className="mb-lg-4">
                                <div className="ads-frame mx-auto mt-auto">
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

export default singlePost;