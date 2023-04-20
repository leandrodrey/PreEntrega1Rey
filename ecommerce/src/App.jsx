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
        ]

    return (
        <div className="App">
            <header className="App-header">
                <NavBar
                    title="Overlord Store"
                    menuItems={menuItems}
                />
            </header>
        </div>
    );
}

export default App;
