import React from 'react';

import SectionTitle from '../common/section-title';

function Configure() {
    return (
        <>
            {/* <Section stitle='configure' stitle='Monthly amount' /> */}
            <section className='configure'>
            <SectionTitle text='Configure' />
                <div className="section-content">
                    <input type="text" />
                    <button className='btn btn-primary'>Set</button>
                </div>
            </section>
        </>
    );
}

export default Configure;