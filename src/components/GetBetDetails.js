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
import Flag from '../assets/flag_circle.png';
import SubmitArrow from '../assets/arrow-right-solid.svg';
import Ads from '../assets/ads.png';
import Oval from '../assets/Ovalpmob-left.svg';
import OvalRight from '../assets/Oval_dashboard_02.svg';


class singlePost extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            betDetails: []
        }
    }
    
    getProductDate(){
        let Auth = localStorage.getItem('auth_bdGroup');

        axios.get(`/?itemType=betDetails&betID=686&userID=${Auth}`)
            .then(res => {
            const betDetails = Object.entries(res.data);
            // console.log(Object.entries(betDetails));
            // const products = Object.entries(data).map(([key, product], index) => 
            //     <Col md={4} sm={6} className="mb-4 pb-3" key={key}>
            //         <div className="post_box redeem_box d-flex py-4 h-100">
            //             <img src={product.productLogo} className="post_logo" alt={product.productType} />
            //             <div className="m-auto w-100">
            //                 <div className="post_type">{product.productType}</div>
            //                 <h2><Link to={product.productID}>{product.productLabel}</Link></h2>
            //                 <p className="mb-0">{product.productShortDescription}</p>
            //             </div>
            //             <div className="redeem-points position-absolute">{product.buttonLabel}</div>
            //         </div>
            //     </Col>
            //  )

             this.setState({ betDetails });
            
        }).catch((error) => {
            console.log(error)
        })
    }

    componentDidMount() {
        this.getProductDate();
    }
    
    render() {
        console.log(this.state.betDetails);
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
                                    <div className="post_type">SPORTS</div>
                                    <h1>Randwick Race 8</h1>
                                    <p><strong className="d-block">1600m R9 The Star Doncaster Mile</strong> Doncaster Mile 2019 is one of the biggest races on the Australian autumn racing calendar.</p>
                                </div>
                            </Col>
                            <Col lg={6} className="mb-3">
                                <div className="d-md-flex justify-content-between release-time">
                                    <p>TIME OF THE GAME <strong>5.15PM</strong></p>
                                    <p>DATE OF THE GAME <strong>13-4-2019</strong></p>
                                </div>
                            </Col>
                        </Row>
                        

                        <Row className="mb-md-5 mb-4">
                            <Col lg={6} className="mt-4">
                                <div className="strip-bidell d-flex align-items-center">
                                    <div className="flag-icon mr-xl-4 mr-sm-3 mr-2"><img src={Flag} alt="flag"/></div>
                                    <div className="strip-content flex-grow-1">
                                        <h4>Hartnell (7)</h4>
                                        <span className="d-none d-md-block">J: Yonekura Satoshi 56kg</span>
                                        <span className="d-none d-md-block">T: Nakagawa Masayuki</span>
                                    </div>
                                    <div className="ml-auto text-center bids">
                                        <span>Odds</span>
                                        3.40
                                    </div>
                                    <div className="ml-xl-5 ml-3">
                                        <input type="radio" name="bets" hidden id="check_01" />
                                        <label htmlFor="check_01" className="check-icon">
                                            <img src={Check} alt="check"/>
                                        </label>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} className="mt-4">
                                <div className="strip-bidell d-flex align-items-center">
                                    <div className="flag-icon mr-xl-4 mr-sm-3 mr-2"><img src={Flag} alt="flag"/></div>
                                    <div className="strip-content flex-grow-1">
                                        <h4>Hartnell (7)</h4>
                                        <span className="d-none d-md-block">J: Yonekura Satoshi 56kg</span>
                                        <span className="d-none d-md-block">T: Nakagawa Masayuki</span>
                                    </div>
                                    <div className="ml-auto text-center bids">
                                        <span>Odds</span>
                                        3.40
                                    </div>
                                    <div className="ml-xl-5 ml-3">
                                        <input type="radio" name="bets" hidden id="check_02" />
                                        <label htmlFor="check_02" className="check-icon">
                                            <img src={Check} alt="check"/>
                                        </label>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} className="mt-4">
                                <div className="strip-bidell d-flex align-items-center">
                                    <div className="flag-icon mr-xl-4 mr-sm-3 mr-2"><img src={Flag} alt="flag"/></div>
                                    <div className="strip-content flex-grow-1">
                                        <h4>Hartnell (7)</h4>
                                        <span className="d-none d-md-block">J: Yonekura Satoshi 56kg</span>
                                        <span className="d-none d-md-block">T: Nakagawa Masayuki</span>
                                    </div>
                                    <div className="ml-auto text-center bids">
                                        <span>Odds</span>
                                        3.40
                                    </div>
                                    <div className="ml-xl-5 ml-3">
                                        <input type="radio" name="bets" hidden id="check_03" />
                                        <label htmlFor="check_03" className="check-icon">
                                            <img src={Check} alt="check"/>
                                        </label>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} className="mt-4">
                                <div className="strip-bidell d-flex align-items-center">
                                    <div className="flag-icon mr-xl-4 mr-sm-3 mr-2"><img src={Flag} alt="flag"/></div>
                                    <div className="strip-content flex-grow-1">
                                        <h4>Hartnell (7)</h4>
                                        <span className="d-none d-md-block">J: Yonekura Satoshi 56kg</span>
                                        <span className="d-none d-md-block">T: Nakagawa Masayuki</span>
                                    </div>
                                    <div className="ml-auto text-center bids">
                                        <span>Odds</span>
                                        3.40
                                    </div>
                                    <div className="ml-xl-5 ml-3">
                                        <input type="radio" name="bets" hidden id="check_04" />
                                        <label htmlFor="check_04" className="check-icon">
                                            <img src={Check} alt="check"/>
                                        </label>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} className="mt-4">
                                <div className="strip-bidell d-flex align-items-center">
                                    <div className="flag-icon mr-xl-4 mr-sm-3 mr-2"><img src={Flag} alt="flag"/></div>
                                    <div className="strip-content flex-grow-1">
                                        <h4>Hartnell (7)</h4>
                                        <span className="d-none d-md-block">J: Yonekura Satoshi 56kg</span>
                                        <span className="d-none d-md-block">T: Nakagawa Masayuki</span>
                                    </div>
                                    <div className="ml-auto text-center bids">
                                        <span>Odds</span>
                                        3.40
                                    </div>
                                    <div className="ml-xl-5 ml-3">
                                        <input type="radio" name="bets" hidden id="check_05" />
                                        <label htmlFor="check_05" className="check-icon">
                                            <img src={Check} alt="check"/>
                                        </label>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} className="mt-4">
                                <div className="strip-bidell d-flex align-items-center">
                                    <div className="flag-icon mr-xl-4 mr-sm-3 mr-2"><img src={Flag} alt="flag"/></div>
                                    <div className="strip-content flex-grow-1">
                                        <h4>Hartnell (7)</h4>
                                        <span className="d-none d-md-block">J: Yonekura Satoshi 56kg</span>
                                        <span className="d-none d-md-block">T: Nakagawa Masayuki</span>
                                    </div>
                                    <div className="ml-auto text-center bids">
                                        <span>Odds</span>
                                        3.40
                                    </div>
                                    <div className="ml-xl-5 ml-3">
                                        <input type="radio" name="bets" hidden id="check_06" />
                                        <label htmlFor="check_06" className="check-icon">
                                            <img src={Check} alt="check"/>
                                        </label>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} className="mt-4">
                                <div className="strip-bidell d-flex align-items-center">
                                    <div className="flag-icon mr-xl-4 mr-sm-3 mr-2"><img src={Flag} alt="flag"/></div>
                                    <div className="strip-content flex-grow-1">
                                        <h4>Hartnell (7)</h4>
                                        <span className="d-none d-md-block">J: Yonekura Satoshi 56kg</span>
                                        <span className="d-none d-md-block">T: Nakagawa Masayuki</span>
                                    </div>
                                    <div className="ml-auto text-center bids">
                                        <span>Odds</span>
                                        3.40
                                    </div>
                                    <div className="ml-xl-5 ml-3">
                                        <input type="radio" name="bets" hidden id="check_07" />
                                        <label htmlFor="check_07" className="check-icon">
                                            <img src={Check} alt="check"/>
                                        </label>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} className="mt-4">
                                <div className="strip-bidell d-flex align-items-center">
                                    <div className="flag-icon mr-xl-4 mr-sm-3 mr-2"><img src={Flag} alt="flag"/></div>
                                    <div className="strip-content flex-grow-1">
                                        <h4>Hartnell (7)</h4>
                                        <span className="d-none d-md-block">J: Yonekura Satoshi 56kg</span>
                                        <span className="d-none d-md-block">T: Nakagawa Masayuki</span>
                                    </div>
                                    <div className="ml-auto text-center bids">
                                        <span>Odds</span>
                                        3.40
                                    </div>
                                    <div className="ml-xl-5 ml-3">
                                        <input type="radio" name="bets" hidden id="check_08" />
                                        <label htmlFor="check_08" className="check-icon">
                                            <img src={Check} alt="check"/>
                                        </label>
                                    </div>
                                </div>
                            </Col>
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