import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  }
}));



export default function ScenarioCard(props) {
  const classes = useStyles();
  const { data } = props;
  const { id, name, due_date, description, additional_data, status } = data;

  // const [state, setState] = React.useState({
  //   age: '',
  //   name: 'hai',
  // });

  const handleChange = (event) => {
    // const newStatus = event.target.name;
    // setState({
    //   ...state,
    //   [name]: event.target.value,
    // });
    // data.status = newStatus;


  };

  return (
    <Grid
      key={id}
      item
      xs
    >
      <Card raised='true' className={classes.root}>
        <CardActionArea component={Link} to={{
          pathname: "/editor/" + data.id,
          scenarioData: data
        }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* THIS SENDS THE DATA FROM THE PROPER SCENARIO TO THE INTRO-HUB. SAME GOES WITH RESULTS.
          MAKE SURE THAT THE DATA IS PROPERLY HANDLED / PASSED DOWN IN THE FUTURE PAGES. */}
          <Button size="small" color="primary" component={Link} to={{
            pathname: "/introduction-hub/" + data.id,
            scenarioData: data
          }}>
            Edit
          </Button>
          <Button size="small" color="primary">
            Delete
          </Button>

          <Button size="small" color="primary" component={Link} to={{
            pathname: "/data/" + data.id,
            scenarioData: data
          }}>
            Data
          </Button>
          <FormControl className={classes.formControl}>
            <NativeSelect
              className={classes.selectEmpty}
              value={data.status}
              name="age"
              onChange={handleChange}
              inputProps={{ 'aria-label': 'age' }}
            >
              <option value={data.status} disabled>
                {data.status}
          </option>
              <option value={'draft'}>Draft</option>
              <option value={'open'}>Open</option>
              <option value={'closed'}>Closed</option>
            </NativeSelect>
            <FormHelperText>Condition</FormHelperText>
          </FormControl>
        </CardActions>
      </Card>
    </Grid>
  );
}
