// ********************************************
// NOT UPDATED.
// You can follow Dashboard.js if you want to make this page though :)
// Recommend looking into
// ********************************************
import React, { Component } from 'react';
import './NewScenario.css';
import Nav from '../../Components/Nav'
import { Link, useHistory } from 'react-router-dom';
//import Button from 'react-bootstrap/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStateWithLocalStorage = localStorageKey => {
  const [value2, setValue2] = React.useState(
    localStorage.getItem(localStorageKey) || ''
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value2);
  }, [value2]);

  return [value2, setValue2];
};
const useStateWithLocalStorage3 = localStorageKey => {
  const [value3, setValue3] = React.useState(
    localStorage.getItem(localStorageKey) || ''
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value3);
  }, [value3]);

  return [value3, setValue3];
};

const NewScenario = () => {
  // const history = useHistory();

  const [value2, setValue2] = useStateWithLocalStorage('RS_SCENARIO__title');
  const [value3, setValue3] = useStateWithLocalStorage('RS_SCENARIO__description');

  const onChange2 = event => setValue2(event.target.value);
  const onChange3 = event => setValue3(event.target.value);

  const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        marginTop: theme.spacing(4),
        marginLeft: theme.spacing(4),
        width: '100ch',
    },
  }));

    const classes = useStyles();

  return (
    <div>
       <Nav/>
       <form className={classes.root} noValidate autoComplete="off">
       <h1>  Create New Scenario</h1>
       {/* <b1>  Scenario Title:</b1> */}
       <TextField
       id="title"
       label="Scenario Title"
       variant="outlined"
       placeholder='Enter scenario title here'
       style={{
         width: '50ch'}}
       value={value2}
       onChange={onChange2}
       margin="dense"
          InputLabelProps={{
            shrink: true }}
       />
           <TextField
            multiline
            fullWidth
            id="description"
            label="Scenario Description"
            variant="outlined"
            placeholder='Enter scenario description here'
            value={value3}
            onChange={onChange3}
            style={{
              marginTop: 75}}
            rows={10}
            margin="normal"
                InputLabelProps={{
                  shrink: true }}
            />
           {/* <input
           type='text'
           id='title'
           size="element.value.length + 1"
           value={value}

           onChange={onChange} /> */}
         </form>
         <div className={classes.root}>
            <div>
            <Button
            component={ Link } to="/user-agreement"
            variant="contained"
            color="primary"
            href="#contained-buttons"
            size='medium'
            alignItems='right'
            style={{
              //marginTop: 10,
              //marginRight: 100,
              marginLeft: 1100,
              //marginBottom: 100
            }}

            >
            Submit
          </Button>
          </div>

          {/* <div class="Introduction-submit-button">
          {/* <div> */}
            {/* <Link to = "/user-agreement">
              <Button
              size = "custom-submit-button"
              variant="outline-secondary"
              value = "Submit"
              >
                Submit
              </Button>{' '}
            </Link> */}
          </div>


       {/* <input
       className="TRY-type"
       value={value}
       type="text"
       onChange={onChange}
       size = "element.value.length + 1"
      //  size="TRY-custom-size" */}
       {/* /> */}
       {/* <input value={value} type="text" onChange={onChange}/> */}
     </div>

  );
};
export default NewScenario;


//Essentially the NewScenario page from the Wireframe.
//The textboxes need to be fixed, and might have to be recoded in order to hold state properly
// class NewScenario extends Component {
//   render() {
//     return (

//       <div>
//         <Nav />
//         <form>
//           <h1>Scenario Title:</h1>
//           <input type='text' id='title' size="element.value.length + 1" />
//         </form>
//         <div id='Description'>

//           <form>
//             <h1>Scenario Description:</h1>
//             <textarea rows='15' cols='75' />
//             <div class="Introduction-submit-button">
//               {}
//               <Link to="/introduction">
//                 <Button
//                   size="custom-submit-button"
//                   variant="outline-secondary"
//                   value="Submit"
//                 >
//                   Submit
//                     </Button>{' '}
//               </Link>
//             </div>
//           </form>

//         </div>
//       </div>

//     )
//   }



// }



// export default NewScenario;
