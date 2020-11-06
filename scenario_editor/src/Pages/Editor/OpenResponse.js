
// import React from 'react';
// import Nav from '../../Components/Nav'
// import {Link} from 'react-router-dom';
// import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';

// const useStateWithLocalStorage = localStorageKey => {
//   const [value, setValue] = React.useState(
//     localStorage.getItem(localStorageKey) || ''
//   );

//   React.useEffect(() => {
//     localStorage.setItem(localStorageKey, value);
//   }, [value]);

//   return [value, setValue];
// };

// const OpenResponse = () => {
//   const [value, setValue] = useStateWithLocalStorage(
//     'myValue4InLocalStorage'
//   );

//   const onChange = event => setValue(event.target.value);

//   const useStyles = makeStyles((theme) => ({
//     root: {
//         margin: theme.spacing(1),
//         marginTop: theme.spacing(4),
//         marginLeft: theme.spacing(4),
//         width: '100ch',
//     },
//   }));
  
//     const classes = useStyles();
  
//     return (
      
//       <div> 
//          <Nav/>
//          <form className={classes.root} noValidate autoComplete="off">
//          <h1>  Open Response Question </h1>
//          {/* <b1>  Scenario Title:</b1> */}
         
//              <TextField 
//               multiline
//               fullWidth
//               id="openResponse" 
//               label="Open Response" 
//               variant="outlined" 
//               placeholder='Enter open response question here.'
//               value={value}
//               onChange={onChange}
//             //   style={{ 
//             //     marginTop: 50}}
//               rows={10}
//               margin="normal"
//                   InputLabelProps={{
//                     shrink: true }}
//               />
           
           
//            <Button
//             variant="outlined"
//             style={{ 
//             backgroundColor:'#881c1c',
//             color: 'white'
//             //margin: 100
//             }}
            
//             onClick={e => this.onSubmit(e)}>
//             Add Question
//           </Button>

//             <div className={classes.root}>   
//             <Button  
//             component={ Link } to="/player-responses"
//             variant="contained" 
//             color="primary" 
//             href="#contained-buttons"
//             size='medium'
//             style={{
//                 marginLeft: 1000,
//                 marginTop: 100
//             }}
//             >
//             Submit
//           </Button>
          
//             </div>
//             </form>
//        </div>
      
//     );
//   };
//   export default OpenResponse;

import React, { Component } from "react";
import Form from "./ORform";
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
import Table from "./ORtable";

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
class OpenResponse extends Component {
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
            <div className="OpenResponse">
        <Nav />
        <center>
                {/* <form className={classes.root} noValidate autoComplete="off"> */}
                <h1>  Open Response </h1>
                        <div className="OpenResponse">
                    </div>
                    <div className="OpenResponse">
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
                                name: "Open Response Question",
                                prop: "ORquestion",
                            },
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

export default OpenResponse;