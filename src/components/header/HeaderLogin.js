import React from 'react';

import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

 // assets
import Logo from '../../assets/logo.png';

function HeaderLogin(props) {
  return (
    <header className="header position-absolute">
        <Navbar expand="md  ">
            <Navbar.Brand href="./"><img src={Logo} alt="logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <div className="ml-auto header-controls text-uppercase">
                <Button href="/login" variant="link" className={props.varient === 'dark' ? '' : 'text-white'}>Login</Button>
                <Button href="/sign-up" className="btn-radius  btn-shadow ml-md-3 ml-2" variant="grad-primary">Sign Up</Button>
            </div>
        </Navbar>
    </header>
  );
}

export default HeaderLogin;
