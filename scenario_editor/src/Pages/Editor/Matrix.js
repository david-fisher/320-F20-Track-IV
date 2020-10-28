import Nav from '../Components/Nav'
import React from 'react';
import FirstPage from '@material-ui/icons/FirstPage';
import Search from '@material-ui/icons/Search';
import Clear from '@material-ui/icons/Clear';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import LastPage from '@material-ui/icons/LastPage';

import MaterialTable, { MTableBodyRow } from "material-table";

export default function CellEditable() {
  const { useState } = React;

  const tableIcons = {
    PreviousPage: ChevronLeft,
    NextPage: ChevronRight,
    ResetSearch: Clear,
    FirstPage: FirstPage,
    LastPage: LastPage,
    Search: Search,
  };
  const [columns, setColumns] = useState([
    { title: 'Name', field: 'name', backgroundColor:' #881c1c'},
    { title: 'Description', field: 'description', initialEditValue: 'initial edit value' },
    { title: 'Public Safety Improvement', field: 'publicSafety', type: 'numeric' },
    { title: 'User Health Improvement', field: 'userHealth', type: 'numeric' },
    { title: 'Career-Building Opportunity', field: 'careerBuilding', type: 'numeric' },
    { title: 'Long-Term Company Benefits', field: 'longTerm', type: 'numeric' },
    { title: 'Short-Term Company Profits', field: 'shortTerm', type: 'numeric' },
    { title: 'Violation of User Privacy', field: 'privacyViolation', type: 'numeric' },
    { title: 'ML Misuse Harms Users and Public', field: 'MLharms', type: 'numeric' },
    { title: 'ML Misuse Damages Company Reputation', field: 'MLdamages', type: 'numeric' },
    { title: 'Project Harms Career', field: 'harmsCareer', type: 'numeric' },
    // {
      
    //   title: 'Description',
    //   field: 'birthCity',
    //   lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
    // },
  ]);

  const [data, setData] = useState([
    { name: 'Kokichi', 
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
  { name: 'Raisa', 
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
    <MaterialTable
      title="Conversation Matrix"

     columns={columns}
    //  columns={[
    //   {
    //     title: 'Name', field: 'name',
    //     cellStyle: {
    //       backgroundColor: '#881c1c',
    //       color: 'white'
    //     },
    //     headerStyle: {
    //       backgroundColor: ' #881c1c',
    //       color: 'white'
    //     }
    //   },
    //   { title: 'Surname', field: 'surname' },
    //   { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
    //   {
    //     title: 'Birth Place',
    //     field: 'birthCity',
    //     lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
    //   },
    // ]}
      data={data}
      options={{
        headerStyle: {
          backgroundColor: '#881c1c',
          color: 'black'
        } 
      }
    }
      cellEditable={{
        onCellEditApproved: (newValue, oldValue, rowData, columnDef) => {
          return new Promise((resolve, reject) => {
            console.log('newValue: ' + newValue);
            setTimeout(resolve, 1000);
          });
        }
      }}
    icons={tableIcons}
    />
  )
}
