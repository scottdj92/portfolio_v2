import React from 'react';

class SelectedWork extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section className='skills-container row'>
                <h3>A Breakdown:</h3>
                <div className='skills-container__js'>
                    <h4>JavaScript and Its Popular Frameworks</h4>
                    <ul>
                        <li>React</li>
                        <li>Angular 1 and 2</li>
                        <li>Backbone.js/Marionette.js</li>
                    </ul>
                </div>
                <div className='skills-container__agile'>
                    <h4>Agile Methodologies</h4>
                    <ul>
                        <li>Scrum Meetings</li>
                        <li>Working With Deadlines</li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default SelectedWork;
