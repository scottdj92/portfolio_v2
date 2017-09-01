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
        if (data.show === true) {
            return (
                <div className='selected-work__project columns' key={key}>
                    <h3>{data.title}</h3>
                    <div className='image_container column'>
                        <figure className='image'>
                            <img className='selected-work__project__image' src={data.image}></img>
                        </figure>
                    </div>
                    <div className='selected-work__project__info column is-8 is-offset-1'>
                        <p>{data.excerpt}</p>
                        <a href={data.link}>View Project</a>
                        <span>{data.time}</span>
                    </div>
                </div>
            );
        }
    }

    maybeRenderWork() {
        if (this.state.inProgress === true) {
            return (
                <div className='columns'>
                    <div className='selected-work__wip column is-offset-2'>
                        <h2>My previous projects are available upon request. Please don't hestitate to shoot me an email!</h2>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <h1 className='selected-work__title'>A few of my selected works</h1>
                    <div className='skills-container__js'>
                        {clientData.map( (data, key) => this.renderSelectedWorks(data, key))}
                    </div>
                    <p className='disclaimer'>All images are part of their respective owners.</p>
                </div>
            );
        }
    }

    render() {
        return (
            <section className='selected-work section'>
                {this.maybeRenderWork()}
            </section>
        );
    }
}

export default SelectedWork;
