import React from 'react'

export default function GroupHeaderBanner(props) {
	const {group} = props
	return (
		<div className="group-header-banner">
			<div className="group-header-banner-image">
				{/* <img src="https://images.unsplash.com/photo-1490487135801-031cf13ab462?ixlib=rb-1.2.1&auto=format&fit=crop&w=2252&q=80" alt=""/> */}
				<img src="https://images.unsplash.com/photo-1554188248-986adbb73be4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt=""/>
			</div>
			<div className="group-header-banner-details">
				<div className="group-details">
				<h3>{group.name}</h3>
				<span><i className="fas fa-map-marker-alt"></i> Bangkok, Thailand</span>
				<div className="group-members">
					<span><i className="fas fa-user-friends"></i> {group.members.length} members</span>
					<span className="group-status">
						{
							group.private ?
							'Private Group'
							:
							'Public Group'
						}
						<i className="fas fa-question-circle"></i>
					</span>
				</div>
				<span><i className="fas fa-user"></i> Organized by {group.admin.firstName + ' ' +  group.admin.lastName}</span>
				</div>

				<div className="group-details-share">
				<p>Share</p>
				<ul className="social-share">
					<li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
					<li><a href="#"><i className="fab fa-twitter-square"></i></a></li>
					<li><a href="#"><i className="fab fa-linkedin"></i></a></li>
					<li><a href="#"><i className="fas fa-reply"></i></a></li>
				</ul>
			</div>
			</div>
		</div>
	)
}
