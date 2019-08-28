import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
    },

  }));
  export default function EventExplorerlist(props) {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                  <div className="event-time">1 pm</div>
              </Grid>
              <Grid item xs={8}>
                  <div className="group-name">{props.event.name} </div>
                  <div className="titlename">{props.event.description}</div>
                  <div className="count-host">5 Friends going</div>
              </Grid>
            </Grid>
        </Paper>
    )
  }