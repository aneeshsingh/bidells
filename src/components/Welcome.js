import React, { Component } from 'react';
import axios from './instance/axios';
import {
    Link
  } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Header
import Header from './header/Header';

// common
import PostGrids from '../components/common/PostGrids';

// assets
import arrowRight from '../assets/arrow-right-solid.png';
import VideoIcon from '../assets/video_icon.png';
import Play from '../assets/play_icon.png';
import Ads_02 from '../assets/ads_03.png';

import Oval_01 from '../assets/welcome_oval.svg';
import Oval_02 from '../assets/place_bet_oval.svg';
import Oval_03 from '../assets/redeem_oval.svg';
import Oval_04 from '../assets/bets-oval.svg';
import Oval_05 from '../assets/help_oval.svg';
import Oval_06 from '../assets/ads_oval.svg';
import OvalRight from '../assets/Oval_dashboard_02.svg';
import OvalRight_02 from '../assets/Ovalpmob-right.svg';


function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-radius"
      >
        <Modal.Body className="p-0">
            <Button type="button" variant="reset" className="modal-close" onClick={props.onHide}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x d-block" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                    <path d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                </svg>
            </Button>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe title="Bidells Tour" className="embed-responsive-item" src={props.video} allowFullScreen></iframe>
            </div>
        </Modal.Body>
      </Modal>
    );
  }

