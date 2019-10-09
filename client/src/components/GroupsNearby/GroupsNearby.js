import React from 'react'
import Group from './Group'
import './Groups.css'

// TODO: need to get from backend
const GroupsNearby = () => {
	return (
		<div className='groups-container'>
			<div className='groups-wrapper'>
				<h1>GroupsNearby</h1>
				<ul className='groups-list'>
					<Group></Group>	
					<Group></Group>
					<Group></Group>
					<Group></Group>
				</ul>
			</div>
		</div>
	)
}

export default GroupsNearby
