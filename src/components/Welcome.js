import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Header
import Header from './header/Header';
import Footer from './footer/Footer';

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


function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-radius"
      >
        <Modal.Body className="p-0">
            <Button type="button" variant="reset" className="modal-close" onClick={props.onHide}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x d-block" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                    <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                </svg>
            </Button>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe title="Bidells Tour" className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
            </div>
        </Modal.Body>
      </Modal>
    );
  }

function Welcome() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className="outer-view">
            <Header varient={'dark'} />
            
            
                <div className="top_offset">
                    <section className="infomation_area content-area position-relative">
                        <img src={Oval_01} className="oval bottom-left welcome-oval" alt="ovel shape" />
                        <Container fluid="md">
                            <Row className="mh-100 justify-content-between">
                                <Col md={6} lg={5}>
                                    <div className="mb-4">
                                        <h1 className="display-1">Welcome <br />to Bidells</h1>
                                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras est justo, ullamcorper et ipsum fringilla, convallis faucibus ex.</p>

                                        <Button variant="light" type="submit" block className="form-btn mt-md-5 mt-4 d-flex align-items-center border-0 form-btn-skyblue">SIGN-UP <img className="ml-auto" src={arrowRight} alt="arrow" /></Button>
                                    </div>
                                </Col>
                                <Col md={6} lg={6}>
                                    <div className="video-frame d-flex flex-column">
                                        <h5 className="video-frame-title">How Bidells works?</h5>

                                        <Button type="button" variant="play" onClick={() => setModalShow(true)}><img src={Play} alt="play" /></Button>

                                        <div className="video-frame-bottom mt-auto d-flex align-items-center justify-content-between">
                                            <span><img src={VideoIcon} alt="Video" /></span>
                                            <span>02:00</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className="infomation_area pb-md-5 pb-4 content-area position-relative">
                        <Container fluid="md">
                            <Row>
                                <Col md={6} lg={5} className="ml-auto">
                                    <div className="mb-4">
                                        <h2 className="display-3">Open Account</h2>
                                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras est justo, ullamcorper et ipsum fringilla, convallis faucibus ex.</p>

                                        <Button variant="light" type="submit" block className="form-btn mt-md-5 mt-4 d-flex align-items-center border-0 form-btn-skyblue">SIGN-UP <img className="ml-auto" src={arrowRight} alt="arrow" /></Button>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <section className="infomation_area py-md-5 py-4 content-area position-relative">
                        <img src={Oval_02} className="oval center-right" alt="ovel shape" />
                        <Container fluid="md">
                            <Row className="mh-100 align-items-center">
                                <Col md={6} lg={5}>
                                    <div className="mb-4">
                                        <h2 className="display-3">Place Bet</h2>
                                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras est justo, ullamcorper et ipsum fringilla, convallis faucibus ex.</p>

                                        <Button variant="light" type="submit" block className="form-btn mt-md-5 mt-4 d-flex align-items-center border-0 form-btn-skyblue">SIGN-UP <img className="ml-auto" src={arrowRight} alt="arrow" /></Button>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <section className="infomation_area py-md-5 py-4 content-area position-relative">
                        <img src={Oval_03} className="oval center-left" alt="ovel shape" />
                        <Container fluid="md">
                            <Row className="mh-100 align-items-center">
                                <Col md={6} lg={5} className="ml-auto">
                                    <div className="mb-4">
                                        <h2 className="display-3">Redeem</h2>
                                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras est justo, ullamcorper et ipsum fringilla, convallis faucibus ex.</p>

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
                            <Button variant="light" type="submit" block className="form-btn mt-md-5 mt-4 d-flex align-items-center border-0 form-btn-skyblue">SIGN-UP <img className="ml-auto" src={arrowRight} alt="arrow" /></Button>
                        </Container>
                    </section>

                    <section className="infomation_area py-md-5 py-4 content-area position-relative">
                        <img src={Oval_05} className="oval center-left" alt="ovel shape" />
                        <Container fluid="md">
                            <Row className="mh-100 align-items-center">
                                <Col md={6} lg={5} className="ml-auto">
                                    <div className="mb-4">
                                        <h2 className="display-3">These ads help us!</h2>
                                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras est justo, ullamcorper et ipsum fringilla, convallis faucibus ex.</p>

                                        <div className="ads-portFrame mt-md-5 mt-4">
                                            <img src={Ads_02} alt="ads" />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <section className="infomation_area py-md-5 py-4 content-area position-relative">
                        <img src={Oval_06} className="oval center-right" alt="ovel shape" />
                        <Container fluid="md">
                            <Row className="mh-100 align-items-center">
                                <Col md={6} lg={5}>
                                    <div className="mb-4">
                                        <h2 className="display-3">Don’t Like ads</h2>
                                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras est justo, ullamcorper et ipsum fringilla, convallis faucibus ex.</p>

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

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            <Footer />
        </div>
    );
}

export default Welcome;
