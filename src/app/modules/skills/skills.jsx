import React from 'react';

class Skills extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='skills'>
                <div className='skills__container row'>
                    <h1>I like to code:</h1>
                    <div className='skills__container__skill small-3 medium-3 columns'>
                        <h4>JavaScript</h4>
                        <ul className='skills-list'>
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
                    <div className='skills__container__skill small-3 medium-3 columns'>
                        <h4>HTML/CSS</h4>
                        <ul className='skills-list'>
                            <li>
                                <span>Semantic HTML and Sass/SCSS/LESS</span>
                            </li>
                            <li>
                                <span>CSS Frameworks</span>
                            </li>
                            <li>
                                <span>HTML5 Tags/CSS3 Properties</span>
                            </li>
                        </ul>
                    </div>
                    <div className='skills__container__skill small-3 medium-3 columns'>
                        <h4>Development Tools</h4>
                        <ul className='skills-list'>
                            <li>
                                <span>Gulp/Webpack/Grunt</span>
                            </li>
                            <li>
                                <span>GitHub/Stash/BitBucket</span>
                            </li>
                            <li>
                                <span>Heroku</span>
                            </li>
                        </ul>
                    </div>
                    <div className='skills__container__skill small-2 medium-3 columns'>
                        <h4>Other Skills</h4>
                        <ul className='skills-list'>
                            <li>
                                <span>Atlassian JIRA</span>
                            </li>
                            <li>
                                <span>Adobe Creative Suite</span>
                            </li>
                            <li>
                                <span>Windows 10, OS X, & Linux</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;
