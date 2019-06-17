import React from 'react'

export default function GroupHeaderBanner() {
	return (
		<div className="group-header-banner">
			<div className="group-header-banner-image">
				{/* <img src="https://images.unsplash.com/photo-1490487135801-031cf13ab462?ixlib=rb-1.2.1&auto=format&fit=crop&w=2252&q=80" alt=""/> */}
				<img src="https://images.unsplash.com/photo-1554188248-986adbb73be4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt=""/>
			</div>
			<div className="group-header-banner-details">
				<div className="group-details">
				<h3>Group Name</h3>
				<span><i>Location</i> Bangkok, Thailand</span>
				<div className="group-members">
					<span><i>Users</i> 3,725 members</span>
					<span className="group-status">
						Public Group
						<i>Question</i>
					</span>
				</div>
				<span><i>User</i> Organized by John Smith and Jane Smith</span>
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
