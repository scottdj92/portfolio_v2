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
                        <form>
                            <div className='contact__name row'>
                                <div className='small-12 medium-4 columns'>
                                    <label for='contact-name' className='contact__name__label'>Your Name</label>
                                    <input type='text' name='contact-name' placeholder='Your Name Here'></input>
                                </div>
                            </div>
                            <div className='contact__message row'>
                                <div className='small-12 medium-7 columns'>
                                    <label for='comment'>Your Comments</label>
                                    <textarea name='comment' placeholder='Contact Me'></textarea>
                                </div>
                            </div>
                            <input className='contact__submit' type='button' type='submit' value='submit'></input>
                        </form>
                    </div>
                    <div className='small-12 medium-4 large-4 columns end'>
                        <img src='http://placehold.it/300'></img>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
