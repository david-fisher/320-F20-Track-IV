import React, { Component } from 'react';
import {
    Box,
    Typography,
    Grid,
} from '@material-ui/core';
import ScenarioCard from '../Components/ScenarioCard'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    box: {
        marginTop: theme.spacing(1),
        display: 'flex',

        flexDirection: 'column',

    },
    grid: {
        justify: 'flex-start',
        flexGrow: 0,
        flexWrap: 'nowrap'
    }

}));

//Hardcoded data
const sampleScenarios = [
    { scenarioTitle: "Draft 1", className: "CS311", id: '1', draft: false, open: false },
    { scenarioTitle: "Draft 2", className: "CS311", id: '2', draft: false, open: false },
    { scenarioTitle: "Draft 3", className: "CS311", id: '3', draft: false, open: false },
    { scenarioTitle: "Draft 4", className: "CS311", id: '4', draft: false, open: false },
    { scenarioTitle: "Open 1", className: "CS320", id: '5', draft: true, open: true },
    { scenarioTitle: "Open 2", className: "CS320", id: '6', draft: true, open: true },
    { scenarioTitle: "Open 3", className: "CS320", id: '8', draft: true, open: true },
    { scenarioTitle: "Closed 1", className: "CS589", id: '7', draft: true, open: false },

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


    return (
        <Box
            className={classes.box}
            component="main"
            maxWidth="lg"
        >
            <Typography variant="h4">
                Draft Scenarios:
            </Typography>
            <Grid
                className={classes.container}
                container
                spacing={2}
                direction="row"
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
                className={classes.container}


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

            >
                {closedScenarios}
            </Grid>
        </Box>
    );

}

export default Dashboard;