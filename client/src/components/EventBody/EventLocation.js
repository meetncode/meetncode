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

				<div className="event-meeting-place">
					<div className="location-icon"></div>
					<div className="location-details">
						Liberty Island, New York, NY 10004, USA
					</div>
				</div>
			</div>
			<div className="event-location-map">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.279880902552!2d-74.04754703459574!3d40.689833229334354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2508ed1e8d553%3A0x79084fab31e7ed6c!2sLiberty+Island!5e0!3m2!1sen!2sth!4v1559662821977!5m2!1sen!2sth" width="400" height="300" frameborder="0" style={{border:0}} allowfullscreen></iframe>
			</div>
		</div>
	)
}
export default EventLocation
