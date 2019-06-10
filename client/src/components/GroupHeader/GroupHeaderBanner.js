import React from 'react'

export default function GroupHeaderBanner() {
	return (
		<div>
			<div className="group-header-banner-image">
				<img src="#" alt=""/>
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
