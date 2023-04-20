import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import NavBar from "./components/NavBar/NavBar";

function App() {

    const menuItems = [
            {
                name: 'Home',
                link: 'text.com'
            },
            {
                name: 'Store',
                link: 'text.com'
            },
            {
                name: 'About Us',
                link: 'text.com'
            },
            {
                name: 'Contact Us',
                link: 'text.com'
            }
        ];

    return (
        <React.Fragment>
            <header>
                <NavBar
                    logo="Overlord Store" //TODO: Set a logo image
                    menuItems={menuItems}
                />
            </header>

            <div id="index-banner" className="parallax-container">
                <div className="section no-pad-bot">
                    <div className="container">
                        <br/><br/>
                        <h1 className="header center teal-text text-lighten-2">Parallax Template</h1>
                        <div className="row center">
                            <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
                        </div>
                        <div className="row center">
                            <a href="http://materializecss.com/getting-started.html" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Get Started</a>
                        </div>
                        <br/><br/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default App;
