import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='contact'>
                <div className='row'>
                    <div className='small-12 medium-7 large-7 columns'>
                        <h1 className='contact__title'>Feel free to contact me anytime!</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='small-9 medium-5 large-5 columns'>
                        <p className='contact__bodycopy'>Now that you've reached this point, I'm sure you've decided to send me an email. Good thing there's an "email me" button right there! I look forward to chatting with you.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className="small-12 medium-5 large-5 columns">
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
