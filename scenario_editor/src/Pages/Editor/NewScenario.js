import React, { Component, useState, useEffect } from 'react';
import './NewScenario.css';
import Nav from '../../Components/Nav'
import { Link, useHistory } from 'react-router-dom';
//import Button from 'react-bootstrap/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


function NewScenario(props) {

  function addScenario() {

    const createdScenario = {
      "id": 1,
      "name": name,
      "due_date": selectedDate,
      "description": description,
      "additional_data": additionalData,
      "status": status,
    }
    props.dispatch({
      type: 'UPDATE_SCENARIO',
      payload: { ...createdScenario }
    });
  }

  const newScenario = {
    "id": 1,
    "name": '',
    "due_date": '2020-12-01',
    "description": '',
    "additional_data": '',
    "status": 'DRAFT',
    // "intro": '',
    // "task": '',
    // 'init_reflection:': '',
    // 'init_action': ''
  }

  // Might be useful later when editing scenarios, passing the ID and other stuff along as props, etc.
  // const [scenarioID, setScenarioID] = useState();

  const [name, setName] = useState(newScenario.name);
  const [description, setDescription] = useState(newScenario.description);
  const [additionalData, setAdditionalData] = useState(newScenario.additional_data);
  const [status, setStatus] = useState(newScenario.status);
  const [selectedDate, setSelectedDate] = useState(newScenario.due_date);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(1),
      marginTop: theme.spacing(4),
      marginLeft: theme.spacing(4),
      width: '100ch',
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <Nav />
      <form className={classes.root} noValidate autoComplete="off">
        <h1>  Create New Scenario</h1>
        {/* <b1>  Scenario Title:</b1> */}
        <TextField
          id="title"
          label="Scenario Title"
          variant="outlined"
          placeholder='Enter scenario title here'
          style={{
            width: '50ch'
          }}
          onChange={e => setName(e.target.value)}
          margin="dense"
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          multiline
          fullWidth
          id="description"
          label="Scenario Description"
          variant="outlined"
          placeholder='Enter scenario description here'
          onChange={e => setDescription(e.target.value)}
          style={{
            marginTop: 75
          }}
          rows={10}
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </form>
      <div className={classes.root}>
        <div>
          <Button
            component={Link} to="/user-agreement"
            variant="contained"
            color="primary"
            href="#contained-buttons"
            size='medium'
            alignItems='right'
            style={{
              //marginTop: 10,
              //marginRight: 100,
              marginLeft: 1100,
              //marginBottom: 100
            }}
            onClick={addScenario}
          >
            Submit
          </Button>
        </div>

      </div>
    </div>

  );
};

const mapStateToProps = state => {
  return { scenarios: state.scenarios, token: state.token }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewScenario);
