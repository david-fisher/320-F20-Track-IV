import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const row = (x, i, header) =>
    <TableRow key={'tr-${i}'}>
        {
            header.map((y, k) => 
            <TableRow key={'trc-${k}'}>
                {x[y.prop]}
            </TableRow>
            )}
    </TableRow>;

export default ({ data, header}) =>
//   const classes = useStyles();

//   return (
    <TableContainer component={Paper}>
      <Table 
     // className={classes.table} 
      aria-label="simple table">
        <TableHead>
          <TableRow>
              {
                  header.map((x, i) => 
                  <TableCell key={'thc-${i}'}>{x.name}</TableCell>)
                // <TableHead key={'thc-${i}'}>{x.name}</TableHead>)
              }
            
            {/* <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
            {data.map((x, i) => row(x, i, header))}
          {/* {rows.map((row) => (
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
//   );
// }
