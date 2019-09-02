import React from 'react'
import EventExplorerID from './EventExplorerIDMutation.graphql';
import { Query } from 'react-apollo'
import GetUserCountry from './EventExplorerlist';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { className } from 'postcss-selector-parser';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0,
    margin: theme.spacing(0, 10),
  },
}));

const EventExplorerRelated =(props)=> {
    console.log(props);
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
              console.log(data);
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
export default EventExplorerRelated