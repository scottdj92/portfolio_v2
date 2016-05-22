import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='footer row'>
                <div className='row'>
                    <ul className='nav-list col-sm-12'>
                        <li><a href='http://twitter.com/sdj2964'>Twitter</a></li>
                        <li><a href='http://twitter.com/sdj2964'>GitHub</a></li>
                        <li><a href='http://twitter.com/sdj2964'>Link</a></li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default Footer;
