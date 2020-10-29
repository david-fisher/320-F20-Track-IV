// ********************************************
// NOT UPDATED. 
// This was last updated by Tara.
// We will try to make this work with a ScenarioContext.js context file,
// after which we should have most of the files / file structures needed to work through everything :)
// ********************************************


import React, { Component, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Introduction.css';
import NavDashboard from '../../Components/NavDashboard'
// import React, { Component } from 'react';
//import './Home.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  multiText: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));




class Introduction extends Component {

  // const classes = useStyles();
  constructor() {
    super()
    this.state = {
      value: '',
      postId: 2
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }


  // If you'd like your changes to persist (stay in place after page refresh), 
  // you'd want to add your new posts to a database within your reducer function's action handlers.
  handleSubmit(event) {
    alert('Content submitted: ' + this.state.value)
    event.preventDefault()
    this.props.dispatch({
      type: 'ADD_POST',
      payload: { id: this.state.postId, title: this.state.value }
    })
    
    this.setState({ postId: this.state.postId + 1 })
  }


  render() {
    return (
      <div>
        <NavDashboard />
        <h1>Introduction Page</h1>
        <b1 className="introduction-part">
          Add/Edit Your Introduction Below:
        </b1>

        <div>
          <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
            <textarea rows='15' cols='75' value={this.state.value} onChange={this.handleChange} />
          </form >
          <div>
            <Button type="submit" onClick={this.handleSubmit}>SAVE</Button>
          </div>
          <h4>
            {this.state.value}
          </h4>
          <h4>
            {this.props.posts[0].title}
          </h4>
        </div>
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
