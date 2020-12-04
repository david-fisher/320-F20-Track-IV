import React, { Component, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Continue-Prompt.css';
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


function ContinuePrompt(props) {

  const classes = useStyles();

  const [summary, setSummary] = useState("Here is a summary of the current situation. As a player, you get to choose to either speak with stakeholders about your dilemma, or go ahead without learning more.");
  const [opt1, setOpt1] = useState("Talk to stakeholders.");
  const [opt2, setOpt2] = useState("Continue without talking to stakeholders.");



  const continuePromptNew = {
    "summary": "",
    "questions": [
      {
        "question": "",
        "choices": [
          "",
          ""
        ]
      },]
  }

  const handleBodyChange = (body) => {
    setSummary(body);
    // console.log(bodyText);
  };

  function addInitialAction(history) {

    const continuePromptData = {
      "body_text": summary,
      "prompts": [],
      "content": "This is a multiple choice question.",
      "question": "What initial action will you take?",
      "options": [
        opt1,
        opt2
      ]
    }
    axios.post(`${baseURL}/api/v1/simulation/${props.scenarioData.id}/initial-action`, continuePromptData, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${props.token}`
      }
    }).then(res => {
      // runs the "type" aka function ADD_INTRODUCTION in pagesReducer.
      props.dispatch({
        type: 'ADD_INITIAL_ACTION',
        payload: { ...continuePromptData }
      });
      history.push({
        pathname: "/reflections",
      });
    }).catch(err => {
      console.log(err);
      err.response && err.response.data && err.response.data.explanation && alert(`Error: ${err.response.data.explanation}`);
    })
  }

  return (
    <div>
      <Nav />
      <div>
        <h1>Delay or Go Ahead Prompt</h1>
      </div>

      <b1 className="introduction-part">
        Add/Edit your prompt and choices below:
        </b1>


      <b2 className="text-editor">

        <SunEditor name="continue-prompt" onChange={handleBodyChange} setOptions={{
          height: 250,
          width: '100%',
          buttonList: [
            ['undo', 'redo'],
            ['font', 'fontSize', 'formatBlock'],
            ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'removeFormat'],
            '/', // Line break
            ['fontColor', 'hiliteColor', 'outdent', 'indent', 'align', 'horizontalRule', 'list', 'table'],
            ['link', 'image', 'video', 'fullScreen', 'showBlocks', 'codeView', 'preview']
          ],
          placeholder: "Insert your main text here..."

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
          onChange={e => setOpt1(e.target.value)}
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
          onChange={e => setOpt2(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <b2 className="third-body" >
        <div>
          <Button type="editor-submit" title="SAVE" style={{ backgroundColor: '#881c1c', color: "white" }} onClick={addInitialAction}>SAVE</Button>
        </div>
        <div marginLeft='100px'>
          <Button type="submit" title="NEXT" style={{ backgroundColor: '#881c1c', color: "white" }} component={Link} to="/reflections">NEXT</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ContinuePrompt);
