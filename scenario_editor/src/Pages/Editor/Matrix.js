import Nav from '../../Components/Nav'

import React, { Component, useState, useEffect } from 'react';
import Suneditor, {buttonList, table} from 'suneditor-react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import FirstPage from '@material-ui/icons/FirstPage';
import Search from '@material-ui/icons/Search';
import Clear from '@material-ui/icons/Clear';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import LastPage from '@material-ui/icons/LastPage';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import ViewColumn from '@material-ui/icons/ViewColumn';

import MaterialTable, { MTableBodyRow } from "material-table";




class Matrix extends Component{

  constructor() {
    super()
    this.state = {
      value: '',
      scenarioID: 2,
      contents: '',
      scenario_title: localStorage.getItem("RS_SCENARIO__title"),
      scenario_desc: localStorage.getItem("RS_SCENARIO__description"),
      scenario_ua: localStorage.getItem("RS_SCENARIO__user_agreement"),
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.handleEditorSubmit = this.handleEditorSubmit.bind(this);
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
      type: 'ADD_SCENARIO',
      payload: { id: this.state.scenarioID, title: this.state.value }
    })

    this.setState({ scenarioID: this.state.scenarioID + 1 })
  }

  handleEditorChange(event) {
    this.setState({contents: event})
  }

  handleEditorSubmit(event) {
    // alert("Content has been submitted")
    // const headers = {
    //   'Authorization': `Bearer ${this.props.token}`,
    //   'Accept': 'application/json'
    // }
    // event.preventDefault();
    // axios.post(`/api/v1/simulation/create`, {
    //   simulation_title: this.state.scenario_title,
    //   simulation_desc: this.state.scenario_desc,
    //   simulation_introduction: this.state.contents,
    //   simulation_ua: this.state.scenario_ua
    // }, {headers: headers}).then(res => {
    //   // debugger;
    //   alert(`Simulation ID: ${res.data.simulation_id}`)
    // });

    // this.props.dispatch({
    //   type: 'ADD_SCENARIO',
    //   payload: { id: this.state.scenarioID, title: this.state.contents }
    // });
    // this.setState({scenarioID: this.state.scenarioID + 1})
  }


  render(){
    return (
      <div>
        <Nav />
        <div>
          <h1>
            Stakeholder Matrix
          </h1>
        </div>
        <b1 className ="Matrix-header">
          Edit your Stakeholder Matrix here:
        </b1>
        <b2 className="text-editor">

{/* Right now the main question is; how do we create a default table, and how do we only render this
    table while making sure that we don't accidentally break the page itself?
    We also have to make sure the customer doesn't break it by inputting something incorrectly
    Would we have to create a checker to make sure it followed a format that we can give to the backend team? */}
          <SunEditor name="my-editor" contents={this.state.value} onChange={this.handleEditorChange} setOptions = {{
            height: 600,
            width: '100%',
            //maxWidth: '1000px',
            buttonList: buttonList.complex
            // plugins: [table]

          }}/>
        </b2>
      </div>
    )
  }
}

export default Matrix;
