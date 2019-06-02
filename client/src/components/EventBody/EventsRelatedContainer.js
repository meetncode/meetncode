import React from 'react'
import EventRelated from './EventRelated'
import { Link } from 'react-router-dom'

const EventsRelatedContainer = () => {
	return (
		<div>
			<div className="events-header">
				<h4>Find more related events</h4>
				<Link to="/">See all</Link>
			</div>
			<div className="events-wrapper">
				<EventRelated/>
				<EventRelated/>
				<EventRelated/>
			</div>
		</div>
	)
}

export default EventsRelatedContainer
