import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='footer row'>
                <ul className='nav-list'>
                    <li><a href='http://twitter.com/sdj2964'>Twitter</a></li>
                    <li><a href='http://github.com/scottdj92'>GitHub</a></li>
                    <li><a href='http://twitter.com/sdj2964'>Link</a></li>
                </ul>
                <div className='info row'>
                    <div className='col-sm-3 col-md-3 col-lg-3 col-sm-offset-5 col-md-offset-5 col-lg-offset-5'>
                        <p>Made with React.js and Webpack.</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Footer;
