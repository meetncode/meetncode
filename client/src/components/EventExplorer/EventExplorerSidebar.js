import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const EventExplorerSidebar=()=>{
    const classes = useStyles();
    return (
        <Container maxWidth="sm">
            <List component="nav" className={classes.root} aria-label="mailbox folders">
                <ListItem button component={Link} to="/">
                    <ListItemText primary="All upcomming event" />
                </ListItem>
                <Divider />
                <ListItem button component={Link} to="/">
                    <ListItemText primary="Your group and suggestion" />
                </ListItem>
                <ListItem button component={Link} to="/">
                    <ListItemText primary="Your group only" />
                </ListItem>
                <Divider />
                <ListItem button component={Link} to="/">
                    <ListItemText primary="Your event only" />
                </ListItem>
            </List>
            <div className="date-wrapper">
                date
            </div>
            
        </Container>
    )
}
export default EventExplorerSidebar