import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='contact row section'>
                <h1 className='contact__title'>Feel free to contact me anytime!</h1>
                <form>
                    <div className='contact__name row'>
                        <div className='col-sm-12 col-md-6 col-lg-6'>
                            <label for='contact-name'>Your Name</label>
                            <input type='text' name='contact-name' placeholder='Your Name Here'></input>
                        </div>
                    </div>
                    <div className='contact__message row'>
                        <div className='col-sm-12 col-md-8 col-lg-8'>
                            <label for='comment'>Your Comments</label>
                            <textarea name='comment' placeholder='Contact Me'></textarea>
                        </div>
                    </div>
                    <input className='contact__submit' type='button' type='submit' value='submit'></input>
                </form>
            </section>
        );
    }
}

export default Contact;
