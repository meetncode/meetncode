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
				<button className="attend btn">Check</button>
				<button className="skip btn">Skip</button>
			</div>
			<div className="event-share">
				<p>Share</p>
				<ul className="social-share">
					<li><Link to="/"><i className="fab fa-facebook-square"></i></Link></li>
					<li><Link to="/"><i className="fab fa-twitter-square"></i></Link></li>
					<li><Link to="/"><i className="fab fa-linkedin"></i></Link></li>
					<li><Link to="/"><i className="fas fa-reply"></i></Link></li>
				</ul>
			</div>
		</div>
	)
}
export default EventHeaderActions
