import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='contact'>
                <div className='columns'>
                    <div className='column'>
                        <h1 className='contact__title'>Feel free to contact me anytime!</h1>
                    </div>
                </div>
                <div className='columns'>
                    <div className='column'>
                        <p className='contact__bodycopy'>Now that you've reached this point, I'm sure you've decided to send me an email. I look forward to chatting with you.</p>
                    </div>
                </div>
                <div className='columns'>
                    <div className="column">
                        <div className='contact__container'>
                            <h4>scottdj92 [at] gmail [dot] com</h4>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
