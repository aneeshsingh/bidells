import React from 'react';

// Header
import HeaderLanding from './HeaderLanding';
import HeaderDashboard from './HeaderDashboard';

function Header() {
    let Auth = localStorage.getItem('auth_bdGroup');
    if(Auth){
        return(
            <HeaderDashboard />
        )
    }else{
        return(
            <HeaderLanding />
        )
    }
}

export default Header;