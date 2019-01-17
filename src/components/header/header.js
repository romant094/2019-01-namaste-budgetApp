import React from 'react';

import HeaderLogo from './header-logo';
import HeaderNav from './header-nav';

class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <HeaderLogo path='../../../img/logo.jpg' />
                <HeaderNav />
            </header>
        );
    }
}

export default Header;