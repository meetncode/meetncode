import React from 'react'
import GroupEvent from './GroupEvent'

export default function UpcomingEvents(props) {
	return (
		<div>
			<div className="group-event-header">
				<h4>Upcoming events (5+)</h4>
				<a href="#">See all</a>
			</div>
			{/* {
				props.upcoming.map((event, index) => {
					return <GroupEvent className="group-event" key={index} event={event}/>
				})
				
			} */}
			<GroupEvent className="group-event"/>
		</div>
	)
}
