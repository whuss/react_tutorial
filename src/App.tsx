import React, { useState } from "react";
import logo from "./logo.svg";
import { Button, TextField } from "@material-ui/core";
import "./App.css";

const style = { background: "green", padding: 10, marginBotton: 10 };

function App() {
    const [counter, setCounter] = useState(0);

    const increaseCounter = () => {
        setCounter(counter + 1);
    };

    const decreaseCounter = () => {
        setCounter(counter - 1);
    };

    return (
        <div className="App">
            <header className="App-header">
                <div style={style}>Counter: {counter}</div>
                <Button
                    onClick={increaseCounter}
                    variant="contained"
                    color="secondary"
                >
                    Increase Counter
                </Button>
                <Button
                    onClick={decreaseCounter}
                    variant="contained"
                    color="primary"
                >
                    Decrease Counter
                </Button>
            </header>
        </div>
    );
}

export default App;
