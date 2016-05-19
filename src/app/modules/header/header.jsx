import React from 'react';

import './header.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section className='header'>
                <div className='row'>
                    <h1 className='header__title small-12 medium-6 large-6 columns'>Hi, I'm Scott Jones.</h1>
                    <hr/>
                    <div className='header__bodycopy small-12 medium-6 large-6 columns'>
                        <p className='header__bodycopy__title'>I like long walks on the beach. I am decent at basketball. The ladies say I am nice to look at. I am a people person.</p>
                        <p className='header__bodycopy__scroll'>Scroll down to see my work</p>
                        <div className='header__bodycopy__bottom-arrow'></div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Header;
