import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Header
import Header from './header/HeaderDashboard';

// common
import PostGrids from '../components/common/PostGrids';

// assets
import Ovel_01 from '../assets/Oval_dashboard_01.svg';
import Ovel_02 from '../assets/Oval_dashboard_02.svg';
import News from '../assets/category-bg.png';

function Categories() {
  return (
    <div className="outer-view">
        <Header />
        

        <div className="top_offset position-relative">
            <img src={Ovel_02} className="place-oval-Rcenter" alt="ovel shape" />
            <img src={Ovel_01} className="place-oval-Lbottom" alt="ovel shape" />


            <div className="category_list d-flex align-items-center mb-4">
                <a href="#" className="category_item text-truncate">
                    <img src={News} className="category_image" alt="image" />
                    NEWS
                </a>
                <a href="#" className="category_item text-truncate">
                    <img src={News} className="category_image" alt="image" />
                    NEWS
                </a>
                <a href="#" className="category_item text-truncate">
                    <img src={News} className="category_image" alt="image" />
                    NEWS
                </a>
                <a href="#" className="category_item text-truncate">
                    <img src={News} className="category_image" alt="image" />
                    NEWS
                </a>
                <a href="#" className="category_item text-truncate">
                    <img src={News} className="category_image" alt="image" />
                    NEWS
                </a>
                <a href="#" className="category_item text-truncate">
                    <img src={News} className="category_image" alt="image" />
                    NEWS
                </a>
                <a href="#" className="category_item text-truncate">
                    <img src={News} className="category_image" alt="image" />
                    NEWS
                </a>
                <a href="#" className="category_item text-truncate">
                    <img src={News} className="category_image" alt="image" />
                    NEWS
                </a>
                <a href="#" className="category_item text-truncate">
                    <img src={News} className="category_image" alt="image" />
                    NEWS
                </a>
                <a href="#" className="category_item text-truncate">
                    <img src={News} className="category_image" alt="image" />
                    NEWS
                </a>
                <a href="#" className="category_item text-truncate">
                    <img src={News} className="category_image" alt="image" />
                    NEWS
                </a>
                <a href="#" className="category_item text-truncate">
                    <img src={News} className="category_image" alt="image" />
                    NEWS
                </a>
                <a href="#" className="category_item text-truncate">
                    <img src={News} className="category_image" alt="image" />
                    NEWS
                </a>
                <a href="#" className="category_item text-truncate">
                    <img src={News} className="category_image" alt="image" />
                    NEWS
                </a>
            </div>

            <Container fluid="md">
                <PostGrids />
            </Container>

        </div>
        
    </div>
  );
}

export default Categories;
