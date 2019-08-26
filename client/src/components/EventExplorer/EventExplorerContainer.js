import React, { Component } from 'react'
import EventExploreRelated from './EventExplorerRelated'
import EventExplorerSidebar from './EventExplorerSidebar'
import Grid from '@material-ui/core/Grid'

export default class EventExplorerContainer extends Component {
    render() {
        return (
            <Grid container justify="center">
                <Grid item xs={8}> 
                    <EventExploreRelated />
                </Grid>
                <Grid item xs={4}>
                    <EventExplorerSidebar/>
                </Grid>
            </Grid>
        )
    }
}
