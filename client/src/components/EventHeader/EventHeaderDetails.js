import React from 'react'

const EventHeaderDetails = () => {
	return (
		<div>
			<div className="event-header-date">
				<p className="date">23</p>
				<p className="month">May</p>
			</div>
			<div className="event-header-details">
				<p className="event-date">Thursday, May 23, 2019</p>
				<h3>Frontend Developers - Mentorship Hours</h3>
				<div className="host-information">
					<img src="#" alt="host profile"/>
					<div className="information">
						<p>Hosted by <span className="profile">John Smith</span></p>
						<p>From <span className="group-name">FrontendDevs</span></p>
						<p className="group-status">Public group</p>
					</div>
				</div>
			</div>
		</div>
	)
}
export default EventHeaderDetails
