import React from 'react'
import EventHeaderActions from './EventHeaderActions'
import EventHeaderDetails from './EventHeaderDetails'
import './EventHeader.css'

const EventHeaderContainer = () => {
	return (
		<div className='event-header-container'>
			<div className='event-header-wrapper'>
				<EventHeaderDetails></EventHeaderDetails>
				<EventHeaderActions></EventHeaderActions>
				</div>
		</div>
	)
}
export default EventHeaderContainer
