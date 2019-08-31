import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

  const useStyles = makeStyles(theme => ({
    
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  export default function EventExplorerlist(props) {
    const classes = useStyles();
    const image = 'https://via.placeholder.com/180'
    return (
      <Grid item xs={4}>
        <Paper className={classes.paper}>
          <img src={image} alt=""/>
          <div className="group-name">{props.event.name} </div>
          <div className="titlename">{props.event.description}</div>
          <div className="count-host">5 Friends going</div>
        </Paper>
      </Grid>
    )
  }