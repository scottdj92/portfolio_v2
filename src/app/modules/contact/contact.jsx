import React from 'react';

//import scss
import './contact.scss';

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='contact'>
                <h1>Contact section</h1>
                <form>
                    <label for='contact-name'></label>
                    <input type='text' name='contact-name' placeholder='Your Name Here'></input>
                    <label for='comment'></label>
                    <textarea name='comment' placeholder='Contact Me'></textarea>
                    <input type='button' type='submit' value='submit'></input>
                </form>
            </section>
        );
    }
}

export default Contact;
