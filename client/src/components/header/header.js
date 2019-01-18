import React from 'react';

import HeaderLogo from './header-logo';
import HeaderNav from './header-nav';

import './header.css';

class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <div className="container">
                    <div className="header-content">
                        <HeaderLogo path='../../../img/logo.jpg' />
                        <HeaderNav />
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;