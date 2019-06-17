import React, { Component } from 'react'
import GroupAbout from './GroupAbout'
import GroupOrganizer from '../GroupMembers/GroupOrganizer'
import GroupMembers from '../GroupMembers/GroupMembers'
import './GroupAbout.css'

class GroupAboutContainer extends Component {
	render() {
		return (
			<div className="group-about-container">
				<GroupAbout />
				<div className="group-members">
					<GroupOrganizer />
					<GroupMembers />
				</div>
			</div>
		)
	}
}

export default GroupAboutContainer
