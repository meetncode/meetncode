import React from 'react'
import Button from '@material-ui/core/Button';

const Event = () => {
	return (
		<div className="event">
			<p className="event-date-time"><strong>Fri, May 24, 9:00PM</strong></p>
			<p className="event-title"><strong>Founders Monthly - Thailand</strong></p>
			<p className="group-name">TechGrind</p>
			<p className="event-location">Needs a location</p>
			<div className="event-attend">
				<p className="event-attendees">10 attendees</p>
				<Button variant="contained">Attend</Button>
			</div>
		</div>
	)
}

export default Event;
