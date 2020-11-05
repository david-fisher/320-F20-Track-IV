// import React, { Component } from 'react';
// import Nav from '../../Components/Nav'
// import {Link} from 'react-router-dom';
// import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import AddIcon from '@material-ui/icons/Add';

// const useStateWithLocalStorage = localStorageKey => {
//   const [value, setValue] = React.useState(
//     localStorage.getItem(localStorageKey) || ''
//   );

//   React.useEffect(() => {
//     localStorage.setItem(localStorageKey, value);
//   }, [value]);

//   return [value, setValue];
// };

// const MultipleChoice = () => {
//   const [value, setValue] = useStateWithLocalStorage(
//     'myValueInLocalStorage'
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
//          <h1>  Multiple Choice </h1>
//           {/* begin add question textfield */}
//              <TextField 
//               multiline
//               fullWidth
//               id="MCquestion" 
//               label="Multiple Choice Question" 
//               variant="outlined" 
//               placeholder='Enter multiple choice question here'
//               value={value}
//               onChange={onChange}
//               style={{ 
//                 marginTop: 20}}
//               rows={10}
//               margin="normal"
//                   InputLabelProps={{
//                     shrink: true }}
//               />
//               {/* end add question textfield */}
//               {/* begin add response */}
//               <div className="MultipleChoice">
//              <Button
//                 variant="contained"
//                 color="primary"
//                 className={classes.button}
//                 startIcon={<AddIcon />}
//             >
//                 Add Response
//             </Button>
//             </div>
//             {/* end add response */}
//            </form>
//  </div>

//     );
//  };
//   export default MultipleChoice;







import React, { Component } from "react";
import Form from "./MCform";
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
import Table from "./MCtable";

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
class App extends Component {
  state = {
    // fields: {}
    data: [],
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };
  render() {
    return (
        <MuiThemeProvider>
            <div className="App">
        <Nav />
                {/* <form className={classes.root} noValidate autoComplete="off"> */}
                <h1>  Multiple Choice </h1>
                    {/* begin add question textfield */}
                    {/* <TextField 
                        multiline
                        fullWidth
                        id="MCquestion" 
                        label="Multiple Choice Question" 
                        variant="outlined" 
                        placeholder='Enter multiple choice question here'
                        style={{
                            width: 1000
                          }}
                        rows={10}
                        margin="normal"
                            InputLabelProps={{
                            shrink: true }}
                        /> */}
                        {/* end add question textfield */}
                        {/* begin add response */}
                        <div className="MultipleChoice">
                    </div>
                    <div className="App">
                    <Form 
                    // onChange={fields => this.onChange(fields)} 
                    onSubmit={submission => this.setState({
                        data: [...this.state.data, submission]
                    })}
                    color='primary'                
                    />
                    < Table
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
        </div>
        </MuiThemeProvider>
    );
  }
}

export default App;