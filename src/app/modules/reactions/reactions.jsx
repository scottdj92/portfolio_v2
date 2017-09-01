import React from 'react';

//TODO: Add timeout to transition for each reaction
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import reactionTextJSON from './fixtures/reactions.json';

class Reactions extends React.Component {
    constructor(props) {
        super(props);
    }

    showReaction() {
        let select = this.getRandomIntInclusive(1, (reactionTextJSON.length - 1));
        let text = reactionTextJSON[select];
        return (this.renderSelectedText(text));
    }

    //shamelessly copied and pasted from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    renderSelectedText(text) {
        return (
            <div className='columns'>
                <div className='column is-8 is-offset-2'>
                    <h3 className='reactions__container__reaction'>"{text.reaction}"</h3>
                    {this.maybeRenderHerald(text)}
                </div>
            </div>
        );
    }

    maybeRenderHerald(text) {
        if ('herald' in text) {
            return (
                <div className='reactions__container__reaction__herald'>
                    <div className=''>
                        <p>--{text.herald}</p>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <section className='reactions'>
                <div className='reactions__container'>
                    <h1>A few reactions from people that have worked with me:</h1>
                    {this.showReaction()}
                </div>
            </section>
        );
    }
}

export default Reactions;
