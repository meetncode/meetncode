import React from 'react'

const GroupOrganizer = () =>{
	return (
		<div>
			<h4>Organizers</h4>
			<div className="organizer-details">
				<img src="https://randomuser.me/api/portraits/women/65.jpg" alt="" className="organizer-profile"/>
				<div className="organizer-actions">
					<p>John Smith and Jane Smith</p>
					<a href="#" className="link-item">Message</a>
				</div>
			</div>
		</div>
	)
}

export default GroupOrganizer

