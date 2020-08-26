import React from 'react';
import {
    Link
  } from "react-router-dom";

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

 // assets
import Logo from '../../assets/logo.png';
import Menu from '../../assets/hamburger.svg';

function HeaderLanding() {
  return (
    <header className="header position-absolute">
        <Navbar expand="lg">
            <Navbar.Brand href="./"><img src={Logo} alt="logo" /></Navbar.Brand>
            <div className="ml-auto header-controls order-lg-2">
                <Link to="/login"><Button variant="link" className="text-uppercase">Login</Button></Link>
                <Link to="/sign-up"><Button variant="grad-primary" className="text-uppercase btn-radius btn-shadow ml-md-3 ml-1">Sign Up</Button></Link>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-2 ml-md-3 border-0 pr-0"><img src={Menu} alt="menu" /></Navbar.Toggle>

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                    <Nav.Link href="/get-all-bets">Bets</Nav.Link>
                    <Nav.Link href="/leaderboard">Leaderboards</Nav.Link>
                    <Nav.Link href="/get-results">Results</Nav.Link>
                    <Nav.Link href="/redeem-points">Shop</Nav.Link>
                    <Nav.Link href="/faq">FAQ</Nav.Link>
                    <Nav.Link href="/contact">Contact Us</Nav.Link>
                    <Nav.Link href="/about">About Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </header>
  );
}

export default HeaderLanding;
