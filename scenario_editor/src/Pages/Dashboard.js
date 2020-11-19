import React, { Component } from 'react';
import {
    Container,
    Typography,
    Grid,
} from '@material-ui/core';
import ScenarioCard from '../Components/ScenarioCard'
import { makeStyles } from '@material-ui/core/styles';
import NavHome from '../Components/NavHome';
import { connect } from 'react-redux';
import NavDashboard from '../Components/NavDashboard';
import axios from 'axios';



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

async function getScenariosFromServer(){
  const headers = {
    'Authorization': `Bearer ${this.props.token}`,
    'Accept': 'application/json'
  }
  let res = await axios.get(`/api/v1/dashboard`);
  debugger;
  return res.data;
}

//Hardcoded data
const sampleScenarios = [
    { scenarioTitle: "Draft 1", className: "CS311", id: '1', draft: false, open: false },
    { scenarioTitle: "Draft 2", className: "CS311", id: '2', draft: false, open: false },
    { scenarioTitle: "Draft 3", className: "CS311", id: '3', draft: false, open: false },
    { scenarioTitle: "What if this draft title is super duper long? How long can it get? Idk we'll see ", className: "CS311", id: '4', draft: false, open: false },
    { scenarioTitle: "Open 1", className: "CS320", id: '5', draft: true, open: true },
    { scenarioTitle: "This is just a sample mid length title", className: "CS320", id: '6', draft: true, open: true },
    { scenarioTitle: "Open 3", className: "CS320", id: '8', draft: true, open: true },
    { scenarioTitle: "Closed 1", className: "CS589", id: '7', draft: true, open: false },

];

class ScenarioGrid extends Component {
    constructor(props){
      super(props);
      this.scenarios = this.props.scenarios || {};

      let draftScenarios = this.scenarios.drafts;
      let closedScenarios = this.scenarios.closed;
      let openScenarios = this.scenarios.open;
      // let draftScenarios = this.scenarios.filter(data => (data.status === false));
      // let openScenarios = this.scenarios.filter(data => (data.draft === true && data.open === true));
      // let closedScenarios = this.scenarios.filter(data => (data.draft === true && data.open === false));
      this.state = {draft: draftScenarios || [],
                  open: openScenarios || [],
                  closed: closedScenarios || []
                };
    }
    componentWillReceiveProps(nextProps){
      this.scenarios = nextProps.scenarios || {};
      if(!this.scenarios){
        return;
      }

      let draftScenarios = this.scenarios.drafts;
      let closedScenarios = this.scenarios.closed;
      let openScenarios = this.scenarios.open;
      // let draftScenarios = this.scenarios.filter(data => (data.status === false));
      // let openScenarios = this.scenarios.filter(data => (data.draft === true && data.open === true));
      // let closedScenarios = this.scenarios.filter(data => (data.draft === true && data.open === false));
      this.setState({draft: draftScenarios || [],
                  open: openScenarios || [],
                  closed: closedScenarios || []
                });
    }

    // This is just a variable created to access the styles made at the top of our page inside the
    // ScenarioGrid() function
    // const classes = useStyles();


    // Currently, this creates datas trucutres that filter out the hardcoded data above into the 3 different
    // types of scenarios based on the parameters in .filter()
    // let scenarios = getScenariosFromServer();

    // Since the 3 scenario variables above currently hold the information of the scenarios assigned to them,
    // the 3 snippets of code below act, in a way, like a loop through each scenario group's scenario data
    // (if that made sense...)
    // If you hover over "data" you can see what values are referenced by "data" (each individual scenario's data)
    // What this finally does is takes each scenario's data and creates a ScenarioCard component using that data.
    render(){
      let draftScenarios = this.state.draft.map(data =>
          <ScenarioCard data={data} key={data.id} draft={data.draft} open={data.open} open={data.closed} />
      );
      let openScenarios = this.state.open.map(data =>
          <ScenarioCard data={data} key={data.id} draft={data.draft} open={data.open} open={data.closed} />
      );
      let closedScenarios = this.state.closed.map(data =>
          <ScenarioCard data={data} key={data.id} draft={data.draft} open={data.open} open={data.closed} />
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

// THIS is where we actually output our stuff.
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {data: null}
  }
  async componentDidMount(){
    const headers = {
      'Authorization': `Bearer ${this.props.token}`,
      'Accept': 'application/json'
    }
    let res = await axios.get(`/api/v1/dashboard`, {headers: headers});
    // debugger;
    this.setState({data: res.data});
  }
  render() {
    return (
      <div style={{
          height: '100%',
          width: '100%',
          minHeight: '100vh',
          backgroundColor: 'white',
              }}>
          {/* You can follow the NavHome component (imported at the top) to see how it was made */}
          {/* <NavHome /> */}

          {/* Interchange between NavHome and NavDashboard to see how they vary, will probably use NavHome*/}
          <NavDashboard />

          <ScenarioGrid scenarios={this.state.data}/>

          {/* Uncomment the line below to see what happens when you call it again */}
          {/* <ScenarioGrid /> */}

      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
// export default function Dashboard() {
//     // Again, we use some of the styles created above
//     const classes = useStyles();
//
//     // We return a UI that utilizes everything we made above as well as any other components, such as
//     // MaterialUI components like Grids, or our custom ScenarioCard component.
//     // We can pretty much call the components in any order we want. They are just callable objects.
//     // We can even re-call the same components and they will just stack up on each other when in the browser.
//     return (
//         <div className={classes.page}>
//             {/* You can follow the NavHome component (imported at the top) to see how it was made */}
//             {/* <NavHome /> */}
//
//             {/* Interchange between NavHome and NavDashboard to see how they vary, will probably use NavHome*/}
//             <NavDashboard />
//
//             <ScenarioGrid />
//
//             {/* Uncomment the line below to see what happens when you call it again */}
//             {/* <ScenarioGrid /> */}
//
//         </div>
//     );
// }
