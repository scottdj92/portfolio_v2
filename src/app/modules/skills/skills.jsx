import React from 'react';

import experience from './fixtures/skills';

class Skills extends React.Component {
    renderSkills(section, key) {
        return (
            <div className='skills__container__skill column is-3' key={key}>
                <h4>{section.section}</h4>
                <ul className='skills-list'>
                    {this.renderDrillDownSkills(section.skills)}
                </ul>
            </div>
        );
    }

    renderDrillDownSkills(skill) {
        return skill.map( (type, index) => {
            return (
                <li key={index}>
                    <span>{type}</span>
                </li>
            );
        });
    }

    maybeRenderExperience() {
        return experience.map( (section, index) => {
            return this.renderSkills(section, index);
        });
    }

    render() {
        return (
            <section className='skills'>
                <div className='skills__container'>
                    <h1>I like to code:</h1>
                    <div className='columns'>
                        {this.maybeRenderExperience()}
                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;
