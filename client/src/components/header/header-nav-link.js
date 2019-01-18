import React from 'react';
import { Link } from 'react-router-dom';

class HeaderNavLink extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            link: props.link,
            text: props.text
        }
    }
    render() {
        return (
            <Link to={this.state.link}>{this.state.text}</Link>
        )
    }
}

export default HeaderNavLink;