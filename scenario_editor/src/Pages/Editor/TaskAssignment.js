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

import Suneditor, { buttonList } from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import SunEditor from 'suneditor-react';
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


function TaskAssignment(props) {

  function addIntroduction() {
    const introComplete = {
      "type": type,
      "order": order,
      "body_text": bodyText,
    }
    props.dispatch({
      type: 'ADD_INTRODUCTION',
      payload: { ...introComplete }
    });
  }

  const introNew = {
    "type": 'Introduction',
    "order": 0,
    "body_text": " ",
  }

  const [type, setType] = useState(introNew.type);
  const [order, setOrder] = useState(introNew.order);
  const [bodyText, setBodyText] = useState(introNew.body_text);

  const handleBodyChange = (body) => {
    setBodyText(body);
    console.log(bodyText);
  };




  return (
    <div>
      <Nav />
      <div>
        <div>
          <h1>Project Task Assignment</h1>
        </div>

        <b1 className="introduction-part">
          Add/Edit Your Task Assignment Below:
        </b1>
      </div>
      <div></div>
      <b2 className="text-editor">

        <SunEditor name="my-editor" setOptions={{
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
          <Button variant="contained" color="primary" aria-label="contained primary button group" >SAVE</Button>
        </div>
        <div>
          <Button variant="contained" color="primary" aria-label="contained primary button group" component={Link} to="/introduction-hub">NEXT</Button>
        </div>
        <div>
        </div>
      </b2>
    </div>

  )
}

const mapStateToProps = state => {
  return { scenarios: state.scenarios, token: state.token }
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
