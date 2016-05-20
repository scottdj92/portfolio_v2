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
                <div className='container'>
                    <div className='row'>
                        <div classname='col-sm-4 col-md-4 col-lg-4'>
                            <h1 className='header__title'>Hi, I'm Scott Jones.</h1>
                        </div>
                        <div className='header__bodycopy col-sm-8 col-md-8 col-lg-8'>
                            <p className='header__bodycopy__title'>I like long walks on the beach. I am decent at basketball. The ladies say I am nice to look at. I am a people person.</p>
                            <p className='header__bodycopy__scroll'>Scroll down to see my work</p>
                            <div className='header__bodycopy__bottom-arrow'></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Header;
