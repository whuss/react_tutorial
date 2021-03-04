import { Button, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import React, { useState } from "react";

const Counter: React.FC = () => {
    const [counter, setCounter] = useState<number>(0);

    return (
        <>
            <Grid item style={{ margin: 20 }}>
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

export const Example: React.FC = () => {
    return (
        <>
            <Counter />
            <Counter />
        </>
    );
};
