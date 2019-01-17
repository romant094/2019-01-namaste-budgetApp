import React from 'react';
import HeaderNavLink from './header-nav-link';

class HeaderNav extends React.Component {
    render() {
        return (
            <div className="header-nav col-7">
                <nav>
                    <HeaderNavLink link='/' text='Main' />
                    <HeaderNavLink link='/configure' text='Configure' />
                </nav>
            </div>
        );
    }
}

export default HeaderNav;