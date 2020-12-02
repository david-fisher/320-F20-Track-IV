import Nav from '../../Components/Nav'
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

import MaterialTable, { MTableBodyRow } from "material-table";
import { Button } from '@material-ui/core';




export default function Matrix() {
  const { useState } = React;

  

  const initialColumns = [
    {
      title: 'Name', field: 'name', backgroundColor: ' #881c1c'
    },
    { title: 'Description', field: 'description' },
  ];

  const [columns, setColumns] = useState(initialColumns);

  const [issue, setIssue] = useState("initial");

  // function handleChange(text) {
  //   console.log("TEXT: " + text.target.value)
  //   setIssue(text);
  //   console.log(issue)
  // }

  function handleChange(event) {
    console.log(event.target.value)
    setIssue(event.target.value);
    // console.log(issue)
  }

  function handleAddIssue (){
    console.log("IN HANDLEADDISSUE: " + issue)
    setColumns(columns.concat({ title: issue, field: issue, type: 'numeric' }));
    // event.preventDefault();
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
        // cellEditable={{
        //   onCellEditApproved: (newValue, oldValue, rowData, columnDef) => {
        //     return new Promise((resolve, reject) => {
        //       console.log('newValue: ' + newValue);
        //       setTimeout(resolve, 1000);
        //     });
        //   }
        // }}


        icons={tableIcons}
      />
    </div >


  )
}



// function NewScenario(props) {

//   function addScenario() {

//     const createdScenario = {
//       "id": 1,
//       "name": name,
//       "due_date": selectedDate,
//       "description": description,
//       "additional_data": additionalData,
//       "status": status,
//     }
//     props.dispatch({
//       type: 'UPDATE_SCENARIO',
//       payload: { ...createdScenario }
//     });
//   }

//   const newScenario = {
//     "id": 1,
//     "name": '',
//     "due_date": '2020-12-01',
//     "description": '',
//     "additional_data": '',
//     "status": 'DRAFT',
//     // "intro": '',
//     // "task": '',
//     // 'init_reflection:': '',
//     // 'init_action': ''
//   }

//   // Might be useful later when editing scenarios, passing the ID and other stuff along as props, etc.
//   // const [scenarioID, setScenarioID] = useState();

//   const [name, setName] = useState(newScenario.name);
//   const [description, setDescription] = useState(newScenario.description);
//   const [additionalData, setAdditionalData] = useState(newScenario.additional_data);
//   const [status, setStatus] = useState(newScenario.status);
//   const [selectedDate, setSelectedDate] = useState(newScenario.due_date);

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

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
//         <h1>  Create New Scenario</h1>
//         {/* <b1>  Scenario Title:</b1> */}
//         <TextField
//           id="title"
//           label="Scenario Title"
//           variant="outlined"
//           placeholder='Enter scenario title here'
//           style={{
//             width: '50ch'
//           }}
//           onChange={e => setName(e.target.value)}
//           margin="dense"
//           InputLabelProps={{
//             shrink: true
//           }}
//         />
//         <TextField
//           multiline
//           fullWidth
//           id="description"
//           label="Scenario Description"
//           variant="outlined"
//           placeholder='Enter scenario description here'
//           onChange={e => setDescription(e.target.value)}
//           style={{
//             marginTop: 75
//           }}
//           rows={10}
//           margin="normal"
//           InputLabelProps={{
//             shrink: true
//           }}
//         />
//         <MuiPickersUtilsProvider utils={DateFnsUtils}>
//           <Grid container justify="space-around">
//             <KeyboardDatePicker
//               disableToolbar
//               variant="inline"
//               format="MM/dd/yyyy"
//               margin="normal"
//               id="date-picker-inline"
//               label="Date picker inline"
//               value={selectedDate}
//               onChange={handleDateChange}
//               KeyboardButtonProps={{
//                 'aria-label': 'change date',
//               }}
//             />
//           </Grid>
//         </MuiPickersUtilsProvider>
//       </form>
//       <div className={classes.root}>
//         <div>
//           <Button
//             component={Link} to="/user-agreement"
//             variant="contained"
//             color="primary"
//             href="#contained-buttons"
//             size='medium'
//             alignItems='right'
//             style={{
//               //marginTop: 10,
//               //marginRight: 100,
//               marginLeft: 1100,
//               //marginBottom: 100
//             }}
//             onClick={addScenario}
//           >
//             Submit
//           </Button>
//         </div>

//       </div>
//     </div>

//   );
// };

// const mapStateToProps = state => {
//   return { scenarios: state.scenarios, token: state.token }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     dispatch
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(NewScenario);
