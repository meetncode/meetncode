import React from 'react'
import { Query } from 'react-apollo'
import EventExplorerlist from './EventExplorerlist';
import GetUserCountry from './EventExplorerIDMutation.graphql';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0,
    margin: theme.spacing(0, 10),
  },
}));

const EventExplorerRelated =(prop)=> {
    // console.log(prop);
    const classes = useStyles();
    const { country } = "Thailand";
    return (
      <div className={classes.root}>
        <Grid container spacing={3} wrap="nowrap">
          <Query query={GetUserCountry} variables={{country}} >
            {({ loading, error, data }) => {
              if (loading) {
                return <div>Loading</div>;
              }
              if (error) {
                  return <div>error</div>
              }
              const Events = data.getGroupsByLocation;
              return (
                Events.map((event,index) => {
                  return <EventExplorerlist className="event-wrapper" key={index} event={event}/>
                })
              )
            }
          }
          </Query>
        </Grid>
      </div>
    )
}
export default withRouter(EventExplorerRelated)