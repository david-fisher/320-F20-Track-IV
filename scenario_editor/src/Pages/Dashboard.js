import React, { Component, useEffect, useState } from 'react';
import {
    Container,
    Typography,
    Grid,
} from '@material-ui/core';
import ScenarioCard from '../Components/ScenarioCard'
import { makeStyles } from '@material-ui/core/styles';
import Nav from '../Components/Nav';
import { connect } from 'react-redux';
import NavDashboard from '../Components/NavDashboard';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from 'react-router-dom';
import { universalPost, universalFetch, universalDelete } from '../Components/Calls'



// Instead of using .css files, we stylize our stuff using "useStyles" and "makeStyles", functions of materialUI
// Very similar to .css files, just slightly different format.
// To see how they are assigned to differnt elements on this page, look for "className={classes.someTextHere}"
const useStyles = makeStyles((theme) => ({
    page: {
        height: '100%',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: 'white',
    },

    container: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'row',

    },
    grid: {
        justify: 'flex-start',
        flexGrow: 0,
        flexWrap: 'nowrap',
        flexDirection: 'column'
    },
    div: {
        // display:'inline-block'
        margin: 10
    }

}));

// async function getScenariosFromServer(){
//   const headers = {
//     'Authorization': `Bearer ${this.props.token}`,
//     'Accept': 'application/json'
//   }
//   let res = await axios.get(`/api/v1/dashboard`);
//   debugger;
//   return res.data;

// }

// let TOKEN = "abcdefghijklmnopqrstuvwxyz";

// async function getScenariosFromServer() {
//     console.log("In getScenariosfromserver")
//     const headers = {
//         'Authorization': `Bearer ${TOKEN}`,
//         'Accept': 'application/json'
//     }

//     const response = universalFetch('/api/v1/dashboard', headers)

//     // Attempt to change the state in the store to the response from the universal API call
//     // this.props.dispatch({
//     //     type: 'LOAD_SCENARIOS',
//     //     payload: { response }
//     // });

//     console.log("THIS IS THE RESPONSE " + response)
//     return response
// }



class ScenarioGrid extends Component {


    constructor(props) {
        super(props);

        console.log(this.props)

        this.scenarios = this.props.scenarios || {};

        let draftScenarios = this.scenarios.drafts;
        let closedScenarios = this.scenarios.closed;
        let openScenarios = this.scenarios.open;
        // let draftScenarios = this.scenarios.filter(data => (data.status === false));
        // let openScenarios = this.scenarios.filter(data => (data.draft === true && data.open === true));
        // let closedScenarios = this.scenarios.filter(data => (data.draft === true && data.open === false));
        this.state = {
            draft: draftScenarios || [],
            open: openScenarios || [],
            closed: closedScenarios || []
        };
    }
    componentWillReceiveProps(nextProps) {
        this.scenarios = nextProps.scenarios || {};
        if (!this.scenarios) {
            return;
        }
        // getScenariosFromServer();
        let draftScenarios = this.scenarios.drafts;
        let closedScenarios = this.scenarios.closed;
        let openScenarios = this.scenarios.open;
        // let draftScenarios = this.scenarios.filter(data => (data.status === false));
        // let openScenarios = this.scenarios.filter(data => (data.draft === true && data.open === true));
        // let closedScenarios = this.scenarios.filter(data => (data.draft === true && data.open === false));
        this.setState({
            draft: draftScenarios || [{ "id": 1, "name": 'title1', "due_date": '12-12-2020', "description": 'desc', "additional_data": '', "status": 'DRAFT' }],
            open: openScenarios || [{ "id": 2, "name": 'title2', "due_date": '12-12-2020', "description": 'desc', "additional_data": 'does this show', "status": 'OPEN' }],
            closed: closedScenarios || [{ "id": 3, "name": 'title3', "due_date": '12-12-2020', "description": 'desc', "additional_data": '', "status": 'CLOSED' }]
        });
    }



