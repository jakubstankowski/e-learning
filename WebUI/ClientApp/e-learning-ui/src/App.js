import './App.css';
import Button from '@material-ui/core/Button';
import Header from "./components/layout/Header";
import React from "react";
import Container from "@material-ui/core/Container";


function App() {
    return (
        <div>
            <Header/>
            <Container maxWidth="sm">
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
            </Container>
        </div>
    );
}

export default App;
