import React, { Component } from 'react'
import EventBanner from './EventBanner'
import EventExplorerSearch from './EventExplorerSearch'

export default class EventExplorerContainer extends Component {
    render() {
        return (
            <React.Fragment>
                <EventBanner/>
                <EventExplorerSearch/>
            </React.Fragment>
        )
    }
}
