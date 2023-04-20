import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import NavBar from "./components/NavBar/NavBar";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <NavBar />
            </header>
        </div>
    );
}

export default App;
