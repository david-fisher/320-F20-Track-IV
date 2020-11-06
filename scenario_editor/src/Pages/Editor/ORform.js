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
import Grid from '@material-ui/core/Grid';

export default class Form extends React.Component {
  state = {
    ORquestion: "",
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
      ORquestion:"",
    });
  };
  render() {
    return (
       <MuiThemeProvider>
      <form>
          {/* <Grid item 
          //xs={10}
          justify='center'> */}
      <TextField 
          name="ORquestion"
          multiline
          fullWidth
          id="ORquestion" 
          label="Open Response Question" 
          variant="outlined" 
          placeholder='Enter open response question here'
          value={this.state.ORquestion}
          onChange={e => this.change(e)}
          style={{
              width: 1000
              //alignItems:'center'
            }}
          rows={18}
          //margin="normal"
              InputLabelProps={{
              shrink: true }}
          />
          {/* </Grid> */}
          < br />
        {/* <TextField
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
          /> */}
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