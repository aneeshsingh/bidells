import React from 'react';

// Header
import HeaderLanding from './HeaderLanding';
import HeaderDashboard from './HeaderDashboard';

function Header(props) {
    let Auth = localStorage.getItem('auth_bdGroup');
    
    if(Auth){
        return(
            <HeaderDashboard userPic={props.userPic} />
        )
    }else{
        return(
            <HeaderLanding />
        )
    }
}

export default Header;