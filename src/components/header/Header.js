import React from 'react';

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

 // assets
import Logo from '../../assets/logo.png';

function Header() {
  return (
    <header className="header position-absolute">
        <Navbar expand="md" variant="">
            <Navbar.Brand href="./"><img src={Logo} alt="logo" /></Navbar.Brand>
            <div className="ml-auto header-controls text-uppercase order-md-2">
                <Button href="/login" variant="link">Login</Button>
                <Button href="/sign-up" className="btn-radius  btn-shadow ml-md-3 ml-2" variant="grad-primary">Sign Up</Button>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                    <Nav.Link href="/about">Bets</Nav.Link>
                    <Nav.Link href="#">Leaderboards</Nav.Link>
                    <Nav.Link href="#">Results</Nav.Link>
                    <Nav.Link href="#">Shop</Nav.Link>
                    <Nav.Link href="#">FAQ</Nav.Link>
                    <Nav.Link href="#">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </header>
  );
}

export default Header;
