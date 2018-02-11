import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <section className='footer'>
                <div className='columns'>
                    <ul className='nav-list column is-2 is-offset-4'>
                        <li><a href='http://twitter.com/sdj2964'>Twitter</a></li>
                        <li><a href='http://github.com/scottdj92'>GitHub</a></li>
                    </ul>
                    <div className='info column is-8'>
                        <p>Made with <a className='footer__link' href='https://facebook.github.io/react/'>React.js</a>, <a className='footer__link' href='https://webpack.github.io/'>Webpack</a>, <a className='footer__link' href='http://bulma.io/'>Bulma.io</a>, and lots of love. &copy; Scott Jones 2018</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Footer;
