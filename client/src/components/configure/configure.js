import React from 'react';

import SectionTitle from '../common/section-title';
import { default as Input } from '../common/input';
import Button from '../common/button';

class Configure extends React.Component {
    constructor() {
        super();
        this.btnClick = this.btnClick.bind(this);
    }
    btnClick() {
        alert(`value: ${document.querySelector('input').value}`);
    }

    render() {
        return (
            <>
                <section className='section configure col-12 col-md-9 col-lg-7'>
                    <div className="container">
                        <SectionTitle text='Configure' />
                        <div className="section-content">
                            <div className="data-input">
                                <Input id='budget'/>
                                <Button classes='btn btn-primary btn-custom'
                                    text='Set'
                                    action='set'
                                    fieldID='budget'
                                />
                                {/* <button className='btn btn-primary btn-custom' onClick={this.btnClick}>Set</button> */}
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Configure;