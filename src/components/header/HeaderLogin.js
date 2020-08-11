import React from 'react';
import {
    Link
  } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

 // assets
import Logo from '../../assets/logo.png';

function HeaderLogin(props) {
  return (
    <header className="header position-absolute">
        <Navbar expand="md">
            <Navbar.Brand href="./"><img src={Logo} alt="logo" /></Navbar.Brand>
            <div className="ml-auto header-controls text-uppercase">
                {/* <Button href="/login" variant="link" className={props.varient === 'dark' ? '' : 'text-white login-link'}>Login</Button>
                <Button href="/sign-up" className="btn-radius  btn-shadow ml-md-3 ml-2" variant="grad-primary">Sign Up</Button> */}
                
                <Link to="/login"><Button variant="link" className={`text-uppercase  ${props.varient === 'dark' ? '' : 'text-white login-link'}`}>Login</Button></Link>
                <Link to="/sign-up"><Button variant="grad-primary" className="text-uppercase btn-radius btn-shadow ml-md-3 ml-1">Sign Up</Button></Link>
            </div>
        </Navbar>
    </header>
  );
}

export default HeaderLogin;
