import React from 'react';

import SectionTitle from '../common/section-title';
import { default as Input } from '../common/input';
import Button from '../common/button';
import './main.css';
import GetTransactions from '../common/routes';

class Transactions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            transactions: GetTransactions()
        };
        this.renderElements = this.renderElements.bind(this);
    }

    componentDidMount() {



    }

    renderElements() {
        // this.setState({ transactions: GetTransactions() });
        // this.state.transactions = GetTransactions();
        const elements = this.state.transactions.map((item) => {
            return (
                <div className="history-operations__block" key={item.id} >
                    <div className='wrapper'>
                        <div className="type">
                            <span className={`type-${item.type}`}></span>
                        </div>
                        <div className="info">
                            <span className="info-money"> {`${item.sum}R`} </span>
                            <span className="info-date"> {item.date} </span>
                        </div>
                    </div>
                    <div className="delete">
                        <button className="delete-button">x</button>
                    </div>
                </div>
            );
        });
        return elements;
    }

    render() {
        return (this.renderElements());
    }
}
class Main extends React.Component {
    render() {
        return (
            <>
                <section className='section moneyleft col-12 col-md-9 col-lg-7'>
                    <div className="container">
                        <SectionTitle text={`You have money left for month: 135 000R for day: 4 500R`} />
                        <div className="section-content">
                            <div className="data-input">
                                <Input id='sum' />
                                <Button classes='btn btn-secondary btn-custom' text='Expense' action='expense' fieldID='sum' />
                                <Button classes='btn btn-primary btn-custom' text='Income' action='income' fieldID='sum' />
                            </div>
                        </div>
                    </div>
                </section>

                <section className='section history col-12 col-md-9 col-lg-7'>
                    <div className="container">
                        <SectionTitle text='History' />
                        <div className="section-content">
                            <div className="history-operations">
                                <Transactions />
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Main;