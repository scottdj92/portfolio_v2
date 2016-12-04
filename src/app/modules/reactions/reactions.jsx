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
        console.log(text);
        return (
            <div className='small-8 columns end'>
                <div className='row'>
                    <div className='small-12 small-offset-2 end'>
                        <h3 className='reactions__container__reaction'>"{text.reaction}"</h3>
                    </div>
                    {this.maybeRenderHerald(text)}
                </div>
            </div>
        );
    }

    maybeRenderHerald(text) {
        if ('herald' in text) {
            return (
                <div className='reactions_container__reaction__herald row'>
                    <div className='small-5 small-offset-7 end'>
                        <p>--{text.herald}</p>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <section className='reactions'>
                <div className='reactions__container row'>
                    <h1>A few reactions from people that have worked with me:</h1>
                    {this.showReaction()}
                </div>
            </section>
        );
    }
}

export default Reactions;
