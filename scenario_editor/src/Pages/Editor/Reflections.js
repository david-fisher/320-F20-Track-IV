import React, { Component, useState, useEffect } from 'react';
import './PlayerResponses.css';
import Nav from '../../Components/Nav'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import SunEditor, { buttonList } from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import { connect } from 'react-redux';
import axios from 'axios';
import './Introduction.css';
import { baseURL } from '../../Components/Calls'
import TextField from '@material-ui/core/TextField';
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

function Reflections(props) {

  const classes = useStyles();

  useEffect(() => {
    axios.get(`${baseURL}/api/v1/simulation/${props.scenarioData.id}/initial-reflection`, {
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

  function addInitialReflection(history) {
    const introComplete = {
      "type": type,
      "name": name,
      "order": order,
      "body_text": bodyText,
    }
    axios.post(`${baseURL}/api/v1/simulation/${props.scenarioData.id}/introduction`, { "body_text": introComplete.body_text }, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${props.token}`
      }
    }).then(res => {
      // runs the "type" aka function ADD_INTRODUCTION in pagesReducer.
      props.dispatch({
        type: 'ADD_INITIAL_REFLECTION',
        payload: { ...introComplete }
      });
      history.push({
        pathname: "/reflections",
      });
    }).catch(err => {
      console.log(err);
      err.response && err.response.data && err.response.data.explanation && alert(`Error: ${err.response.data.explanation}`);
    })
  }



  const initialReflectionNew = {
    "name": 'InitialReflection',
    "type": 'PLAIN',
    "order": 3,
    "body_text": " ",
    "questions": [" "],
  }

  function addReflection() {
    const initialReflectionComplete = {
      "type": type,
      "name": name,
      "order": order,
      "body_text": bodyText,
      "questions": questionsText,
    }
    props.dispatch({
      type: 'ADD_INITIAL_REFLECTION',
      payload: { ...initialReflectionComplete }
    });
  }

  const [type, setType] = useState(initialReflectionNew.type);
  const [name, setName] = useState(initialReflectionNew.name);
  const [order, setOrder] = useState(initialReflectionNew.order);
  const [bodyText, setBodyText] = useState(initialReflectionNew.body_text);
  const [questionsText, setQuestionsText] = useState(initialReflectionNew.body_text);

  const handleBodyChange = (body) => {
    setBodyText(body);
    console.log(bodyText);
  };


  return (
    <div >
      <Nav />
      <div className={classes.root}>
        <div >
          <div>
            <h1>Initial Reflection</h1>
            <b1>
              Please choose the reflection to create below:
        </b1>
          </div>
        </div>
        <div display="flex" flex-direction="center" align-items="center" >
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button component={Link} to={'/reflections'}>Initial</Button>
            <Button component={Link} to='/middle-reflection'>Middle</Button>
            <Button component={Link} to='/final-reflection'>Final</Button>
          </ButtonGroup>
        </div>

        <div >
          <b2 className='text-editor'>
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
              placeholder: "Insert your initial reflection text here..."

            }} />

          </b2>
          <div className="second-body">

            <TextField
              id="Delay Prompt"
              label="Delay Prompt"
              style={{ margin: 8 }}
              placeholder="Input your delay prompt here"
              helperText="This prompt sends the reader to the stakeholder conversations!"
              fullWidth
              variant="outlined"
              multiline
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="Go Ahead Prompt"
              label="Go Ahead Prompt"
              style={{ margin: 8 }}
              placeholder="Input your delay prompt here"
              helperText="This prompt skips the majority of conversations!"
              fullWidth
              variant="outlined"
              multiline
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <b2 className="second-body">
            <div>
              <Button variant="contained" color="primary" aria-label="contained primary button group" onClick={addInitialReflection} >SAVE</Button>
            </div>
            <div>
              <Button variant="contained" color="primary" aria-label="contained primary button group" component={Link} to="/stakeholders">NEXT</Button>
            </div>
          </b2>

        </div>
      </div>
    </div>

  );

}


const mapStateToProps = state => {
  return { scenarios: state.scenarios, token: state.token }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Reflections);


