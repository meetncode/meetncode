import React from 'react'
import UserBio from './UserBio'
import UserGroups from './UserGroups'
import PropTypes from 'prop-types'

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

UserBioContainer.propTypes = {
  userBio: PropTypes.object
}

export default UserBioContainer
