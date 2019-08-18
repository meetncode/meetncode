import React from 'react'
import UserBio from './UserBio'
import UserGroups from './UserGroups'

const UserBioContainer = (props) => {
	const { userBio } = props
	const groups = userBio.groups || null
	return (
		<div>
			<UserBio bio={userBio}/>
			<UserGroups groups={groups}/>
		</div>
	)
}

export default UserBioContainer;
