import React, { useEffect } from 'react';
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
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import MaterialTable from "material-table";
import { Button } from '@material-ui/core';
import Suneditor, { buttonList } from 'suneditor-react';

import AddComment from '@material-ui/icons/AddComment';
import Modal from '@material-ui/core/Modal';

import SimpleModal from '../../Components/Conversation-Modal';
import SunEditor from 'suneditor-react';



function Matrix() {

  const { useState } = React;

  const initialColumns = [
    { title: 'Name', field: 'name', backgroundColor: ' #881c1c' },
    { title: 'Description', field: 'description' },

  ];

  const [open, setOpen] = React.useState(false);

  const [columns, setColumns] = useState(initialColumns);

  const [issue, setIssue] = useState("initial");

  // function handleChange(text) {
  //   console.log("TEXT: " + text.target.value)
  //   setIssue(text);
  //   console.log(issue)
  // }


  function handleClick(event) {
    alert()
  }

  function handleChange(event) {
    console.log(event.target.value)
    setIssue(event.target.value);
  }

  function handleAddIssue() {
    console.log("IN HANDLEADDISSUE: " + issue)
    setColumns(columns.concat({ title: issue, field: issue, type: 'numeric' }));
    console.log(columns.length)
  };

  useEffect(() => {
    console.log("Updated Columns: " + columns.length)
  }, [columns]);

  const tableIcons = {
    PreviousPage: ChevronLeft,
    NextPage: ChevronRight,
    ResetSearch: Clear,
    FirstPage: FirstPage,
    LastPage: LastPage,
    Search: Search,
    Add: AddBox,
    Check: Check,
    Clear: Clear,
    Delete: DeleteOutline,
    DetailPanel: ChevronRight,
    Edit: Edit,
    Export: SaveAlt,
    Filter: FilterList,
    SortArrow: ArrowUpward,
    ThirdStateCheck: Remove,
    ViewColumn: ViewColumn
  };





  // [
  //   { title: 'Name', field: 'name', backgroundColor: ' #881c1c' },
  //   { title: 'Description', field: 'description' },
  //   { title: 'Public Safety Improvement', field: 'publicSafety', type: 'numeric' },
  //   { title: 'User Health Improvement', field: 'userHealth', type: 'numeric' },
  //   { title: 'Career-Building Opportunity', field: 'careerBuilding', type: 'numeric' },
  //   { title: 'Long-Term Company Benefits', field: 'longTerm', type: 'numeric' },
  //   { title: 'Short-Term Company Profits', field: 'shortTerm', type: 'numeric' },
  //   { title: 'Violation of User Privacy', field: 'privacyViolation', type: 'numeric' },
  //   { title: 'ML Misuse Harms Users and Public', field: 'MLharms', type: 'numeric' },
  //   { title: 'ML Misuse Damages Company Reputation', field: 'MLdamages', type: 'numeric' },
  //   { title: 'Project Harms Career', field: 'harmsCareer', type: 'numeric' },]

  // Hard coded data. Need to find how to make this dynamically fetched somehow.
  const [data, setData] = useState([
    {
      name: 'Kokichi',
      description: 'Expert on Cognition medications',
      conversation: 'poggers',
      publicSafety: 0,
      userHealth: 0,
      careerBuilding: 0,
      longTerm: 0,
      shortTerm: 0,
      privacyViolation: 0,
      MLharms: 0,
      MLdamages: 0,
      harmsCareer: 0,
    },
    {
      name: 'Raisa',
      description: 'Neurology/cognition researcher',
      conversation: 'poggers',
      publicSafety: 0,
      userHealth: 0,
      careerBuilding: 0,
      longTerm: 0,
      shortTerm: 0,
      privacyViolation: 0,
      MLharms: 0,
      MLdamages: 0,
      harmsCareer: 0,
    }
  ]);


  const [convo, setConvo] = useState(" ");

  return (

    <div>
      <form noValidate autoComplete="off" >
        <TextField id="standard-basic" label="Standard" onChange={handleChange} />
        <Button variant="contained" color="primary" aria-label="contained primary button group" onClick={handleAddIssue}>
          Add Issue
        </Button>

      </form>

      <MaterialTable
        title="Conversation Matrix"
        columns={columns}

        data={data}
        actions={[{
          icon: AddComment,
          tooltip: "Edit this stakeholder's conversation",
          onClick: (event, rowData) => (alert(rowData.conversation))
        }]}
        options={{
          headerStyle: {
            backgroundColor: '#881c1c',
            color: 'black',
            width: 20
          },
          cellStyle: {
            width: 20
          }
        }
        }
        editable={{
          onColumnAdd: newColumn =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setColumns([...columns, newColumn]);
                resolve();
              }, 1000)
              console.log(columns)
            }),
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);

                resolve();
              }, 1000)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);

                resolve();
              }, 1000)
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);

                resolve()
              }, 1000)
            }),
        }}
        icons={tableIcons}
      />
      <div>
        <SunEditor name="my-editor" value={convo} setOptions={{
          height: 250,
          width: '100%',
          buttonList: [
            ['undo', 'redo'],
            ['font', 'fontSize', 'formatBlock'],
            ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'removeFormat'],
            '/', // Line break
            ['fontColor', 'hiliteColor', 'outdent', 'indent', 'align', 'horizontalRule', 'list', 'table'],
            ['link', 'image', 'video', 'fullScreen', 'showBlocks', 'codeView', 'preview']
          ],
          placeholder: "Insert your introduction text here..."
        }} />
      </div>
    </div >




  )
}

const mapStateToProps = state => {
  // console.log("STATE: " + JSON.stringify(state))
  return {
    scenarioData: state.scenarioReducer,
    pages: state.pagesReducer,
    stakeholders: state.stakeholdersReducer,
    token: state.tokenReducer
  }
}
const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Matrix);