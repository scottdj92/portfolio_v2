import React from 'react';
import headerTextJSON from './fixtures/headerText.json';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    addFlavorText() {
        //create a tagline that is pulled from headerTextJSON on render
        let select = this.getRandomIntInclusive(1, (headerTextJSON.length - 1));
        let text = headerTextJSON[select];
        return text;
    }

    //shamelessly copied and pasted from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    render() {
        return (
            <section className="header">
                <div className="row header__container">
                    <div className="header__title col-sm-12 col-md-4 col-lg-4 col-md-offset-2 col-lg-offset-2">
                        <h1>Hi, I'm Scott Jones.</h1>
                    </div>
                    <div className="header__bodycopy col-sm-12 col-md-7 col-lg-4">
                        <p className="header__bodycopy__title">I am a front-end developer that focuses on delivering the utmost quality in web experiences. In my spare time, I play guitar, basketball, and video games. {this.addFlavorText()}.</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Header;
