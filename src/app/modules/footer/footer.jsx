import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='footer'>
                <div className='row'>
                    <ul className='nav-list'>
                        <li><a href='http://twitter.com/sdj2964'>Twitter</a></li>
                        <li><a href='http://github.com/scottdj92'>GitHub</a></li>
                        <li><a href='mailto:scottdj92@gmail.com' target='_top'>Email</a></li>
                    </ul>
                    <div className='info row'>
                        <div className='small-12 medium-6 large-6 small-offset-4 columns'>
                            <p>Made with <a className='footer__link' href='https://facebook.github.io/react/'>React.js</a>, <a className='footer__link'  href='https://webpack.github.io/'>Webpack</a>, and lots of love. &copy; Scott Jones 2016</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Footer;
