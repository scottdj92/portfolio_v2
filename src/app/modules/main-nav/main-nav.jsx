import React from 'react';

//import logo svg
import '../../../img/logo.svg';

class MainNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='main-nav row'>
                <div className='main-nav__image-container col-sm-6 col-md-6 col-lg-6'>
                    <img src='./assets/logo.svg' className='img-responsive'/>
                </div>
                <div className='main-nav__links-container col-sm-6 col-md-6 col-lg-5'>
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
