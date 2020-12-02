import React, { Component, useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import './Introduction.css';
import Nav from '../../Components/Nav';
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


function Consequences(props) {

  const classes = useStyles();

  function addConsequences() {
    const consequencesComplete = {
      "type": type,
      "order": order,
      "body_text": bodyText,
    }
    props.dispatch({
      type: 'ADD_CONSEQUENCES',
      payload: { ...consequencesComplete }
    });
  }

  // Need to double check on page ordering... there is a conclusions page, not sure 
  // where Consequences fits into this yet...
  const consequencesNew = {
    "name": 'Consequences',
    "type": 'PLAIN',
    "order": 12,
    "body_text": " ",
  }

  const [type, setType] = useState(consequencesNew.type);
  const [name, setName] = useState(consequencesNew.name);
  const [order, setOrder] = useState(consequencesNew.order);
  const [bodyText, setBodyText] = useState(consequencesNew.body_text);

  const handleBodyChange = (body) => {
    setBodyText(body);
    console.log(bodyText);
  };

  return (
    <div>
      <Nav />
      <div className={classes.root}>
        <div>
          <h1>Consequences Page</h1>
        </div>

        <b1>
          Add/Edit Your Consequences Below:
        </b1>
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
            placeholder: "Insert the consequences text here..."
          }} />

        </b2>
        <b2 className="second-body" >
          <div>
            <Button variant="contained" color="primary" aria-label="contained primary button group" onClick={addConsequences} >SAVE</Button>
          </div>
          <div>
            {/* WILL LIKELY NEED TO MAKE THIS LEAD TO SOME FINAL "CREATE" PAGE */}
            <Button variant="contained" color="primary" aria-label="contained primary button group" component={Link} to="/reflections">NEXT</Button>
          </div>
          <div>

          </div>
        </b2>
      </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(Consequences);
