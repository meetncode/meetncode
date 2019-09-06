import React from 'react'
import { Query } from 'react-apollo'
import EventExplorerlist from './EventExplorerlist';
import Get_Groups_ByUser from './GetByUserIDMutation.graphql';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 0,
      margin: theme.spacing(0, 10),
    },
  }));

 const EventExplorerOwn=(props)=>{
    const classes = useStyles();
    console.log(props.user.id);
    return (
        <div className={classes.root}>
            <Grid container spacing={3} wrap="nowrap">
                <Query query={Get_Groups_ByUser} variables={{userid: props.user.id}} >
                    {({ loading, error, data }) => {
                    if (loading) {
                        return <div>Loading</div>;
                    }
                    if (error) {
                        return <div>error</div>
                    }
                    console.log(data);
                    const Groups = data.getGroups;
                    return (
                        Groups.map((group,index) => {
                        return <EventExplorerlist className="event-wrapper" key={index} event={group}/>
                        })
                    )
                    }
                }
                </Query>
            </Grid>
        </div>
    )
}
export default EventExplorerOwn