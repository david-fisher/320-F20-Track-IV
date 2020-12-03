import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  }
}));



function ScenarioCard(props) {
  const classes = useStyles();
  const data = props.data;
  // console.log("PROPS: " + JSON.stringify(data))
  const { id, name, due_date, description, additional_data, status } = data;

  // const [data, setData] = useState(props.data);

  const handleChange = (event) => {
    console.log(data.status);
    data.status = event.target.value;
    console.log(data.status);
    props.dispatch({
      type: 'UPDATE_SCENARIO',
      payload: { ...scenarioData }
    });

  };

  const scenarioData = {
    "id": id,
    "name": name,
    "due_date": due_date,
    "description": description,
    "additional_data": additional_data,
    "status": status,
  }

  function updateScenarioData() {

    // console.log("scenarioData in ScenarioCard: " + JSON.stringify(scenarioData));

    props.dispatch({
      type: 'UPDATE_SCENARIO',
      payload: { ...scenarioData }
    });


  }



  return (
    <Grid
      key={id}
      item
      xs
    >
      <Card raised='true' className={classes.root}>
        <CardActionArea component={Link} to={{
          pathname: "/new-scenario/" + id,
          scenarioData: data
        }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* THIS SENDS THE DATA FROM THE PROPER SCENARIO TO THE INTRO-HUB. SAME GOES WITH RESULTS.
          MAKE SURE THAT THE DATA IS PROPERLY HANDLED / PASSED DOWN IN THE FUTURE PAGES. */}

          {/* NEED: To make the Scenario Data in the redux store update with the correct metadata when Edit is clicked */}
          <Button size="small" color="primary" onClick={updateScenarioData} component={Link} to={{
            pathname: "/introduction-hub/" + id,
            scenarioData: data
          }}>
            Edit
          </Button>
          <Button size="small" color="primary">
            Delete
          </Button>

          <Button size="small" color="primary" component={Link} to={{
            pathname: "/data/" + id,
            scenarioData: data
          }}>
            Data
          </Button>
          <FormControl className={classes.formControl}>
            <NativeSelect
              className={classes.selectEmpty}
              // value={data.status}
              onChange={handleChange}
              inputProps={status}
            >
              {/* value={data.status} */}
              <option value={status} disabled>
              </option>
              <option value={'DRAFT'}>Draft</option>
              <option value={'OPEN'}>Open</option>
              <option value={'CLOSED'}>Closed</option>
            </NativeSelect>
            <FormHelperText>Condition</FormHelperText>
          </FormControl>
        </CardActions>
      </Card>
    </Grid>
  );
}

const mapStateToProps = state => {
  // console.log("STATE IN INTRO MAP TO PROPS: " + state.id)
  // return { scenarios: state.scenarios, token: state.token }
  const { items } = state
  console.log("STATE IN mapStateToProps: " + JSON.stringify(state))
  return { items: state.scenarioData }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScenarioCard);