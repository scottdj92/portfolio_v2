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
                    <input type='textarea' placeholder='Contact Me'></input>
                </form>
            </section>
        );
    }
}

export default Contact;