function WelcomeVideo(props) {
    const [modalShow, setModalShow] = React.useState(false);
    const video = props.video;
    return (
        <div className="video-frame d-flex flex-column">
            <h5 className="video-frame-title">How Bidells works?</h5>

            <Button type="button" variant="play" onClick={() => setModalShow(true)}><img src={Play} alt="play" /></Button>

            <div className="video-frame-bottom mt-auto d-flex align-items-center justify-content-between">
                <span><img src={VideoIcon} alt="Video" /></span>
                <span>02:00</span>
            </div>

            <MyVerticallyCenteredModal
                video={video}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}



class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isfatching: false
        };
    }

    // getLeadData(){
        
        
    // }

    componentDidMount() {
        axios.get(`/?itemType=welcome`)
            .then(res => {
            const data = res.data;
            // console.log(Object.entries(data));

            this.setState({
                data: data,
                isfatching: true
            })
            
        }).catch((error) => {
            console.log(error);
            this.setState({
                isfatching: false
            })
        })
    }

    render() {     
        // console.log(this.state.data);
        if(!this.state.isfatching){
            return(
                <div className="preloader">
                    <div className="lds-ripple"><div></div><div></div></div>
                </div>
            )
        }

        let Auth = localStorage.getItem('auth_bdGroup');

        return (
            <div className="outer-view">
                <img src={OvalRight} className="ovel-bottom-right d-block d-md-none" alt="ovel shape" />
                <Header />
                <div className="top_offset">
                    <section className="infomation_area content-area position-relative">
                        <img src={Oval_01} className="oval bottom-left welcome-oval" alt="ovel shape" />
                        <Container fluid="md">
                            <Row className="space-bottom justify-content-between">
                                <Col md={6} lg={5}>
                                    <div className="mb-4">
                                        <h1 className="display-1">{this.state.data.welcome_section ? this.state.data.welcome_section.title : ''}</h1>
                                        <p className="lead">{this.state.data.welcome_section ? this.state.data.welcome_section.desciption : ''}</p>

                                        {Auth ? null :  <Link to='/sign-up' variant="light" type="submit" block className="form-btn mt-md-5 mt-4 d-flex align-items-center border-0 form-btn-skyblue">SIGN-UP <img className="ml-auto" src={arrowRight} alt="arrow" /></Link>}
                                    </div>
                                </Col>
                                <Col md={6} lg={6}>
                                    <WelcomeVideo video={this.state.data.welcome_section ? this.state.data.welcome_section.video_link : ''} />
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className="infomation_area pb-md-5 pb-4 content-area position-relative">
                        <Container fluid="md">
                            <Row>
                                <Col md={7} lg={5} className="ml-auto">
                                    <div className="mb-4">
                                        <h2 className="display-3">{this.state.data.open_account_section ? this.state.data.open_account_section.title : ''}</h2>
                                        <p className="lead">{this.state.data.open_account_section ? this.state.data.open_account_section.description : ''}</p>

                                        {/* <Button variant="light" type="submit" block className="form-btn mt-md-5 mt-4 d-flex align-items-center border-0 form-btn-skyblue">SIGN-UP <img className="ml-auto" src={arrowRight} alt="arrow" /></Button> */}
                                        {Auth ? null :  <Link to='/sign-up' variant="light" type="submit" block className="form-btn mt-md-5 mt-4 d-flex align-items-center border-0 form-btn-skyblue">SIGN-UP <img className="ml-auto" src={arrowRight} alt="arrow" /></Link>}
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <section className="infomation_area py-md-5 py-4 content-area position-relative">
                        <img src={Oval_02} className="oval center-right" alt="ovel shape" />
                        <Container fluid="md">
                            <Row className="space-bottom align-items-center">
                                <Col md={6} lg={5}>
                                    <div className="mb-4">
                                        <h2 className="display-3">{this.state.data.place_bet_section ? this.state.data.place_bet_section.title : ''}</h2>
                                        <p className="lead">{this.state.data.place_bet_section ? this.state.data.place_bet_section.description : ''}</p>

                                        {/* <Button variant="light" type="submit" block className="form-btn mt-md-5 mt-4 d-flex align-items-center border-0 form-btn-skyblue">SIGN-UP <img className="ml-auto" src={arrowRight} alt="arrow" /></Button> */}
                                        {Auth ? null :  <Link to='/sign-up' variant="light" type="submit" block className="form-btn mt-md-5 mt-4 d-flex align-items-center border-0 form-btn-skyblue">SIGN-UP <img className="ml-auto" src={arrowRight} alt="arrow" /></Link>}
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <section className="infomation_area py-md-5 py-4 content-area position-relative">
                        <img src={Oval_03} className="oval center-left" alt="ovel shape" />
                        <Container fluid="md">
                            <Row className="space-bottom align-items-center">
                                <Col md={8} lg={5} className="ml-auto">
                                    <div className="mb-4">
                                        <h2 className="display-3">{this.state.data.reedem_section ? this.state.data.reedem_section.title : ''}</h2>
                                        <p className="lead">{this.state.data.reedem_section ? this.state.data.reedem_section.description : ''}</p>

                                        <ul className="grid_box mt-md-5 mt-4 list-unstyled grid_box_3 d-flex flex-wrap">
                                            <li>
                                                <div className="grid_box_item"></div>
                                            </li>
                                            <li>
                                                <div className="grid_box_item"></div>
                                            </li>
                                            <li>
                                                <div className="grid_box_item"></div>
                                            </li>
                                            <li>
                                                <div className="grid_box_item"></div>
                                            </li>
                                            <li>
                                                <div className="grid_box_item"></div>
                                            </li>
                                            <li>
                                                <div className="grid_box_item"></div>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <section className="infomation_area py-md-5 py-4 content-area position-relative">
                        <img src={Oval_04} className="oval center-right" alt="ovel shape" />
                        <Container fluid="md">
                            <PostGrids />
                            
                            {/* <Button variant="light" type="submit" block className="form-btn mt-md-5 mb-md-0 mb-5 d-flex align-items-center border-0 form-btn-skyblue">SIGN-UP <img className="ml-auto" src={arrowRight} alt="arrow" /></Button> */}
                            {Auth ? null :  <Link to='/sign-up' variant="light" type="submit" block className="form-btn mt-md-5 mb-md-0 mb-5 d-flex align-items-center border-0 form-btn-skyblue">SIGN-UP <img className="ml-auto" src={arrowRight} alt="arrow" /></Link>}
                        </Container>
                    </section>

                    <section className="infomation_area py-md-5 py-4 content-area position-relative">
                        <img src={Oval_05} className="oval center-left d-none d-md-block" alt="ovel shape" />
                        <img src={OvalRight_02} className="ovel-bottom-right d-block d-md-none" alt="ovel shape" />
                        <Container fluid="md">
                            <Row className="space-bottom align-items-center">
                                <Col md={8} lg={5} className="ml-auto">
                                    <div className="mb-4">
                                        <h2 className="display-3">{this.state.data.these_ads_helps_section ? this.state.data.these_ads_helps_section.title : ''}</h2>
                                        <p className="lead">{this.state.data.these_ads_helps_section ? this.state.data.these_ads_helps_section.description : ''}</p>

                                        <div className="ads-portFrame mt-md-5 mt-4 ml-sm-0">
                                            <img src={Ads_02} alt="ads" />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <section className="infomation_area py-md-5 py-4 content-area position-relative">
                        <img src={Oval_06} className="oval center-right d-none" alt="ovel shape" />
                        <Container fluid="md">
                            <Row className="space-bottom align-items-center">
                                <Col md={8} lg={5}>
                                    <div className="mb-4">
                                        <h2 className="display-3">{this.state.data.do_not_like_ads_section ? this.state.data.do_not_like_ads_section.title : ''}</h2>
                                        <p className="lead">{this.state.data.do_not_like_ads_section ? this.state.data.do_not_like_ads_section.description : ''}</p>

                                        <div className="price pt-3">
                                            <div className="display-1">$0.99</div>
                                            <div className="price-duration">per week</div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>                
            </div>
        );
    }
}

export default Welcome;
