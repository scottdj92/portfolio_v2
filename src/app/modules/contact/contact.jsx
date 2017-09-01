import React from 'react';
import selfie from '../../img/selfie.jpg';

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='contact'>
                <div className='columns'>
                    <div className='column is-narrow'>
                        <div className='box contact__image'>
                            <figure>
                                <img src={selfie}/>
                            </figure>
                        </div>
                    </div>
                    <div className='column'>
                        <div className='columns'>
                            <div className='column'>
                                <h1 className='contact__title'>Feel free to contact me anytime!</h1>
                            </div>
                        </div>
                        <div className='columns'>
                            <div className='column'>
                                <p className='contact__bodycopy'>I look forward to chatting with you and creating fantastic products together.</p>
                            </div>
                        </div>
                        <div className='columns'>
                            <div className="column">
                                <div className='contact__container'>
                                    <h4>scottdj92 [at] gmail [dot] com</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
