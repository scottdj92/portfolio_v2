import React from 'react';

import './main-nav.scss';

class MainNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='main-nav'>
                <div className='container'>
                    <div className='row'>
                        <ul className='nav-list col-sm-12'>
                            <li>
                                <a href='#'>example link here</a>
                            </li>
                            <li>
                                <a href='#'>PDF</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default MainNav;
