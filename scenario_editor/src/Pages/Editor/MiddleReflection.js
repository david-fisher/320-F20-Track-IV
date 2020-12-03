import React, { Component, useState } from 'react';
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

  const middleReflectionNew = {
    "name": 'MiddleReflection',
    "type": 'PLAIN',
    "order": 7,
    "body_text": " ",
  }

  function addMiddleReflection() {
    const middleReflectionComplete = {
      "type": type,
      "name": name,
      "order": order,
      "body_text": bodyText,
    }
    props.dispatch({
      type: 'ADD_MIDDLE_REFLECTION',
      payload: { ...middleReflectionComplete }
    });
  }

  const [type, setType] = useState(middleReflectionNew.type);
  const [name, setName] = useState(middleReflectionNew.name);
  const [order, setOrder] = useState(middleReflectionNew.order);
  const [bodyText, setBodyText] = useState(middleReflectionNew.body_text);

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
            <h1>Middle Reflection</h1>
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
              placeholder: "Insert your middle reflection text here..."

            }} />

          </b2>
          <b2>
            <div>
              <Button variant="contained" color="primary" aria-label="contained primary button group" onClick={addMiddleReflection} >SAVE</Button>
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


