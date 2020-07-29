import React from 'react';

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';

 // assets
import Logo from '../../assets/logo.png';
import UserPic from '../../assets/user_pic.png';

function Header() {
  return (
    <header className="header header-dashboard position-absolute">
        <Navbar expand="md" variant="">
            <Navbar.Brand href="./"><img src={Logo} alt="logo" /></Navbar.Brand>
            <div className="ml-auto d-flex align-items-center order-md-2">
                <div className="header-points">3000</div>
                <div className="header-user ml-4"><img src={UserPic} alt="user"/></div>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link href="/about">Bets</Nav.Link>
                    <Nav.Link href="/leaderboard">Leaderboards</Nav.Link>
                    <Nav.Link href="/all-results">Results</Nav.Link>
                    <Nav.Link href="/redeem-points">Shop</Nav.Link>
                    <Nav.Link href="#">Activity</Nav.Link>
                    <Nav.Link href="#">Refer a friend</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </header>
  );
}

export default Header;
