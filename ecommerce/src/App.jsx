import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from "./components/NavBar/NavBar";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

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

function App() {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <header>
                    <NavBar
                        title="Overlord Store"
                        logo="Overlord Store" //TODO: Set a logo image
                        menuItems={menuItems}
                    />
                </header>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default App;
