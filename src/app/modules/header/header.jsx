import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section className='header row'>
                <div className='col-sm-12 col-md-4 col-lg-4'>
                    <h1 className='header__title'>Hi, I'm Scott Jones.</h1>
                </div>
                <div className='header__bodycopy col-sm-12 col-md-7 col-lg-7'>
                    <p className='header__bodycopy__title'>I like long walks on the beach. I am decent at basketball. The ladies say I am nice to look at. I am a people person.</p>
                </div>
                <div className='header_scroll'>
                    <p className='header__scroll'>Scroll down to see my work</p>
                    <div className='header__scroll__bottom-arrow'></div>
                </div>
            </section>
        );
    }
}

export default Header;
