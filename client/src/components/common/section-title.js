import React from 'react';

class SectionTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text
            
        }
    }
    render() {
        return (
            <div className="section-title">
                <h3>
                    {this.state.text}
                </h3>
            </div>
        );
    }
}

export default SectionTitle;