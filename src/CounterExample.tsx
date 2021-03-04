import React, { useEffect, useState } from "react";
import { Button, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useCounter = (title?: string) => {
    const [counter, setCounter] = useState<number>(0);

    const Counter: React.FC = () => {
        return (
            <>
                <Grid item style={{ margin: 20 }}>
                    {title && <span style={{ marginRight: 10 }}>{title}</span>}
                    <Button onClick={() => setCounter(counter - 1)} variant="contained">
                        <RemoveIcon />
                    </Button>
                    <span style={{ padding: 10 }}>{counter}</span>
                    <Button onClick={() => setCounter(counter + 1)} variant="contained">
                        <AddIcon />
                    </Button>
                </Grid>
            </>
        );
    };

    return [counter, Counter] as const;
};

type CounterProps = {
    counter: number;
    setCounter: (value: number) => void;
};

const Counter: React.FC<CounterProps> = ({ counter, setCounter }) => {
    const [color, setColor] = useState<string>("black");

    useEffect(() => {
        setColor("red");
        const timer = setTimeout(() => {
            setColor("black");
        }, 250);

        return () => {
            clearTimeout(timer);
        };
    }, [counter]);

    return (
        <>
            <Grid item style={{ margin: 20 }}>
                <Button onClick={() => setCounter(counter - 1)} variant="contained">
                    <RemoveIcon />
                </Button>
                <span style={{ padding: 10, color: color }}>{counter}</span>
                <Button onClick={() => setCounter(counter + 1)} variant="contained">
                    <AddIcon />
                </Button>
            </Grid>
        </>
    );
};

export const Example: React.FC = () => {
    const [values, setValues] = useState<number[]>([0]);

    const resetCounters = () => {
        setValues(values.map((value) => 0));
    };

    const addCounter = () => {
        const newValues = [...values];
        newValues.push(0);
        setValues(newValues);
    };

    const removeCounter = () => {
        const newValues = [...values];
        newValues.splice(values.length - 1);
        setValues(newValues);
    };

    const createSetter = (index: number) => {
        const setCounter = (value: number): void => {
            const newValues = [...values];
            newValues[index] = value;
            setValues(newValues);
        };

        return setCounter;
    };

    return (
        <>
            <Button color="primary" variant="contained" onClick={addCounter}>
                Add
            </Button>{" "}
            <Button color="primary" variant="contained" onClick={removeCounter}>
                Remove
            </Button>{" "}
            <Button color="primary" variant="contained" onClick={resetCounters}>
                Reset
            </Button>{" "}
            {values.map((value, index) => (
                <Counter counter={value} setCounter={createSetter(index)} key={index} />
            ))}
            <div>Total sum: {values.reduce((x, y) => x + y, 0)}</div>
        </>
    );
};
