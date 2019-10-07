import React from 'react'
import PropTypes from 'prop-types'

// TODO:: need to get from backend
const GroupOrganizer = (props) =>{
	return (
		<div>
			<h4>Organizers</h4>
			<div className="organizer-details">
				<img src="https://randomuser.me/api/portraits/women/65.jpg" alt="" className="organizer-profile"/>
				<div className="organizer-actions">
					{/* <p>{props.host}</p> */}
					<p>John Smith and Jane Smith</p>
					<a href="#" className="link-item">Message</a>
				</div>
			</div>
		</div>
	)
}

GroupOrganizer.PropTypes = {
	host: PropTypes.object
}

export default GroupOrganizer

