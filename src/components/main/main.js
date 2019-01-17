import React from 'react';

import SectionTitle from '../common/section-title';

class SingleOperation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: props.type,
            sum: props.sum,
            date: props.date
        }
        this.setBlock = this.setBlock.bind(this);
    }
    setBlock() {
        let blockType;
        (this.state.type === 'income') ? blockType = '+' : blockType = '-';
        return blockType;
    }
    render() {
        return (
            <div className="history-operations__block" >
                <div className="type">
                    <span>
                        {this.setBlock()}
                    </span>
                </div>
                <div className="info">
                    <span> {`${this.state.sum}R`} </span>
                    <span> {this.state.date} </span>
                </div>
                <div className="delete">
                    <button>x</button>
                </div>
            </div>
        );
    }
}

class Main extends React.Component {
    render() {
        return (
            <>
                <section className='moneyleft'>
                    <SectionTitle text={`You have money left for month: 135 000R for day: 4 500R`} />
                    <div className="section-content">
                        <input type="text" />
                        <button className='btn btn-secondary'>Expense</button>
                        <button className='btn btn-primary'>Income</button>
                    </div>
                </section>

                <section className='history'>
                    <SectionTitle text='History' />
                    <div className="section-content">
                        <div className="history-operations">
                            <SingleOperation type='income' sum='1500' date='11.01.2019'/>
                            <SingleOperation type='expense' sum='2500' date='12.01.2019'/>                            
                            <SingleOperation type='income' sum='3500' date='13.01.2019' />
                            <SingleOperation type='expense' sum='4500' date='14.01.2019'/>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Main;