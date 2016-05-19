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
                <h1>Hi, I'm Scott Jones.</h1>
                <hr/>
                <p className='header_bodycopy'>I like long walks on the beach. I am decent at basketball. The ladies say I am nice to look at. I am a people person.</p>
            </section>
        );
    }
}

export default Header;
