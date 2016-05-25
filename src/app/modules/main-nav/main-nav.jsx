import React from 'react';

import './main-nav.scss';

//import logo svg
import '../../../img/logo.svg';

class MainNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='main-nav row'>
                <div className='main-nav__container'>
                    <img src='/assets/logo.svg'/>
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
