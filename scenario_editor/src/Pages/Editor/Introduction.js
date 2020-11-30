import React, { Component, useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import './Introduction.css';
import Nav from '../../Components/Nav';
// import React, { Component } from 'react';
//import './Home.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';

import SunEditor, { buttonList } from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({

  multiText: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  header: {
    margin: theme.spacing(4)
  },
  root: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(4),
    width: '100ch',
  },
}));


class Introduction extends Component {

  // const classes = useStyles();
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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.handleEditorSubmit = this.handleEditorSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  // If you'd like your changes to persist (stay in place after page refresh),
  // you'd want to add your new posts to a database within your reducer function's action handlers.
  handleSubmit(event) {
    alert('Content submitted' /*+ this.state.value*/)
    event.preventDefault()
    this.props.dispatch({
      type: 'ADD_SCENARIO',
      payload: { id: this.state.scenarioID, title: this.state.value }
    })

    this.setState({ scenarioID: this.state.scenarioID + 1 })
  }

  handleEditorChange(event) {
    this.setState({ contents: event })
  }

  handleEditorSubmit(event) {
    // alert("Content has been submitted")
    const headers = {
      'Authorization': `Bearer ${this.props.token}`,
      'Accept': 'application/json'
    }
    event.preventDefault();
    axios.post(`/api/v1/simulation/create`, {
      simulation_title: this.state.scenario_title,
      simulation_desc: this.state.scenario_desc,
      simulation_introduction: this.state.contents,
      simulation_ua: this.state.scenario_ua
    }, { headers: headers }).then(res => {
      // debugger;
      alert(`Simulation ID: ${res.data.simulation_id}`)
    });

    this.props.dispatch({
      type: 'ADD_SCENARIO',
      payload: { id: this.state.scenarioID, title: this.state.contents }
    });
    this.setState({ scenarioID: this.state.scenarioID + 1 })
  }

  render() {

    return (
      <div>
        <Nav />
        <div>
          <h1>Introduction Page</h1>
        </div>

        <b1 className="introduction-part">
          Add/Edit your introduction below:
        </b1>
        <div></div>
        <b2 className="text-editor">

          <SunEditor name="my-editor" contents={this.state.value} onChange={this.handleEditorChange} setOptions={{
            height: 600,
            width: '100%',
            //maxWidth: '1000px',
            buttonList: [
              ['undo', 'redo'],
              ['font', 'fontSize', 'formatBlock'],
              ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'removeFormat'],
              '/', // Line break
              ['fontColor', 'hiliteColor', 'outdent', 'indent', 'align', 'horizontalRule', 'list', 'table'],
              ['link', 'image', 'video', 'fullScreen', 'showBlocks', 'codeView', 'preview']
          ],
            placeholder: "Insert your introduction text here..."

          }} />

        </b2>
        <b2 className="second-body">
          <div>
            <Button variant="contained" color="primary" aria-label="contained primary button group" onClick={this.handleEditorSubmit}>SAVE</Button>
          </div>
          <div>
            <Button variant="contained" color="primary" aria-label="contained primary button group" component={Link} to="/reflections">NEXT</Button>
          </div>
        </b2>
      </div>

    )
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

export default connect(mapStateToProps, mapDispatchToProps)(Introduction);
