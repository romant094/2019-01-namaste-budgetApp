import React from 'react';

import SectionTitle from '../common/section-title';
import './main.css';

const TransactionsRender = () => {
    const transactions = [
        {
            id: 1,
            type: 'income',
            sum: 2500,
            date: '2019-01-12'
        },
        {
            id: 2,
            type: 'expense',
            sum: 3500,
            date: '2019-01-13'
        },
        {
            id: 3,
            type: 'income',
            sum: 1500,
            date: '2019-01-14'
        },
        {
            id: 4,
            type: 'expense',
            sum: 4500,
            date: '2019-01-15'
        },
    ];

    const elements = transactions.map((item) => {
        return (
            <>
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
            </>
        );
    });
    return elements;
}
class Main extends React.Component {
    render() {
        return (
            <>
                <section className='section moneyleft'>
                    <div className="container">
                        <SectionTitle text={`You have money left for month: 135 000R for day: 4 500R`} />
                        <div className="section-content">
                            <div className="data-input">
                                <input type="text" />
                                <button className='btn btn-secondary btn-custom'>Expense</button>
                                <button className='btn btn-primary btn-custom'>Income</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='section history'>
                    <div className="container">
                        <SectionTitle text='History' />
                        <div className="section-content">
                            <div className="history-operations">
                                <TransactionsRender />
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Main;