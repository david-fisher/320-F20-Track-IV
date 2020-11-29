import React, { Component } from 'react';
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


const useStateWithLocalStorage = localStorageKey => {
  const [initialReflection, setInitialReflection] = React.useState(
    localStorage.getItem(localStorageKey) || ''
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, initialReflection);
  }, [initialReflection]);

  return [initialReflection, setInitialReflection];
};

class Reflections extends Component {

  // const classes = useStyles();
  constructor() {
    super()
    this.state = {
      scenarioID: 3,
      initial_reflection: localStorage.getItem("RS_SCENARIO__initialReflection"),
    }

    this.handleEditorSubmit = this.handleEditorSubmit.bind(this);

  }
  handleEditorSubmit(event) {
    // alert("Initial Reflection has been submitted")
    const headers = {
      'Authorization': `Bearer ${this.props.token}`,
      'Accept': 'application/json'
    }
    event.preventDefault();
    // I THINK THIS IS HOW TO MAKE CALLS TO A PARTICULAR ID LETS GOOOO
    axios.post('api/v1/simulation/' + this.state.scenarioID + '/initial-reflection', {
      simulation_title: this.state.initial_reflection,
    }, { headers: headers }).then(res => {
      // debugger;
      alert(`Simulation ID: ${res.data.simulation_id}`)
    });
  }


  render() {
    return (
      <div >
        <Nav />
        <div >
          <div >
            <h1>Reflections</h1>
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
            <SunEditor name="my-editor" contents={this.state.value} onChange={this.handleEditorChange} setOptions={{
              height: 600,
              width: '100%',
              //maxWidth: '1000px',
              buttonList: buttonList.complex,
              placeholder: "Insert your initial reflection summary here..."

            }} />

          </b2>
          <b2>
            <div className="second-body">
              <Button variant="contained" color="primary" aria-label="contained primary button group" onClick={this.handleEditorSubmit}>SAVE</Button>
            </div>
          </b2>

        </div>
      </div>

    );
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
export default connect(mapStateToProps, mapDispatchToProps)(Reflections);


