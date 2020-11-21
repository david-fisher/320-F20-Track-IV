import React, { Component } from "react";
import Form from "../../Components/MCform";
import Nav from '../../Components/Nav'
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//import AddIcon from '@material-ui/icons/Add';
//import AddIcon from '@material-ui/icons/AddBox';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();
import Table from "../../Components/MCtable";

const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(4),
      marginTop: theme.spacing(4),
      marginLeft: theme.spacing(4),
      width: '100ch',
  },
    header: {
      marginTop: theme.spacing(1),
      textAlign: 'center',
    }
  }));
class MultipleChoice extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     value: '',
  //     scenarioID: 2,
  //     contents: '',
  //     scenario_title: localStorage.getItem("RS_SCENARIO__title"),
  //     scenario_desc: localStorage.getItem("RS_SCENARIO__description"),
  //     scenario_ua: localStorage.getItem("RS_SCENARIO__user_agreement"),
  //   }
  //   this.handleEditorChange = this.handleEditorChange.bind(this);
  //   this.handleEditorSubmit = this.handleEditorSubmit.bind(this);
  // }
  // handleEditorChange(event) {
  //   this.setState({contents: event})
  // }

  // handleEditorSubmit(event) {
  //   // alert("Content has been submitted")
  //   const headers = {
  //     'Authorization': `Bearer ${this.props.token}`,
  //     'Accept': 'application/json'
  //   }
  //   event.preventDefault();
  //   axios.post(`http://4acf3d2e295e.ngrok.io/api/v1/simulation/create`, {
  //     simulation_title: this.state.scenario_title,
  //     simulation_desc: this.state.scenario_desc,
  //     simulation_introduction: this.state.contents,
  //     simulation_ua: this.state.scenario_ua
  //   }, {headers: headers}).then(res => {
  //     // debugger;
  //     alert(`Simulation ID: ${res.data.simulation_id}`)
  //   });

  //   // this.props.dispatch({
  //   //   type: 'ADD_SCENARIO',
  //   //   payload: { id: this.state.scenarioID, title: this.state.contents }
  //   // })
  //   // this.setState({scenarioID: this.state.scenarioID + 1})
  // }

  state = {
    // fields: {}
    data: [],
    editIdx: -1,
  };

  handleRemove = i => {
    this.setState(state => ({
      data: state.data.filter((row, j) => j !== i)
    }));
  };


  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  startEditing = (i) => {
      this.setState({editIdx: i})
  }
  stopEditing = () =>
  {
      this.setState({editIdx: -1})
  }
  handleChange = (e, name, i) => {
    const { value } = e.target;
    this.setState(state => ({
      data: state.data.map(
        (row, j) => (j === i ? { ...row, [name]: value } : row)
      )
    }));
  };
  render() {
    return (
        <MuiThemeProvider>
            <div className="MultipleChoice">
        <Nav />
        <center>
                {/* <form className={classes.root} noValidate autoComplete="off"> */}
                <h1>  Multiple Choice </h1>
                        <div className="MultipleChoice">
                    </div>
                    <div className="MultipleChoice">
                    <Form 
                    // onChange={fields => this.onChange(fields)} 
                    onSubmit={submission => this.setState({
                        data: [...this.state.data, submission]
                    })}
                    color='primary'                
                    />
                    < Table
                        handleRemove={this.handleRemove}
                        startEditing={this.startEditing}
                        editIdx={this.state.editIdx}
                        handleChange={this.handleChange}
                        stopEditing={this.stopEditing}
                        data={this.state.data}
                        header= {[
                            {
                                name: "Question",
                                prop: "question",
                            },
                            {
                                name: "Response",
                                prop: "response",
                            }
                        ]}
                    />
                    {/* <p>
                    {JSON.stringify(this.state.fields, null, 2)}
                    </p> */}
                    
        </div>
        </center>
        </div>
        </MuiThemeProvider>
    );
  }
}

export default MultipleChoice;