import React from 'react'
import UserPreferencesContainer from './UserPreferencesContainer'
import UserBioContainer from './UserBioContainer';
import './UserProfile.css'

const UserProfileContainer = () => {
	return (
		<div className="user-profile-container">
			<UserBioContainer />
			<UserPreferencesContainer />
		</div>
	)
}

export default UserProfileContainer;
