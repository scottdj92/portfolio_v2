import React from 'react';

import './main-nav.scss';

class MainNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='main-nav row'>
                <div className='main-nav-container'>
                    <ul className='nav-list'>
                        <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#'>Resumé</a>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default MainNav;
