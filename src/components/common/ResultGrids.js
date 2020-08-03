import React, { Component } from 'react';
import axios from '../instance/axios';
import {
    Link
  } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// assets
import HorseRacing from '../../assets/HorseRacing_icon.svg';

class ResultGrids extends Component {
    constructor(props) {
        super(props);

        this.state = {
            getResults: []
        }
    }

    getResultData(){
        axios.get(`/?itemType=generateResults&userID=6`)
            .then(res => {
            const data = res.data;
            console.log(Object.entries(data));
            const getResults = Object.entries(data).map(([key, result], index) => 
                <Col md={4} sm={6} className="mb-4 pb-3">
                    <div className="post_box h-100">
                        <img src={HorseRacing} className="post_horseIcon" alt="horse" />
                        <div className="post_type">HORSE RACING</div>
                        <h2 className="pb-3"><Link to="#">{result.betName}</Link></h2>
                        
                        <div className="post_results d-flex flex-wrap align-items-center justify-content-between">
                            <div>
                                Position <strong>{result.bidells}</strong>
                            </div>
                            <div>
                                Your Choice <strong>{result.usersPick}</strong>
                            </div>
                        </div>
                        <div className="post_results d-flex flex-wrap align-items-center justify-content-between">
                            <div>
                                Odds <strong>{result.betOdds}</strong>
                            </div>
                            <div>
                                Winner <strong>{result.betWinner}</strong>
                            </div>
                        </div>
                        <div className="post_results d-flex flex-wrap align-items-center justify-content-between">
                            <div>
                                Points <strong>{result.bidells}</strong>
                            </div>
                            <div>
                            Bet Date <strong>{result.betDate}</strong>
                            </div>
                        </div>
                    </div>
                </Col>
             )

            this.setState({
                getResults
            })
            
        }).catch((error) => {
            console.log(error)
        })
    }

    componentDidMount() {
        this.getResultData();
    }

    render() {
        return (
            <Row>
                {this.state.getResults}
                
                {/* <Col md={4} sm={6} className="mb-4 pb-3">
                    <div className="post_box h-100">
                        <div className="post_type">NEWS</div>
                        <h2 className="pb-3"><Link to="#">Sydney Roosters V ST George</Link></h2>
                        
                        <div className="post_results d-flex flex-wrap align-items-center justify-content-between">
                            <div>
                                Position <strong>2</strong>
                            </div>
                            <div>
                                Your Choice <strong>3. All Cylinders (9)</strong>
                            </div>
                        </div>
                        <div className="post_results d-flex flex-wrap align-items-center justify-content-between">
                            <div>
                                Odds <strong>.7</strong>
                            </div>
                            <div>
                                Winner <strong>Stronger</strong>
                            </div>
                        </div>
                        <div className="post_results d-flex flex-wrap align-items-center justify-content-between">
                            <div>
                                Points <strong>2</strong>
                            </div>
                            <div>
                            Bet Date <strong>12/4/2019 13:44:10</strong>
                            </div>
                        </div>
                    </div>
                </Col> */}
            </Row>
        );
    }
}

export default ResultGrids;