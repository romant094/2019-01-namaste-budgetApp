import React from 'react';
import { postBudget,postTransaction } from '../common/routes';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: props.classes,
            text: props.text,
            action: props.action,
            fieldID: props.fieldID
        }

        this.chooseAction = this.chooseAction.bind(this);
        this.setBudget = this.setBudget.bind(this);
        this.sendTransaction = this.sendTransaction.bind(this);
    }

    chooseAction(param) {
        param = this.state.action;
        if (param === 'set') {
            this.setBudget();
        } else {
            this.postTransaction();
        }
    }

    setBudget() {
        const budget = +document.getElementById(this.state.fieldID).value,
            json = JSON.stringify({ budget: budget });
        postBudget(json);
    }

    sendTransaction() {
        const json = JSON.stringify({
            type: this.state.action,
            sum: +document.getElementById(this.state.fieldID).value,
            date: new Date().toISOString().substring(0, 10)
        })
        postTransaction(json);
    }

    render() {
        return (
            <>
            <button className={this.state.classes}
                action={this.state.action}
                    onClick={this.chooseAction}>{this.state.text}</button>
            </>
        )
    }
}

export default Button;