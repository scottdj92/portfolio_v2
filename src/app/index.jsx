import React from 'react';
import {render} from 'react-dom';

import './img/favicon.ico';

//import Sass
import './_main.scss';

//import components
// import MainNav from './modules/main-nav/main-nav.jsx';
import Header from './modules/header/header.jsx';
// import About from './modules/about/about.jsx';
import Skills from './modules/skills/skills.jsx';
import SelectedWork from './modules/selected-work/selected-work.jsx';
import Reactions from './modules/reactions/reactions.jsx';
import Contact from './modules/contact/contact.jsx';
import Footer from './modules/footer/footer.jsx';

class App extends React.Component {
    render() {
        return(
            <div className='main'>
                {/* <MainNav/> */}
                <Header/>
                <SelectedWork/>
                <Reactions/>
                <Skills/>
                <Contact/>
                <Footer/>
            </div>
         );
    }
}

render(<App/>, document.getElementById('app'));
