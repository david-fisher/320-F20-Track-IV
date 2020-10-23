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


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  }
}));

export default function ScenarioCard(props) {
  const classes = useStyles();
  const { data } = props;
  const { id, scenarioTitle, className, draft, open, closed } = data;

  return (
    <Grid
      key={id}
      item
      xs
    >
      <Card className={classes.root}>
        <CardActionArea component={Link} to={{
          pathname: "/editor/" + data.id,
          scenarioData: data
        }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {scenarioTitle}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {className}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to={{
            pathname: "/editor/" + data.id,
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
        </CardActions>
      </Card>
    </Grid>
  );
}



