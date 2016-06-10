import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section className='header row'>
                <div className='header__title col-sm-12 col-md-4 col-lg-4 col-md-offset-2 col-lg-offset-2'>
                    <h1>Hi, I'm Scott Jones.</h1>
                </div>
                <div className='header__bodycopy col-sm-12 col-md-7 col-lg-4'>
                    <p className='header__bodycopy__title'>I like long walks on the beach. I am decent at basketball. The ladies say I am nice to look at. I am a people person. I also love doing web development and listening to classic rock.</p>
                </div>
            </section>
        );
    }
}

export default Header;
