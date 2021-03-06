import React, { Component } from 'react';
import axios from '../instance/axios';
import {
    Link
  } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';

 // assets
import UserPic from '../../assets/user_pic.png';
import ArrowLeft from '../../assets/arrow-left-solid.svg';
import Ads from '../../assets/ads.png';

class HeaderPost extends Component {

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
      })
  }

  render() {
    return (
      <header className="header position-absolute">
        <Navbar expand="md">
            <Link to="/redeem-points" className="border-0 navbar-back"><img src={ArrowLeft} alt="arrow"/></Link>
            <div className="ads-frame ml-auto mt-auto d-none d-md-block">
                <img src={Ads} alt="Ads Poster" />
            </div>
            <div className="ml-auto d-flex align-items-center order-md-2">
                <Link to="/point-summary" className="header-points">{this.state.points}</Link>
                <Link to="/user-settings" className="header-user ml-4"><img src={UserPic} alt="User"/></Link>
            </div>
        </Navbar>
    </header>
    );
  }
}

export default HeaderPost;