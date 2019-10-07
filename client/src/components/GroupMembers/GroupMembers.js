import React from 'react'

// TODO:: get from backend
const GroupMembers = () =>{
	return (
		<div>
			<div className="group-members-header">
				<h4>Members (3,290)</h4>
				<a href="#" className="link-item">See all</a>
			</div>
			<div className="group-members-avatar">
			<img src="https://randomuser.me/api/portraits/women/60.jpg" alt="" className="member-profile"/>
			<img src="https://randomuser.me/api/portraits/women/61.jpg" alt="" className="member-profile"/>
			<img src="https://randomuser.me/api/portraits/women/62.jpg" alt="" className="member-profile"/>
			<img src="https://randomuser.me/api/portraits/women/63.jpg" alt="" className="member-profile"/>
			<img src="https://randomuser.me/api/portraits/women/64.jpg" alt="" className="member-profile"/>
			<img src="https://randomuser.me/api/portraits/women/65.jpg" alt="" className="member-profile"/>
			<img src="https://randomuser.me/api/portraits/women/66.jpg" alt="" className="member-profile"/>
			</div>
		</div>
	)
}

export default GroupMembers
