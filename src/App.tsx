import React, { useState } from "react";
import { Button } from "@material-ui/core";
import "./App.css";

export const style = { background: "green", padding: 10, marginBotton: 10 };

type CounterProps = {
    counter: number;
    increaseCounter: () => void;
};
const Counter: React.FC<CounterProps> = (props) => {
    return (
        <>
            <Button onClick={props.increaseCounter} variant="contained" color="secondary">
                Increase Counter
            </Button>
        </>
    );
};

const App: React.FC = () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    return (
        <>
            <Counter counter={counter1} increaseCounter={() => setCounter1(counter1 + 1)} />
            <div>Counter 1: {counter1}</div>
            <Counter counter={counter2} increaseCounter={() => setCounter2(counter2 + 1)} />
        </>
    );
};

export default App;
