import React from 'react';

class MainNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='main-nav'>
                <div className='row'>
                    <div className='main-nav__image-container small-5 column'>
                        <img src={require('../../../img/logo.svg')} className='logo-img'/>
                    </div>
                    <div className='main-nav__links-container small-6 column end'>
                        <ul className='nav-list'>
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
