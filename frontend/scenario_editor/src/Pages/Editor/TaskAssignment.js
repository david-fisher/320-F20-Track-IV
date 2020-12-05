import React, { Component, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Introduction.css';
import Nav from '../../Components/Nav';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import 'suneditor/dist/css/suneditor.min.css';
import SunEditor from 'suneditor-react';
import axios from 'axios';
import { baseURL } from '../../Components/Calls'

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


function TaskAssignment(props) {

  const classes = useStyles();

  // Error: Page specified with order, type, and scenario already exists.
  useEffect(() => {
    axios.get(`${baseURL}/api/v1/simulation/${props.scenarioData.id}/task`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${props.token}`
      }
    }).then(res => {
      console.log(res)
    });

    // if (!response) {

    //   console.log("RESPONSE: " + response)
    //   // console.log("CUR PAGE: "+props.pages.)
    //   props.dispatch({
    //     type: 'ADD_INTRODUCTION',
    //     payload: { response }
    //   });
    // }
  }, [])

  function addTaskAssignment(history) {
    const taskAssignmentComplete = {
      "type": type,
      "name": name,
      "order": order,
      "body_text": bodyText,
    }
    console.log(props.scenarioData.id)
    axios.post(`${baseURL}/api/v1/simulation/${props.scenarioData.id}/task`, { "body_text": taskAssignmentComplete.body_text }, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${props.token}`
      }
    }).then(res => {
      // runs the "type" aka function ADD_INTRODUCTION in pagesReducer.
      props.dispatch({
        type: 'ADD_TASK_ASSIGNMENT',
        payload: { ...taskAssignmentComplete }
      });
      history.push({
        pathname: "/user-agreement",
      });
    }).catch(err => {
      console.log(err);
      err.response && err.response.data && err.response.data.explanation && alert(`Error: ${err.response.data.explanation}`);
    })
  }

  const taskNew =
  {
    "name": 'TaskAssignment',
    "type": 'PLAIN',
    "order": 2,
    "body_text": " ",
  }

  const [type, setType] = useState(taskNew.type);
  const [name, setName] = useState(taskNew.name);
  const [order, setOrder] = useState(taskNew.order);
  const [bodyText, setBodyText] = useState(taskNew.body_text);

  const handleBodyChange = (body) => {
    setBodyText(body);
    console.log(bodyText);
  };


  return (
    <div >
      <Nav />
      <div className={classes.root}>
        <div>
          <h1>Project Task Assignment</h1>
        </div>

        <b1 >
          Add/Edit Your Task Assignment Below:
        </b1>
      </div>
      <div></div>
      <b2 className="text-editor">

        <SunEditor name="my-editor" onChange={handleBodyChange} setOptions={{
          height: 250,
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
          placeholder: "Insert your project task assignment text here..."

        }} />

      </b2>
      <b2 className="second-body">
        <div>
          <Button variant="contained" color="primary" aria-label="contained primary button group" onClick={addTaskAssignment} >SAVE</Button>
        </div>
        <div>
          <Button variant="contained" color="primary" aria-label="contained primary button group" component={Link} to="/user-agreement">NEXT</Button>
        </div>
        <div>
        </div>
      </b2>
    </div>

  )
}

const mapStateToProps = state => {
  return { scenarioData: state.scenarioData, token: state.token, pageData: state.pages }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

// The connect function takes another function as an argument: mapStateToProps.
// mapStateToProps determines what state from our store we want to pull into our component.
// In this case, we're specifying to only pull our state's posts property.

export default connect(mapStateToProps, mapDispatchToProps)(TaskAssignment);
