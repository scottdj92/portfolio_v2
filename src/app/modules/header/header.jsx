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
                <h1>Header Component</h1>
            </section>
        );
    }
}

export default Header;
