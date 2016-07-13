import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class Reactions extends React.Component {
    constructor(props) {
        super(props);
    }

    showReaction() {
        // TODO: determine a reaction from a static .json list and display it
        // ... carousel-like
    }

    render() {
        return (
            <section className='reactions'>
                <div className='reactions__container row'>
                    <h4 className='reactions__container__reaction'></h4>
                    <p>{this.showReaction()}</p>
                </div>
            </section>
        )
    }
}

export default Reactions;
