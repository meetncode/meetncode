import React from 'react'
import Event from './Event'
import './Events.css'

// TODO: get from backend
const EventsNearby = () => {
	return (
		<div className='events-container'>
			<div className='events-wrapper'>
				<h1>EventsNearby</h1>
				<ul className='events-list'>
					<Event></Event>
					<Event></Event>
				</ul>
			</div>
		</div>
	)
}

export default EventsNearby
