import React from 'react'
import EventDetails from './EventDetails'
import EventLocation from './EventLocation'
import EventsRelatedContainer from './EventsRelatedContainer'

const EventBodyContainer = () => {
	return (
		<div>
			<EventDetails></EventDetails>
			<EventLocation></EventLocation>
			<EventsRelatedContainer></EventsRelatedContainer>
		</div>
	)
}
export default EventBodyContainer
