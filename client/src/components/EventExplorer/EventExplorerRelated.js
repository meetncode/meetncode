import React from 'react'
import EventExplorerID from './EventExplorerIDMutation.graphql';
import { Query } from 'react-apollo'
import EventExplorerlist from './EventExplorerlist';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { className } from 'postcss-selector-parser';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0,
    margin: theme.spacing(0, 10),
  },
}));

function EventExplorerRelated() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Grid container spacing={3} wrap="nowrap">
          <Query query={EventExplorerID}>
            {({ loading, error, data }) => {
              if (loading) {
                return <div>Loading</div>;
              }
              
              if (error) {
                  return <div>error</div>
              }
              console.log(data);
              const Events = data.getEvents;
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
export default EventExplorerRelated