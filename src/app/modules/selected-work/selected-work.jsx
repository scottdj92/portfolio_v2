import React from 'react';
import clientData from './fixtures/selected-work.json';

class SelectedWork extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderSelectedWorks(data) {
        console.log('renderSelectedWorks', data);
        return (
            <div className='selected-work__project'>
                <div className='row'>
                    <h3>{data.title}</h3>
                    <div className='small-12 medium-4 large-4 columns'>
                        <img src={data.image}></img>
                    </div>
                    <div className='small-12 medium-6 large-6 columns end'>
                        <p>{data.excerpt}</p>
                        <span>{data.time}</span>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <section className='selected-work'>
                <div className='row'>
                    <h1 className='selected-work__title'>A few of my selected works</h1>
                    <div className='skills-container__js'>
                        {clientData.map(data => this.renderSelectedWorks(data))}
                    </div>
                </div>
            </section>
        );
    }
}

export default SelectedWork;
