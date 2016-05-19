import React from 'react';
import {render} from 'react-dom';

//import Sass
//import './index.scss';

//import components
import MainNav from './modules/main-nav/main-nav.jsx';
import Header from './modules/header/header.jsx';
import SelectedWork from './modules/selected-work/selected-work.jsx';
import Contact from './modules/contact/contact.jsx';
import Footer from './modules/footer/footer.jsx';

class App extends React.Component {
    render() {
        return(
            <div id = 'app'>
                <MainNav/>
                <Header/>
                <SelectedWork/>
                <Contact/>
                <Footer/>
            </div>
         );

    }
}

render(<App/>, document.getElementById('app'));
