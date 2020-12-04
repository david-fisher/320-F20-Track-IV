import React, { Component, useState } from 'react';
import './PlayerResponses.css';
import Nav from '../../Components/Nav'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import { connect } from 'react-redux';
import axios from 'axios';
import './Introduction.css';

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

function FinalReflection(props) {

  const classes = useStyles();

  function addMiddleReflection(history) {
    const finalComplete = {
      "body_text": bodyText,
      "prompts": [q1, q2],
      "content": "",
      "question": "",
      "options": [
        q1,
        q2
      ]
    }
    axios.post(`${baseURL}/api/v1/simulation/${props.scenarioData.id}/final-reflection`, { "body_text": initialComplete.body_text, "prompts": initialComplete.prompts }, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${props.token}`
      }
    }).then(res => {
      props.dispatch({
        type: 'ADD_FINAL_REFLECTION',
        payload: { ...finalComplete }
      });
      history.push({
        pathname: "/stakeholders",
      });
    }).catch(err => {
      console.log(err);
      err.response && err.response.data && err.response.data.explanation && alert(`Error: ${err.response.data.explanation}`);
    })
  }

  const finalReflectionNew = {
    "name": 'FinalReflection',
    "type": 'PLAIN',
    "order": 11,
    "body_text": " ",
  }

  function addFinalReflection() {
    const finalReflectionComplete = {
      "type": type,
      "name": name,
      "order": order,
      "body_text": bodyText,
    }
    props.dispatch({
      type: 'ADD_FINAL_REFLECTION',
      payload: { ...finalReflectionComplete }
    });
  }

  const [type, setType] = useState(finalReflectionNew.type);
  const [name, setName] = useState(finalReflectionNew.name);
  const [order, setOrder] = useState(finalReflectionNew.order);
  const [bodyText, setBodyText] = useState(finalReflectionNew.body_text);

  const handleBodyChange = (body) => {
    setBodyText(body);
    console.log(bodyText);
  };


  return (
    <div >
      <Nav />
      <div className={classes.root}>
        <div >
          <div >
            <h1>Final Reflection</h1>
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
              placeholder: "Insert your final reflection text here..."

            }} />

          </b2>
          <b2 className="second-body">
            <div>
              <Button variant="contained" color="primary" aria-label="contained primary button group" onClick={addFinalReflection} >SAVE</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(FinalReflection);


