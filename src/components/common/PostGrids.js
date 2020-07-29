import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// assets
import HorseRacing from '../../assets/HorseRacing_icon.svg';
import User from '../../assets/post_user.png';
import Flag from '../../assets/flag_circle.png';
import Ads from '../../assets/ads_02.png';

class PostGrids extends Component {
    render() {
        return (
            <Row>
                <Col md={4} lg={3} sm={6} className="mb-4 pb-3">
                    <div className="post_box h-100">
                        <img src={HorseRacing} className="post_horseIcon" alt="horse" />
                        <div className="post_type">NEWS</div>
                        <h2><Link href="#">Sydney Roosters V ST George</Link></h2>
                        <div className="post_text">
                            Rugby League Round 3
                        </div>
                        <div className="post_info d-flex align-items-center justify-content-between">
                            <span>24/5/2020</span>
                            <span>230 Votes</span>
                        </div>

                        <div className="post_users pt-3 d-flex align-items-center">
                            <img src={User} alt="User" />
                            <img src={User} alt="User" />
                            <img src={User} alt="User" />
                            <img src={User} alt="User" />
                            <img src={User} alt="User" />
                            <span>+5</span>
                        </div>
                    </div>
                </Col>
                <Col md={4} lg={3} sm={6} className="mb-4 pb-3">
                    <div className="post_box h-100">
                        <img src={HorseRacing} className="post_horseIcon" alt="horse" />
                        <div className="post_type">NEWS</div>
                        <h2><Link href="#">Sydney Roosters V ST George</Link></h2>
                        <div className="post_text">
                            Rugby League Round 3
                        </div>
                        <div className="post_info d-flex align-items-center justify-content-between">
                            <span>24/5/2020</span>
                            <span>230 Votes</span>
                        </div>

                        <div className="post_users pt-3 d-flex align-items-center">
                            <img src={Flag} alt="flag" />
                            <img src={Flag} alt="flag" />
                        </div>
                    </div>
                </Col>
                <Col md={4} lg={3} sm={6} className="mb-4 pb-3">
                    <div className="post_box h-100">
                        <img src={HorseRacing} className="post_horseIcon" alt="horse" />
                        <div className="post_type">NEWS</div>
                        <h2><Link href="#">Sydney Roosters V ST George</Link></h2>
                        <div className="post_text">
                            Rugby League Round 3
                        </div>
                        <div className="post_info d-flex align-items-center justify-content-between">
                            <span>24/5/2020</span>
                            <span>230 Votes</span>
                        </div>

                        <div className="post_users pt-3 d-flex align-items-center">
                            <img src={User} alt="User" />
                            <img src={User} alt="User" />
                            <img src={User} alt="User" />
                            <img src={User} alt="User" />
                            <img src={User} alt="User" />
                            <span>+5</span>
                        </div>
                    </div>
                </Col>
                <Col md={4} lg={3} sm={6} className="mb-4 pb-3">
                    <div className="post_box h-100">
                        <img src={HorseRacing} className="post_horseIcon" alt="Icon" />
                        <div className="post_type">NEWS</div>
                        <h2><Link href="#">Sydney Roosters V ST George</Link></h2>
                        <div className="post_text">
                            Rugby League Round 3
                        </div>
                        <div className="post_info d-flex align-items-center justify-content-between">
                            <span>24/5/2020</span>
                            <span>230 Votes</span>
                        </div>

                        <div className="post_users pt-3 d-flex align-items-center">
                            <img src={Flag} alt="flag" />
                            <img src={Flag} alt="flag" />
                        </div>
                    </div>
                </Col>
                <Col md={4} lg={3} sm={6} className="mb-4 pb-3">
                    <div className="post_box h-100">
                        <img src={HorseRacing} className="post_horseIcon" alt="horse" />
                        <div className="post_type">NEWS</div>
                        <h2><Link href="#">Sydney Roosters V ST George</Link></h2>
                        <div className="post_text">
                            Rugby League Round 3
                        </div>
                        <div className="post_info d-flex align-items-center justify-content-between">
                            <span>24/5/2020</span>
                            <span>230 Votes</span>
                        </div>

                        <div className="post_users pt-3 d-flex align-items-center">
                            <img src={User} alt="flag" />
                            <img src={User} alt="flag" />
                            <img src={User} alt="flag" />
                            <img src={User} alt="flag" />
                            <img src={User} alt="flag" />
                            <span>+5</span>
                        </div>
                    </div>
                </Col>
                <Col md={4} lg={3} sm={6} className="mb-4 pb-3">
                    <div className="post_box post_innerglow h-100">
                        <img src={Ads} className="img-fluid" alt="poster" />
                    </div>
                </Col>
                <Col md={4} lg={3} sm={6} className="mb-4 pb-3">
                    <div className="post_box h-100">
                        <img src={HorseRacing} className="post_horseIcon" alt="horse" />
                        <div className="post_type">NEWS</div>
                        <h2><Link href="#">Sydney Roosters V ST George</Link></h2>
                        <div className="post_text">
                            Rugby League Round 3
                        </div>
                        <div className="post_info d-flex align-items-center justify-content-between">
                            <span>24/5/2020</span>
                            <span>230 Votes</span>
                        </div>

                        <div className="post_users pt-3 d-flex align-items-center">
                            <img src={Flag} alt="flag" />
                            <img src={Flag} alt="flag" />
                        </div>
                    </div>
                </Col>
                <Col md={4} lg={3} sm={6} className="mb-4 pb-3">
                    <div className="post_box h-100">
                        <img src={HorseRacing} className="post_horseIcon" alt="horse" />
                        <div className="post_type">NEWS</div>
                        <h2><Link href="#">Sydney Roosters V ST George</Link></h2>
                        <div className="post_text">
                            Rugby League Round 3
                        </div>
                        <div className="post_info d-flex align-items-center justify-content-between">
                            <span>24/5/2020</span>
                            <span>230 Votes</span>
                        </div>

                        <div className="post_users pt-3 d-flex align-items-center">
                            <img src={Flag} alt="flag" />
                            <img src={Flag} alt="flag" />
                        </div>
                    </div>
                </Col>
                <Col md={4} lg={3} sm={6} className="mb-4 pb-3">
                    <div className="post_box h-100">
                        <div className="post_type">NEWS</div>
                        <h2><Link href="#">Sydney Roosters V ST George</Link></h2>
                        <div className="post_text">
                            Rugby League Round 3
                        </div>
                        <div className="post_info d-flex align-items-center justify-content-between">
                            <span>24/5/2020</span>
                            <span>230 Votes</span>
                        </div>

                        <div className="post_users pt-3 d-flex align-items-center">
                            <img src={Flag} alt="flag" />
                            <img src={Flag} alt="flag" />
                        </div>
                    </div>
                </Col>
                <Col md={4} lg={3} sm={6} className="mb-4 pb-3">
                    <div className="post_box post_innerglow h-100">
                        <img src={Ads} className="img-fluid" alt="poster" />
                    </div>
                </Col>  
                <Col md={4} lg={3} sm={6} className="mb-4 pb-3">
                    <div className="post_box h-100">
                        <div className="post_type">NEWS</div>
                        <h2><Link href="#">Sydney Roosters V ST George</Link></h2>
                        <div className="post_text">
                            Rugby League Round 3
                        </div>
                        <div className="post_info d-flex align-items-center justify-content-between">
                            <span>24/5/2020</span>
                            <span>230 Votes</span>
                        </div>

                        <div className="post_users pt-3 d-flex align-items-center">
                            <img src={Flag} alt="flag" />
                            <img src={Flag} alt="flag" />
                        </div>
                    </div>
                </Col>
                <Col md={4} lg={3} sm={6} className="mb-4 pb-3">
                    <div className="post_box h-100">
                        <div className="post_type">NEWS</div>
                        <h2><Link href="#">Sydney Roosters V ST George</Link></h2>
                        <div className="post_text">
                            Rugby League Round 3
                        </div>
                        <div className="post_info d-flex align-items-center justify-content-between">
                            <span>24/5/2020</span>
                            <span>230 Votes</span>
                        </div>

                        <div className="post_users pt-3 d-flex align-items-center">
                            <img src={Flag} alt="flag" />
                            <img src={Flag} alt="flag" />
                        </div>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default PostGrids;