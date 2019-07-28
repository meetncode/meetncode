import React from 'react'
import UserPreferencesContainer from './UserPreferencesContainer'
import UserBioContainer from './UserBioContainer';
import './UserProfile.css'

const EditUserProfileContainer = () => {
	return (
		<div className="user-profile-container">
			<UserBioContainer />
			<UserPreferencesContainer />
		</div>
	)
}

export default EditUserProfileContainer;
