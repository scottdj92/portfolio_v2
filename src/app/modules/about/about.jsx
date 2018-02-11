import React from 'react';

class About extends React.Component {
    render() {
        return (
            <section className='about'>
                <div className='row'>
                    <div className='small-12 medium-7 large-7 columns'>
                        <h1 className='about__title'>About</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='small-9 medium-5 large-5 columns'>
                        <p className='about__bodycopy'>I am currently a full-stack web developer residing in Boston, MA. I strive to deliver work done right, on time, and on budget.</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;
