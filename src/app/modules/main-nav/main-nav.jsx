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
                        <ul className='column column-33 column-offset-66'>
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
