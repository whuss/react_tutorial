import { Container, Grid, Paper } from "@material-ui/core";
import React from "react";
import "./App.css";
import { Example } from "./CounterExample";

const App: React.FC = () => {
    return (
        <Container style={{ marginTop: 20 }} maxWidth="xs">
            <Grid container alignItems="center">
                <Paper style={{ padding: 10 }}>
                    <Example />
                </Paper>
            </Grid>
        </Container>
    );
};

export default App;
