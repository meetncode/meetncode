import React from 'react'

const EventHeaderDetails = () => {
	return (
		<div className="event-header-details">
			<div className="event-header-date">
				<p className="date">23</p>
				<p className="month">May</p>
			</div>
			<div className="event-header-details-expand">
				<p className="event-date">Thursday, May 23, 2019</p>
				<h3 className="event-group-name">Frontend Developers - Mentorship Hours</h3>
				<div className="host-information">
					<div className="host-photo">
						<img src="https://randomuser.me/api/portraits/women/85.jpg" alt="host profile"/>
					</div>
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
