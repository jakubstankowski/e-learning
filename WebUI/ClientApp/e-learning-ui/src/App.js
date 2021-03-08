import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Header from "../components/layout/Header";


function App() {
    return (
        <div>
            <Header/>
            <Button variant="contained" color="primary">
                Hello World
            </Button>
        </div>
    );
}

export default App;
