import React from 'react'
import { Link } from 'react-router-dom'

const EventHeaderActions = () => {
	return (
		<div>
			<div className="event-attendance">
				{/*Check if user is already attending*/}
				<p className="event-action-question">Are you going?</p>
				<span className="spots-left">8 spots left</span>
			</div>
			<div className="event-actions">
				<button className="attend">Check</button>
				<button className="skip">Skip</button>
			</div>
			<div className="event-share">
				<p>Share</p>
				<ul className="social-share">
					<li><Link to="/">Facebook</Link></li>
					<li><Link to="/">Twitter</Link></li>
					<li><Link to="/">LinkedIn</Link></li>
					<li><Link to="/">Email</Link></li>
				</ul>
			</div>
		</div>
	)
}
export default EventHeaderActions
