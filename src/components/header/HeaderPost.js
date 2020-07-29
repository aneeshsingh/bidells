import React from 'react';

import Navbar from 'react-bootstrap/Navbar';

 // assets
import UserPic from '../../assets/user_pic.png';
import ArrowLeft from '../../assets/arrow-left-solid.svg';
import Ads from '../../assets/ads.png';

function Header(props) {
  return (
    <header className="header position-absolute">
        <Navbar expand="md">
            <div className="navbar-back"><img src={ArrowLeft} alt="arrow"/></div>
            <div className="ads-frame ml-auto mt-auto mb-3">
                <img src={Ads} alt="Ads Poster" />
            </div>
            <div className="ml-auto d-flex align-items-center order-md-2">
                <div className="header-points">3000</div>
                <div className="header-user ml-4"><img src={UserPic} alt="User"/></div>
            </div>
        </Navbar>
    </header>
  );
}

export default Header;
