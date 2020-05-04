// Write your Character component here

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 30,
    
  },
});

export default function Character(props) {
  const classes = useStyles();


  return (
//     <Grid container spacing={2}  justify="center">
//     <Grid container
//   direction="row"  item xs={3}>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Star Wars
        </Typography>
        <Typography variant="h5" component="h2">
          {props.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Films: {props.films.length}
        </Typography>
        <Typography variant="body2" component="p">
          Height: {props.height}
          <br />
          Mass: {props.mass}
          <br />
          Eye Color: {props.eye_color}
          <br />
          Hair Color: {props.hair_color}
          <br />
          Gender: {props.gender}
          <br />
          Born: {props.birth_year}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={props.url} target="_blank">API</Button>
      </CardActions>
    </Card>
    // </Grid>
    // </Grid>
  );
}
