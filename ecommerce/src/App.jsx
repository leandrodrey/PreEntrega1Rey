import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import NavBar from "./components/NavBar/NavBar";
import Card from "@mui/material/Card";
import ImgMediaCard from "./components/Card/Card";
import ItemListContainer from "./components/ItemListContainer";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#FFFFFF',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000000',
        },
    },
});

const siteInfo = {
    "name":"Overlord Store",
    "logo": "Overlord Store", //TODO: Set a logo image
    "greetingsMessage": "Bienvenidos"
};

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
                        title={siteInfo.name}
                        logo={siteInfo.logo}
                        menuItems={menuItems}
                    />
                </header>
                <ItemListContainer greetings={siteInfo.greetingsMessage} />
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default App;
