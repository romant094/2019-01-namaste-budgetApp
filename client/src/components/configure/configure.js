import React from 'react';

import SectionTitle from '../common/section-title';

function Configure() {
    return (
        <>
            <section className='section configure'>
                <div class="container">
                    <SectionTitle text='Configure' />
                    <div className="section-content">
                        <div class="data-input">
                            <input type="text" />
                            <button className='btn btn-primary btn-custom'>Set</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Configure;