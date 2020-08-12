import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

// Header
import Header from './header/Header';

// common
import PostGrids from './common/PostGrids';

// assets
import Ovel_01 from '../assets/Oval_dashboard_01.svg';
import Ovel_02 from '../assets/Oval_dashboard_02.svg';
import News from '../assets/category-bg.png';
import Ads from '../assets/ads.png';
import Oval from '../assets/Ovalpmob-left.svg';
import OvalRight from '../assets/Oval_dashboard_02.svg';

class GetAllBets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };
    }

    componentDidMount(){
        let Auth = localStorage.getItem('auth_bdGroup');
        if(!Auth){
            this.setState({
                redirect: true
            })
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/login" />;
        }
        return (
            <div className="outer-view">
                <Header />                

                <img src={Oval} className="oval-top-left d-block d-md-none" alt="ovel shape" />
                <img src={OvalRight} className="ovel-bottom-right d-block d-md-none" style={{ top: '0px' }} alt="ovel shape" />
                <div className="top_offset position-relative">
                    <img src={Ovel_02} className="place-oval-Rcenter" alt="ovel shape" />
                    <img src={Ovel_01} className="place-oval-Lbottom" alt="ovel shape" />


                    <div className="category_list d-flex align-items-center mb-4">
                        <Button href="#" className="category_item border-0 text-truncate">
                            <img src={News} className="category_image" alt="category" />
                            NEWS
                        </Button>
                        <Button href="#" className="category_item border-0 text-truncate">
                            <img src={News} className="category_image" alt="category" />
                            NEWS
                        </Button>
                        <Button href="#" className="category_item border-0 text-truncate">
                            <img src={News} className="category_image" alt="category" />
                            NEWS
                        </Button>
                        <Button href="#" className="category_item border-0 text-truncate">
                            <img src={News} className="category_image" alt="category" />
                            NEWS
                        </Button>
                        <Button href="#" className="category_item border-0 text-truncate">
                            <img src={News} className="category_image" alt="category" />
                            NEWS
                        </Button>
                        <Button href="#" className="category_item border-0 text-truncate">
                            <img src={News} className="category_image" alt="category" />
                            NEWS
                        </Button>
                        <Button href="#" className="category_item border-0 text-truncate">
                            <img src={News} className="category_image" alt="category" />
                            NEWS
                        </Button>
                        <Button href="#" className="category_item border-0 text-truncate">
                            <img src={News} className="category_image" alt="category" />
                            NEWS
                        </Button>
                        <Button href="#" className="category_item border-0 text-truncate">
                            <img src={News} className="category_image" alt="category" />
                            NEWS
                        </Button>
                        <Button href="#" className="category_item border-0 text-truncate">
                            <img src={News} className="category_image" alt="category" />
                            NEWS
                        </Button>
                        <Button href="#" className="category_item border-0 text-truncate">
                            <img src={News} className="category_image" alt="category" />
                            NEWS
                        </Button>
                        <Button href="#" className="category_item border-0 text-truncate">
                            <img src={News} className="category_image" alt="category" />
                            NEWS
                        </Button>
                        <Button href="#" className="category_item border-0 text-truncate">
                            <img src={News} className="category_image" alt="category" />
                            NEWS
                        </Button>
                        <Button href="#" className="category_item border-0 text-truncate">
                            <img src={News} className="category_image" alt="category" />
                            NEWS
                        </Button>
                    </div>

                    <Container fluid="md">
                        <PostGrids />
                    </Container>

                    <div className="ads-frame mx-auto d-block d-md-none mt-auto mb-md-3">
                        <img src={Ads} alt="Ads poster" />
                    </div>
                </div>
                
            </div>
        );
    }
}

export default GetAllBets;