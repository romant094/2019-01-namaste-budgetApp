import React from 'react';

import SectionTitle from '../common/section-title';
import './main.css';

class SingleOperation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: props.type,
            sum: props.sum,
            date: props.date,
            
        }
    }
    render() {
        return (
            <div className="history-operations__block" >
                <div className='wrapper'>
                    <div className="type">
                        <span className={`type-${this.state.type}`}></span>
                    </div>
                    <div className="info">
                        <span className="info-money"> {`${this.state.sum}R`} </span>
                        <span className="info-date"> {this.state.date} </span>
                    </div>
                </div>
                <div className="delete">
                    <button className="delete-button">x</button>
                </div>
            </div>
        );
    }
}

class Main extends React.Component {
    render() {
        return (
            <>
                <section className='section moneyleft'>
                    <div class="container">
                        <SectionTitle text={`You have money left for month: 135 000R for day: 4 500R`} />
                        <div className="section-content">
                            <div class="data-input">
                                <input type="text" />
                                <button className='btn btn-secondary btn-custom'>Expense</button>
                                <button className='btn btn-primary btn-custom'>Income</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='section history'>
                    <div class="container">
                        <SectionTitle text='History' />
                        <div className="section-content">
                            <div className="history-operations">
                                <SingleOperation type='income' sum='1500' date='11.01.2019'/>
                                <SingleOperation type='expense' sum='2500' date='12.01.2019'/>                            
                                <SingleOperation type='income' sum='3500' date='13.01.2019' />
                                <SingleOperation type='expense' sum='4500' date='14.01.2019'/>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Main;