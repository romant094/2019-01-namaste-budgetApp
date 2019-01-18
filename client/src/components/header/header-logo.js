import React from 'react';

class HeaderLogo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            path: this.path
        }
    }
    render(){
    return (
        <div className="header-logo">
            <a href="/">
                <img src={this.state.path} alt="Planner" />
            </a>
        </div>
        );
    }
}

export default HeaderLogo;