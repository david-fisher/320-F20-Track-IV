import React, { Component } from 'react';
import {
    Container,
    Typography,
    Grid,
} from '@material-ui/core';
import ScenarioCard from '../Components/ScenarioCard'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: '',
    },

}));

const sampleScenarios = [
    { scenarioTitle: "Draft 1", className: "CS311", id: '1', draft: false, open: false },
    { scenarioTitle: "Open 2", className: "CS320", id: '2', draft: true, open: true },
    { scenarioTitle: "Closed 3", className: "CS589", id: '3', draft: true, open: false },

];

function Dashboard() {

    //TODO change when Scenario Objects are defined
    let draftScenarios = sampleScenarios.filter(data => (data.draft == false));
    let openScenarios = sampleScenarios.filter(data => (data.draft == true && data.open == true));
    let closedScenarios = sampleScenarios.filter(data => (data.draft == true && data.open == false));

    draftScenarios = draftScenarios.map(data =>
        <ScenarioCard data={data} key={data.id} draft={data.draft} open={data.open} />
    );
    openScenarios = openScenarios.map(data =>
        <ScenarioCard data={data} key={data.id} draft={data.draft} open={data.open} />
    );
    closedScenarios = closedScenarios.map(data =>
        <ScenarioCard data={data} key={data.id} draft={data.draft} open={data.open} />
    );

    const classes = useStyles();
    //Hardcoded data

    return (
        <Container
            className={classes.container}
            component="main"
            maxWidth="lg"
        >
            <Typography variant="h4">
                Draft Scenarios:
            </Typography>
            <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="stretch"
            >
                {draftScenarios}
            </Grid>
            <Typography variant="h4">
                Open Scenarios:
            </Typography>
            <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="stretch"
            >
                {openScenarios}
            </Grid>
            <Typography variant="h4">
                Closed Scenarios:
            </Typography>
            <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="stretch"
            >
                {closedScenarios}
            </Grid>
        </Container>
    );

}

export default Dashboard;