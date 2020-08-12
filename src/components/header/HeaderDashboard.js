import React, { Component } from 'react';
import axios from '../instance/axios';
import {
    Link
  } from "react-router-dom";

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';

 // assets
import Logo from '../../assets/logo.png';
import UserPic from '../../assets/user_pic.png';
import Menu from '../../assets/hamburger.svg';

class HeaderDashboard extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            points: ''
        }
    }

    componentDidMount() {
        let Auth = localStorage.getItem('auth_bdGroup');
        
        axios.get(`/?itemType=getPoints&userID=${Auth}`)
            .then(res => {
            const points = res.data;
            this.setState({ points : points.points });
        });


    }
    
    render() {
        return (
            <header className="header header-dashboard position-absolute">
                <Navbar expand="lg" variant="">
                    <Navbar.Brand href="./"><img src={Logo} alt="logo" /></Navbar.Brand>
                    <div className="ml-auto d-flex align-items-center order-lg-2">
                        <div className="header-points">{this.state.points}</div>
                        <Link to="/user-settings" className="header-user ml-md-4 ml-3"><img src={UserPic} alt="user"/></Link>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-2 ml-md-3 border-0 pr-0"><img src={Menu} alt="menu" /></Navbar.Toggle>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="/get-all-bets">Bets</Nav.Link>
                            <Nav.Link href="/leaderboard">Leaderboards</Nav.Link>
                            <Nav.Link href="/get-results">Results</Nav.Link>
                            <Nav.Link href="/redeem-points">Shop</Nav.Link>
                            <Nav.Link href="/activities">Activity</Nav.Link>
                            <Nav.Link href="/refer">Refer a friend</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        );
    }
}

export default HeaderDashboard;
