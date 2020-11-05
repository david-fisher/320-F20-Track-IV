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
    // this.props.onChange({
    //   question:"",
    //   response: "",
    // });
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
              width: 1000
            }}
          rows={10}
          margin="normal"
              InputLabelProps={{
              shrink: true }}
          />
        <TextField
          name="response"
          id="responses"
          label="Question Responses"
          fullWidth
          placeholder="Enter response here"
          margin="normal"
          style={{
            //margin: 8,
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
          <p> </p>
        <Button
        variant="outlined"
        style={{ 
        backgroundColor:'#881c1c',
        color: 'white',
        margin: 100
        }}
        
        onClick={e => this.onSubmit(e)}>
          Add Response
          </Button>
          <Button  
            variant="contained" 
            color="primary" 
            href="#contained-buttons"
            size='medium'  
            // style={{
            //   marginLeft: 1000,
            // }} 
            >
            Submit
          </Button>
      </form>
       </MuiThemeProvider>
    );
  }
}