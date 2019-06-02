import React from 'react'

const EventLocation = () => {
	return (
		<div>
			<div className="event-meetings-details">
				<div className="clock-icon"></div>
				<div className="details">
					<p className="event-date">Thursday, May 23, 2019</p>
					<p className="event-time">3:00 PM to 9:00 PM</p>
					<p className="event-schedule">Every week Thursday</p>
					<p className="add-event-to-calendar">Add to calendar</p>
				</div>
			</div>

			<div className="event-meeting-place">
				<div className="location-icon"></div>
				<div className="location-details">
					Liberty Island, New York, NY 10004, USA
				</div>
			</div>

			<div className="event-location-map">
				{/*Add Map*/}
			</div>
		</div>
	)
}
export default EventLocation
