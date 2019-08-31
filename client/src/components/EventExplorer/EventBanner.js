import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 0,
        background: "#00455d",
        padding: "32px 0 48px 0",
        fontSize: '1.3rem',
        color: 'white',
    },
  }));

export default function EventBanner() {
    const classes = useStyles();
    return (
        <Typography component="section" variant="caption" align="center" classes={{root: classes.root}}>
            <Box component="h2" p={0} m={0}>
                Find your next event
            </Box>
            <Box component="p">
            1557 events near you
            </Box>
        </Typography>  
    )
}
