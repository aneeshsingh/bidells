import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

// Header
import Header from './header/HeaderDashboard';

// common
import PostGrids from './common/PostGrids';

// assets
import Ovel_01 from '../assets/Oval_dashboard_01.svg';
import Ovel_02 from '../assets/Oval_dashboard_02.svg';
import News from '../assets/category-bg.png';

class GetAllBets extends Component {
    render() {
        return (
            <div className="outer-view">
                <Header />                

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

                </div>
                
            </div>
        );
    }
}

export default GetAllBets;