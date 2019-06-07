import React, { Component } from 'react'
import EventDetails from './EventDetails'
import EventLocation from './EventLocation'
import EventsRelatedContainer from './EventsRelatedContainer'
import './EventBody.css'
	
export default class EventBodyContainer extends Component {
	render() {
		return (
			<div className="event-body-container">
				<div className="event-body-wrapper">
					<EventDetails></EventDetails>
					<EventLocation></EventLocation>
					<EventsRelatedContainer></EventsRelatedContainer>
				</div>
			</div>
		)
	}
}
