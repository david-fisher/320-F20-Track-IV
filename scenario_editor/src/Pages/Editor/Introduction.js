import React, { Component, useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import './Introduction.css';
import NavDashboard from '../../Components/NavDashboard'
// import React, { Component } from 'react';
//import './Home.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';

import Suneditor, {buttonList}from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import SunEditor from 'suneditor-react';

const useStyles = makeStyles((theme) => ({

  multiText: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  root: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(4),
    width: '100ch',
  },
}));


class Introduction extends Component {

  // const classes = useStyles();
  constructor() {
    super()
    this.state = {
      value: '',
      postId: 2,
      contents: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEditorChange = this.handleEditorChange.bind(this)
    this.handleEditorSubmit = this.handleEditorSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  // If you'd like your changes to persist (stay in place after page refresh), 
  // you'd want to add your new posts to a database within your reducer function's action handlers.
  handleSubmit(event) {
    alert('Content submitted' /*+ this.state.value*/)
    event.preventDefault()
    this.props.dispatch({
      type: 'ADD_POST',
      payload: { id: this.state.postId, title: this.state.value }
    })

    this.setState({ postId: this.state.postId + 1 })
  }
  
  handleEditorChange(event) {
    this.setState({contents: event})
  }

  handleEditorSubmit(event) {
    alert("Content has been submitted")
    event.preventDefault()
    this.props.dispatch({
      type: 'ADD_POST',
      payload: { id: this.state.postId, title: this.state.contents }
    })
    this.setState({postId: this.state.postId + 1})
  }


  render() {
    return (
      <div>
        <NavDashboard />
        <h1>Introduction Page</h1>


        <b1 className="introduction-part">
          Add/Edit Your Introduction Below:
        </b1>
        <div></div>
        <b2 className="text-editor">
          
            <SunEditor name="my-editor" contents={this.state.value} onChange={this.handleEditorChange} setOptions = {{
            height: 600,
            width: '100%',
            //maxWidth: '1000px',
            buttonList: buttonList.complex,
            placeholder: "Insert your introduction text here..."

          }}/>
          
        </b2>
        <b2 className="second-body">      
        <div>
          <Button type="editor-submit" onClick={this.handleEditorSubmit}>SAVE</Button>
        </div>
        <div>
          {/**<form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
            <textarea rows='15' cols='75' value={this.state.value} onChange={this.handleChange} />
          </form >
          <div>
            <Button type="submit" onClick={this.handleSubmit}>SAVE</Button>
          </div>
          /*//*{/* className={classes.root} *//*}
          
          <h4>
            This is the local state value before it gets "posted": {" "}
            {this.state.value}
          </h4>
          
          <h4>
            This is a map of the "posts" in our redux store: {" "}
            {this.props.posts.map(post => (
              <li key={post.id}>{post.title}</li>
            ))}
          </h4>
            */}
          <h4>
            This is the local state value of suneditor before it gets "posted": 
            <SunEditor
              disable={true}
              setContents={this.state.contents}
              showToolbar={false}
               />
          </h4>
          <h4>
            This is a map of the "posts" in our redux store: {" "}
            {this.props.posts.map(post => (
              <li key={post.id}> <SunEditor
                disable={true}
                showToolbar={false}
                setContents ={post.title}/> </li>
            ))}
          </h4>
          {/* I want to be able to post something even if it's null at first, so when it changes it's there */}
          {/* <h4>
            This is the 3rd object stored in the store:: {" "}
            {this.props.posts[2].title === null}
          </h4> */}
        </div>
        </b2>
      </div>

    )
  }

}

const mapStateToProps = state => {
  return { posts: state.posts }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

// The connect function takes another function as an argument: mapStateToProps. 
// mapStateToProps determines what state from our store we want to pull into our component. 
// In this case, we're specifying to only pull our state's posts property.

export default connect(mapStateToProps, mapDispatchToProps)(Introduction);


// // ********************************************
// // NOT UPDATED. 
// // This was last updated by Tara.
// // We will try to make this work with a ScenarioContext.js context file,
// // after which we should have most of the files / file structures needed to work through everything :)
// // ********************************************
// import React from 'react';
// import './Introduction.css';
// import Nav from '../../Components/Nav'
// // import React, { Component } from 'react';
// //import './Home.css';
// //import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom';
// import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';

// // 10/13 TRY: commented out original Introduction page components. 
// // feel free to revert back if it makes more sense

// // function Introduction() {
// //   return (
// //     <div> 
// //       <Nav/>
// //       <h1>Introduction Page</h1>
// //       <b1 className = "introduction-part">
// //         Add/Edit Your Choice Below:
// //       </b1>  
// //     </div>

// //   );
// // }

// // export default Introduction;

// const useStateWithLocalStorage = localStorageKey => {
//   const [value, setValue] = React.useState(
//     localStorage.getItem(localStorageKey) || ''
//   );

//   React.useEffect(() => {
//     localStorage.setItem(localStorageKey, value);
//   }, [value]);

//   return [value, setValue];
// };

// const Introduction = () => {
//   const [value, setValue] = useStateWithLocalStorage(
//     'myValue4InLocalStorage'
//   );

//   const onChange = event => setValue(event.target.value);

//   const useStyles = makeStyles((theme) => ({
//     root: {
//       margin: theme.spacing(1),
//       marginTop: theme.spacing(4),
//       marginLeft: theme.spacing(4),
//       width: '100ch',
//     },
//   }));

//   const classes = useStyles();

//   return (

//     <div>
//       <Nav />
//       <form className={classes.root} noValidate autoComplete="off">
//         <h1>  Introduction </h1>
//         {/* <b1>  Scenario Title:</b1> */}

//         <TextField
//           multiline
//           fullWidth
//           id="introduction"
//           label="Introduction"
//           variant="outlined"
//           placeholder='Enter introduction here'
//           value={value}
//           onChange={onChange}
//           style={{
//             marginTop: 50
//           }}
//           rows={20}
//           margin="normal"
//           InputLabelProps={{
//             shrink: true
//           }}
//         />
//       </form>


//       <div className={classes.root}>
//         <Button
//           component={Link} to="/player-responses"
//           variant="contained"
//           color="primary"
//           href="#contained-buttons"
//           size='medium'
//           style={{
//             //display: 'right'
//             //marginTop: 10,
//             //marginRight: 100,
//             marginLeft: 1100
//             //marginBottom: 100
//           }}

//         >
//           Submit
//           </Button>
//         {/* <Link to = "/user-agreement">
//                 <Button
//                 size = "custom-submit-button"
//                 variant="outline-secondary"
//                 value = "Submit"
//                 >
//                   Submit
//                 </Button>{' '}
//               </Link> */}
//       </div>


//       {/* <input 
//          className="TRY-type"
//          value={value} 
//          type="text" 
//          onChange={onChange}
//          size = "element.value.length + 1"
//         //  size="TRY-custom-size" */}
//       {/* /> */}
//       {/* <input value={value} type="text" onChange={onChange}/> */}

//     </div>

//   );
// };
// export default Introduction;
