import React from 'react';
import Nav from '../../Components/Nav'

import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Matrix from './Matrix'


const Stakeholders = () => {

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
      <Nav />
      <form className={classes.root} noValidate autoComplete="off">
        <h1>  Stakeholders </h1>
      </form>


      <div className={classes.root}>
    {/* Empty now. Previously incldued the Conversation Matrix button that linked to /matrix */}
      </div>

      <div>
        <Matrix></Matrix>
      </div>

    </div>

  );
};
export default Stakeholders;

