import React from 'react';

class Skills extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='skills row'>
                <div className='skills__container'>
                    <h1>I am proficient in the following skills:</h1>
                    <div className='skills__container__skill col-sm-12 col-md-3 col-lg-3'>
                        <h4>JavaScript</h4>
                        <ul className='nav-list'>
                            <li>
                                <span>React</span>
                            </li>
                            <li>
                                <span>Angular 1</span>
                            </li>
                            <li>
                                <span>Backbone.js/Marionette.js</span>
                            </li>
                        </ul>
                    </div>
                    <div className='skills__container__skill col-sm-12 col-md-3 col-lg-3'>
                        <h4>HTML/CSS</h4>
                        <ul className='nav-list'>
                            <li>
                                <span>Semantic HTML and Sass/SCSS/LESS</span>
                            </li>
                            <li>
                                <span>Best Practices</span>
                            </li>
                            <li>
                                <span>HTML5 Tags/CSS3 Properties</span>
                            </li>
                        </ul>
                    </div>
                    <div className='skills__container__skill col-sm-12 col-md-3 col-lg-3'>
                        <h4>Agile Tools</h4>
                        <ul className='nav-list'>
                            <li>
                                <span>Atlassian JIRA, VersionOne, HP Quality Center</span>
                            </li>
                            <li>
                                <span></span>
                            </li>
                            <li>
                                <span>Scrum/Sprint Meetings</span>
                            </li>
                        </ul>
                    </div>
                    <div className='skills__container__skill col-sm-12 col-md-3 col-lg-2'>
                        <h4>Development Tools</h4>
                        <ul className='nav-list'>
                            <li>
                                <span>Gulp/Webpack/Grunt</span>
                            </li>
                            <li>
                                <span>Git/Stash/BitBucket</span>
                            </li>
                            <li>
                                <span>Heroku</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;
