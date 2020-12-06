import React from "react";
import Input from '@material-ui/core/Input';
import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import { TextField } from "@material-ui/core";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from "material-ui/RaisedButton";
import Button from '@material-ui/core/Button';


export default class Form extends React.Component {
  state = {
    question: "",
    response: "",
  };

  change = e => {
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      question:"",
      response: "",
    });
  };
  render() {
    return (
       <MuiThemeProvider>
      <form>
      <TextField 
          name="question"
          multiline
          fullWidth
          id="MCquestion" 
          label="Multiple Choice Question" 
          variant="outlined" 
          placeholder='Enter multiple choice question here'
          value={this.state.question}
          onChange={e => this.change(e)}
          style={{
              width: 1000,
              //margin: 20,
            }}
          rows={15}
          margin="normal"
              InputLabelProps={{
              shrink: true }}
          />
          < br />
        <TextField
          name="response"
          id="responses"
          label="Question Responses"
          fullWidth
          placeholder="Enter response here"
          margin="normal"
          style={{
            // margin: 20,
            width: 1000
          }}
          value={this.state.response}
          variant="outlined"
          onChange={e => this.change(e)}
          InputLabelProps={{
            //readOnly: true,
            shrink: true
          }}
          />
          <br />
          <p> </p>
          <center>
        <Button
        variant="outlined"
        style={{ 
        backgroundColor:'#881c1c',
        color: 'white',
        marginRight: 100
        }}
        
        onClick={e => this.onSubmit(e)}>
          Add Response
          </Button>
          <Button  
            variant="contained" 
            color="primary" 
            href="#contained-buttons"
            size='medium'  
            >
            Submit
          </Button>
          </center>
      </form>
       </MuiThemeProvider>
    );
  }
}

// NOT SURE WHICH CODE IS UP TO DATE. THE ONE ABOVE SUBMITS TO THE TABLE. ONE BELOW DOES NOTHING


// import React from "react";
// import Input from '@material-ui/core/Input';
// import {
//   fade,
//   ThemeProvider,
//   withStyles,
//   makeStyles,
//   createMuiTheme,
// } from '@material-ui/core/styles';
// import { TextField } from "@material-ui/core";
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import RaisedButton from "material-ui/RaisedButton";
// import Button from '@material-ui/core/Button';
// import axios from 'axios';

// export default class Form extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       value: '',
//       scenarioID: 2,
//       contents: '',
//       scenario_title: localStorage.getItem("RS_SCENARIO__title"),
//       scenario_desc: localStorage.getItem("RS_SCENARIO__description"),
//       scenario_ua: localStorage.getItem("RS_SCENARIO__user_agreement"),
//     }
//     this.handleEditorChange = this.handleEditorChange.bind(this);
//     this.handleEditorSubmit = this.handleEditorSubmit.bind(this);
//   }
//   handleEditorChange(event) {
//     this.setState({contents: event})
//   }

//   handleEditorSubmit(event) {
//     // alert("Content has been submitted")
//     const headers = {
//       'Authorization': `Bearer ${this.props.token}`,
//       'Accept': 'application/json'
//     }
//     event.preventDefault();
//     axios.post(`http://4acf3d2e295e.ngrok.io/api/v1/simulation/create`, {
//       simulation_title: this.state.scenario_title,
//       simulation_desc: this.state.scenario_desc,
//       simulation_introduction: this.state.contents,
//       simulation_ua: this.state.scenario_ua
//     }, {headers: headers}).then(res => {
//       // debugger;
//       alert(`Simulation ID: ${res.data.simulation_id}`)
//     });

//     // this.props.dispatch({
//     //   type: 'ADD_SCENARIO',
//     //   payload: { id: this.state.scenarioID, title: this.state.contents }
//     // })
//     // this.setState({scenarioID: this.state.scenarioID + 1})
//   }

//   state = {
//     question: "",
//     questionError: "",
//     response: "",
//     responseError: "",
//   };

//   change = e => {
//     // this.props.onChange({ [e.target.name]: e.target.value });
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
  
//   validate = () => {
//     let isError = false;
//     const errors = {};
//     if (this.state.question.length < 5) {
//       isError = true;
//       errors.questionError = "error";
//     }
//     if (isError) {
//       this.setState({
//         ...this.state,
//         ...errors
//       })
//     }
//     return isError;
//   }

//   onSubmit = e => {
//     e.preventDefault();
//     // this.props.onSubmit(this.state);
//     const err = this.validate();
//     if (!err) {
//       this.props.onSubmit(this.state);
//       this.setState({
//         question:"",
//         response: "",
//       });
//     }
//   };
//   render() {
//     return (
//        <MuiThemeProvider>
//       <form>
//       <TextField 
//           name="question"
//           multiline
//           fullWidth
//           id="MCquestion" 
//           label="Multiple Choice Question" 
//           variant="outlined" 
//           placeholder='Enter multiple choice question here'
//           value={this.state.question}
//           onChange={e => this.change(e)}
//           errorText={this.state.questionError}
//           style={{
//               width: 1000,
//               //margin: 20,
//             }}
//           rows={15}
//           margin="normal"
//               InputLabelProps={{
//               shrink: true }}
//           />
//           < br />
//         <TextField
//           name="response"
//           id="responses"
//           label="Question Responses"
//           fullWidth
//           placeholder="Enter response here"
//           margin="normal"
//           style={{
//             // margin: 20,
//             width: 1000
//           }}
//           value={this.state.response}
//           variant="outlined"
//           onChange={e => this.change(e)}
//           errorText={this.state.responseError}
//           InputLabelProps={{
//             //readOnly: true,
//             shrink: true
//           }}
//           />
//           <br />
//           <p> </p>
//           <center>
//         <Button
//         variant="outlined"
//         style={{ 
//         backgroundColor:'#881c1c',
//         color: 'white',
//         marginRight: 100
//         }}
        
//         // onClick={e => this.onSubmit(e)}>
//         onClick={e => this.handleEditorSubmit(e)} >
//           Add Response
//           </Button>
//           <Button  
//             variant="contained" 
//             color="primary" 
//             href="#contained-buttons"
//             size='medium'  
//             >
//             Submit
//           </Button>
//           </center>
//       </form>
//        </MuiThemeProvider>
//     );
//   }
// }