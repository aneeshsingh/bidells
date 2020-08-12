import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// Header
import Header from './header/Header';

// form Steps
import Step01 from './mutiform/Step01';
import Step02 from './mutiform/Step02';
import Step03 from './mutiform/Step03';
import Step04 from './mutiform/Step04';

// assets
import Ovel_01 from '../assets/Oval_dashboard_01.svg';
import Ads from '../assets/ads.png';
import LeftArrow from '../assets/arrow-left-solid.png';
import RightArrow from '../assets/arrow-white.svg';
import Oval from '../assets/Ovalpmob-left.svg';
import OvalRight from '../assets/Oval_dashboard_02.svg';



class CreateRefer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          currentStep : 1
         }
      }

    _prev = () => {
        let currentStep = this.state.currentStep;
        currentStep = currentStep <= 1? 1: currentStep - 1;
        this.setState({
          currentStep: currentStep
        })
      }
    
      _next = () => {
        let currentStep = this.state.currentStep;
        currentStep = currentStep >= 3? 4: currentStep + 1;
        this.setState({
          currentStep: currentStep
        })
      }
    
      previousBtn(){
        let currentStep = this.state.currentStep;
        if(currentStep > 1){
          return(
            <Button variant="dark-grad" type="button" onClick={() => this._prev()} className="d-flex align-items-center align-items-center border-0"><img className="mr-md-auto mr-3" src={LeftArrow} alt="arrow" /> <span>Previous</span></Button>
          )
        }
        return null;
      }
      nextBtn(){
        let currentStep = this.state.currentStep;
        if(currentStep < 4){
          return(
            <Button variant="dark-grad" type="button" onClick={() => this._next()} className="d-flex ml-auto align-items-center align-items-center border-0"><span>Next</span> <img className="ml-md-auto ml-3" src={RightArrow} alt="arrow" /></Button>
          )
        }
        return(
          <Button href="./" variant="dark-grad" type="button" className="d-flex align-items-center ml-auto align-items-center border-0"><span>Logout</span> <img className="ml-md-auto ml-3" src={RightArrow} alt="arrow" /></Button>
        )
      }
    render() {
        let currentStep = this.state.currentStep;

        return (
            <div className="outer-view">
                <Header />
                        
                <img src={Oval} className="oval-top-left d-block d-md-none" alt="ovel shape" />
                <img src={OvalRight} className="ovel-bottom-right d-block d-md-none" style={{ top: '0px' }} alt="ovel shape" />
                <div className="top_offset position-relative">
                    <img src={Ovel_01} className="place-oval-Lbottom" alt="ovel shape" />

                    <Container fluid="md">
                        <Row className="align-items-center justify-content-between content-area mb-md-5 mb-4">
                            <Col md={6} lg={5}>
                                <div className="heading-area">
                                    <div className="post_type">REFERRAL</div>
                                    <h1>Create your own</h1>
                                </div>
                            </Col>
                            <Col md={6} lg={5} className="d-none d-md-block">
                                <div className="ads-frame ml-auto mt-auto mb-3">
                                    <img src={Ads} alt="Ads Poster" />
                                </div>
                            </Col>
                        </Row>

                        <div className="multistep-form li-grad mb-5">
                            {currentStep === 1 ? <Step01 /> : null }
                            {currentStep === 2 ? <Step02 /> : null }
                            {currentStep === 3 ? <Step03 /> : null }
                            {currentStep === 4 ? <Step04 /> : null }
                            
                            <Row className="multistep-btns justify-content-end">
                                <Col md={8} className="d-flex flex-wrap pl-md-5">
                                    {this.previousBtn()}            
                                    {this.nextBtn()}
                                </Col>
                            </Row>
                        </div>

                        <Row className="justify-content-end mb-md-5 mb-4">
                            <Col md={6} lg={5}>
                                <div className="ads-frame ml-auto mt-auto mb-3">
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

export default CreateRefer;