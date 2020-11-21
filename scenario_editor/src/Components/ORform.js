
import React, { Component, useState, useEffect } from 'react';
import Input from '@material-ui/core/Input';
import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import { TextField } from "@material-ui/core";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from "material-ui/RaisedButton";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

export default class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      value: '',
      scenarioID: 2,
      contents: '',
      scenario_title: localStorage.getItem("RS_SCENARIO__title"),
      scenario_desc: localStorage.getItem("RS_SCENARIO__description"),
      scenario_ua: localStorage.getItem("RS_SCENARIO__user_agreement"),
    }
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.handleEditorSubmit = this.handleEditorSubmit.bind(this);
  }
  handleEditorChange(event) {
    this.setState({contents: event})
  }

  handleEditorSubmit(event) {
    // alert("Content has been submitted")
    const headers = {
      'Authorization': `Bearer ${this.props.token}`,
      'Accept': 'application/json'
    }
    event.preventDefault();
    axios.post(`http://4acf3d2e295e.ngrok.io/api/v1/simulation/create`, {
      simulation_title: this.state.scenario_title,
      simulation_desc: this.state.scenario_desc,
      simulation_introduction: this.state.contents,
      simulation_ua: this.state.scenario_ua
    }, {headers: headers}).then(res => {
      // debugger;
      alert(`Simulation ID: ${res.data.simulation_id}`)
    });

    // this.props.dispatch({
    //   type: 'ADD_SCENARIO',
    //   payload: { id: this.state.scenarioID, title: this.state.contents }
    // })
    // this.setState({scenarioID: this.state.scenarioID + 1})
  }
  state = {
    ORquestion: "",
  };

  change = e => {
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      ORquestion:"",
    });
  };
  render() {
    return (
       <MuiThemeProvider>
      <form>
          {/* <Grid item 
          //xs={10}
          justify='center'> */}
      <TextField 
          name="ORquestion"
          multiline
          fullWidth
          id="ORquestion" 
          label="Open Response Question" 
          variant="outlined" 
          placeholder='Enter open response question here'
          value={this.state.ORquestion}
          onChange={e => this.change(e)}
          style={{
              width: 1000
              //alignItems:'center'
            }}
          rows={18}
          //margin="normal"
              InputLabelProps={{
              shrink: true }}
          />
          {/* </Grid> */}
          < br />
        {/* <TextField
          name="response"
          id="responses"
          label="Question Responses"
          fullWidth
          placeholder="Enter response here"
          margin="normal"
          style={{
            //margin: 8,
            width: 1000
          }}
          value={this.state.response}
          variant="outlined"
          onChange={e => this.change(e)}
          InputLabelProps={{
            //readOnly: true,
            shrink: true
          }}
          /> */}
          <br />
          <p> </p>
        <center>
        <Button
        variant="outlined"
        style={{ 
        backgroundColor:'#881c1c',
        color: 'white',
        marginRight: 100
        }}
        //onClick={e => this.onSubmit(e)}>
        onClick={e => this.handleEditorSubmit(e)}>
          Add Response
          </Button>

          <Button  
            variant="contained" 
            color="primary" 
            href="#contained-buttons"
            size='medium'  
            >
            Submit
          </Button>
          </center>
      </form>
       </MuiThemeProvider>
    );
  }
}