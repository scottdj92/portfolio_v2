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
                    <div className='row'>
                        <ul className='nav-list col-sm-12 col-sm-offset-9 col-md-12 col-md-offset-9 col-lg-12 col-lg-offset-9'>
                            <li>
                                <a href='#'>Home</a>
                            </li>
                            <li>
                                <a href='#'>Resumé</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default MainNav;
