import React from 'react';
import clientData from './fixtures/selected-work.json';

class SelectedWork extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inProgress: false
        };
    }

    renderSelectedWorks(data, key) {
        return (
            <div className='selected-work__project' key={key}>
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

    maybeRenderWork() {
        if (this.state.inProgress === true) {
            return (
                <div className='row'>
                    <div className='selected-work__wip'>
                        <h2>My previous projects are available upon request. Please don't hestitate to shoot me an email!</h2>
                    </div>
                </div>
            );
        } else {
            return (
                <div className='row'>
                    <h1 className='selected-work__title'>A few of my selected works</h1>
                    <div className='skills-container__js'>
                        {clientData.map( (data, key) => this.renderSelectedWorks(data, key))}
                    </div>
                </div>

            );
        }
    }

    render() {
        return (
            <section className='selected-work'>
                {this.maybeRenderWork()}
            </section>
        );
    }
}

export default SelectedWork;
