import React, { Component } from 'react'
import GroupAbout from './GroupAbout'
import GroupOrganizer from '../GroupMembers/GroupOrganizer'
import GroupMembers from '../GroupMembers/GroupMembers'
import './GroupAbout.css'

class GroupAboutContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
				eventIds: [],
				id: ''
		}
	}
	componentDidMount(){
		// this.setState({
		// 	eventIds : this.props.events
		// })
		// this.setState({
		// 	id : this.props.id
		// })
	}
	render() {
		return (
			<div className="group-about-container">
				{/* <GroupAbout events={this.state.eventIds}/> */}
				<GroupAbout id={this.props.id}/>
				<div className="group-members">
					<GroupOrganizer />
					<GroupMembers />
				</div>
			</div>
		)
	}
}

export default GroupAboutContainer
