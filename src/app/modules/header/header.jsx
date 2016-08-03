import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section className="header">
                <div className="row header__container">
                    <div className="header__title col-sm-12 col-md-4 col-lg-4 col-md-offset-2 col-lg-offset-2">
                        <h1>Hi, I'm Scott Jones.</h1>
                    </div>
                    <div className="header__bodycopy col-sm-12 col-md-7 col-lg-4">
                        <p className="header__bodycopy__title">I am a front-end developer that focuses on delivering the utmost quality in web experiences. In my spare time, I play guitar, basketball, and video games. The ladies also say I'm nice to look at.</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Header;