    // Potentially don't need vars draft, open, and closed anymore
    render() {
        let draftScenarios = this.state.draft.map(data =>
            <ScenarioCard data={data} key={data.id} draft={data.draft} open={data.open} closed={data.closed} />
        );
        let openScenarios = this.state.open.map(data =>
            <ScenarioCard data={data} key={data.id} draft={data.draft} open={data.open} closed={data.closed} />
        );
        let closedScenarios = this.state.closed.map(data =>
            <ScenarioCard data={data} key={data.id} draft={data.draft} open={data.open} closed={data.closed} />
        );

        // This return statement creates and organizes the UI and data above, all inside the ScenarioGrid function
        // This, however, is not actually rendered. That happens at the bottom of this class
        return (
            <Container
                style={{
                    display: 'flex',
                    flexDirection: 'row',

                }}
                component="main"
                maxWidth="lg"
            >
                <div style={{
                    // display:'inline-block'
                    margin: 10
                }}>
                    <Typography variant="h4">
                        Draft Scenarios:
              </Typography>
                    <Grid
                        style={{
                            justify: 'flex-start',
                            flexGrow: 0,
                            flexWrap: 'nowrap',
                            flexDirection: 'column'
                        }}
                        container
                        spacing={2}
                        direction="row"
                    >
                        {/* "draftScenarios", below in brackets, acts like a component
                  (not sure if it is or isn't one, beyond my level of understanding).
                  But since it is currently comprised of a bunch of ScenarioCards that were
                  assigned to it in our above code, it displays all the ScenarioCards inside "draftScenarios"
                  and uses the styles found in the ScenarioCard.js file
                  */}
                        {draftScenarios}
                    </Grid>
                </div>
                <div style={{
                    // display:'inline-block'
                    margin: 10
                }}>
                    <Typography variant="h4">
                        Open Scenarios:
              </Typography>
                    <Grid
                        container
                        spacing={2}
                        direction="row"
                        style={{
                            justify: 'flex-start',
                            flexGrow: 0,
                            flexWrap: 'nowrap',
                            flexDirection: 'column'
                        }}
                    >
                        {/* Same as draftScenarios above */}
                        {openScenarios}
                    </Grid>
                </div>
                <div style={{
                    // display:'inline-block'
                    margin: 10
                }}>
                    <Typography variant="h4">
                        Closed Scenarios:
                    </Typography>
                    <Grid
                        style={{
                            justify: 'flex-start',
                            flexGrow: 0,
                            flexWrap: 'nowrap',
                            flexDirection: 'column'
                        }}
                        container
                        spacing={2}
                        direction="row"
                    >
                        {/* Same as draftScenarios above */}
                        {closedScenarios}
                    </Grid>

                </div>
                {/* <div>
                    <Button variant="contained" color="primary" aria-label="contained primary button group">
                        <Link to="/new-scenario">
                            Create a New Scenario
                        </Link>
                    </Button>{' '}
                </div> */}
            </Container>

        );
    }
}

const mapStateToProps = state => {
    return { scenarios: state.scenarios, token: state.token }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

function Dashboard() {
    // constructor(props) {
    //     super(props);
    //     this.state = { data: null }
    // }
    // async componentDidMount() {
    //     const headers = {
    //         'Authorization': `Bearer ${this.props.token}`,
    //         'Accept': 'application/json'
    //     }
    //     let res = await axios.get(`/api/v1/dashboard`, { headers: headers });
    //     // debugger;
    //     this.setState({ data: res.data });
    // }

    // const [fetchIntroductionResponse, setFetchScenarioResponse] = useState({
    //     loading: false,
    //     error: null,
    //     data: null
    // })

    // useEffect(() => {
    //     universalFetch(
    //         setFetchScenarioResponse,
    //         `/api/v1/dashboard`,
    //         // { 0: "body text" },
    //         (resp) => { console.log(resp) },
    //         (err) => { console.log(err) },
    //         {
    //             headers: {
    //                 "accept": "application/json",
    //             }
    //         }
    //     )
    //     return () => {
    //         // What goes here? do we return something
    //     }
    // }, [])


    return (
        <div style={{
            height: '100%',
            width: '100%',
            minHeight: '100vh',
            backgroundColor: 'white',
        }}>

            <Nav />

            <ScenarioGrid />


        </div>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

