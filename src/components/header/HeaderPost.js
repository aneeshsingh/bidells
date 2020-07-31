import React, { Component } from 'react';
import axios from '../instance/axios';

import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

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
      axios.get(`/?itemType=getPoints&userID=6`)
          .then(res => {
          const points = res.data;
          this.setState({ points : points.points });
      })
  }

  render() {
    return (
      <header className="header position-absolute">
        <Navbar expand="md">
            <Button href="/" className="border-0 navbar-back"><img src={ArrowLeft} alt="arrow"/></Button>
            <div className="ads-frame ml-auto mt-auto mb-3">
                <img src={Ads} alt="Ads Poster" />
            </div>
            <div className="ml-auto d-flex align-items-center order-md-2">
                <div className="header-points">{this.state.points}</div>
                <div className="header-user ml-4"><img src={UserPic} alt="User"/></div>
            </div>
        </Navbar>
    </header>
    );
  }
}

export default HeaderPost;