import React from 'react';

class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            id: props.id
        };

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value.replace(/[^0-9.]/g, '') }, () => {
        });
    }

    render() {
        return (
            <>
                <input type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    id={this.state.id} />
            </>
        )
    }
}

export default InputField;