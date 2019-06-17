import React from 'react'
import GroupEvent from './GroupEvent'

export default function UpcomingEvents() {
	return (
		<div>
			<div className="past-events-header">
				<h4>Upcoming events (5+)</h4>
				<a href="#">See all</a>
			</div>
			<GroupEvent />
			<GroupEvent />
			<GroupEvent />
		</div>
	)
}
