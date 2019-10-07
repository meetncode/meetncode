import React from 'react'
import EventRelated from './EventRelated'
import { Link } from 'react-router-dom'

const EventsRelatedContainer = () => {
	return (
		<div className='events-related'>
			<div className='events-related-header'>
				<h4>Find more related events</h4>
				<Link to='/' className='events-related-see-all'>See all</Link>
			</div>
			<div className='events-related-wrapper'>
				<EventRelated/>
				<EventRelated/>
				<EventRelated/>
			</div>
		</div>
	)
}

export default EventsRelatedContainer
