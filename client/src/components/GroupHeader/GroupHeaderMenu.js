import React from 'react'
import { Link } from 'react-router-dom'

export default function GroupHeaderMenu(props) {
	const { member } = props
	return (
		<div className="group-header-menu">
			<ul className="group-header-menu-links">
				<li>
					<Link to="/about" className="group-header-menu-link">About</Link>
				</li>
				<li>
					<Link to="/events" className="group-header-menu-link">Events</Link>
				</li>
				<li>
					<Link to="/members" className="group-header-menu-link">Members</Link>
				</li>
				<li>
					<Link to="/photos" className="group-header-menu-link">Photos</Link>
				</li>
				<li>
					<Link to="/discussions" className="group-header-menu-link">Discussions</Link>
				</li>
				<li>
					<Link to="/" className="group-header-menu-link">More</Link>
				</li>
			</ul>

			<div className="group-header-menu-actions">
				{
					member ?
					<button className="btn btn-with-icon">You are a member <span className="down-arrow"><i className="fas fa-chevron-down"></i></span></button>
					: 
					(
						<React.Fragment>
							<button className="btn">Join this group</button>
							<button className="btn">...</button>
						</React.Fragment>
					)
				}
			</div>

		</div>
	)
}
