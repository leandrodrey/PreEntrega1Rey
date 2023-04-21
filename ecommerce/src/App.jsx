import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { StyledEngineProvider } from '@mui/material/styles';
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
        <StyledEngineProvider injectFirst>
            <header>
                <NavBar
                    title="Overlord Store"
                    logo="Overlord Store" //TODO: Set a logo image
                    menuItems={menuItems}
                />
            </header>
        </StyledEngineProvider>
    );
}

export default App;
