import React from 'react';

class SelectedWork extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderSelectedWorks() {
        //TODO: create a fixture that I can edit to show off selected works.
        console.log('renderSelectedWorks');
    }

    render() {
        return (
            <section className='selected-work'>
                <div className='row'>
                    <h3 className='selected-work__title'>A few of my selected works</h3>
                    <div className='skills-container__js'>
                        {this.renderSelectedWorks()}
                    </div>
                </div>
            </section>
        );
    }
}

export default SelectedWork;
