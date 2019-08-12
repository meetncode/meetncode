import React from 'react'

const UserGroups = (props) => {
	// TODO:: Query groups here and get group info
	const { groups } = props
	console.log(groups)
	return (
		<div>
			<h3>Your Groups</h3>
			<ul className="groups">
				<li>
					<img src="https://via.placeholder.com/50" alt=""/>
					<h5>Group Name</h5>
				</li>
				<li>
					<img src="https://via.placeholder.com/50" alt=""/>
					<h5>Group Name</h5>
				</li>
				<li>
					<img src="https://via.placeholder.com/50" alt=""/>
					<h5>Group Name</h5>
				</li>
				<li>
					<img src="https://via.placeholder.com/50" alt=""/>
					<h5>Group Name</h5>
				</li>
				<li>
					<img src="https://via.placeholder.com/50" alt=""/>
					<h5>Group Name</h5>
				</li>
			</ul>
		</div>
	)
}

export default UserGroups;
