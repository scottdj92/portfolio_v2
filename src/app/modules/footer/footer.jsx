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
                    <li><a href='http://twitter.com/sdj2964'>GitHub</a></li>
                    <li><a href='http://twitter.com/sdj2964'>Link</a></li>
                </ul>
            </section>
        );
    }
}

export default Footer;
