import React from 'react'
import UserPreferencesContainer from './UserPreferencesContainer'
import UserBioContainer from './UserBioContainer'
import './UserProfile.css'
import { withRouter } from 'react-router-dom'
import { Query } from 'react-apollo'

import GET_USER_BIO from './queryGetUserBio.graphql'
import GET_USER_PREFS from './queryGetUserPrefs.graphql'

class UserProfileContainer extends React.Component {
	render(){
		const { id } = this.props.match.params
		return (
			<div className="user-profile-container">
				<Query query={GET_USER_BIO} variables={{ id }}>
						{({ data, loading, error }) => {
							if (loading) return <p>Loading</p>
							if (error) return <p>ERROR</p>
							const userBio = data.getUser
							return (
								<UserBioContainer userBio={userBio}/>
						)
					}}
				</Query>
				<Query query={GET_USER_PREFS} variables={{ id }}>
						{({ data, loading, error }) => {
							if (loading) return <p>Loading</p>
							if (error) return <p>ERROR</p>
							const userPrefs = data.getUser
							return (
								<UserPreferencesContainer userPrefs={userPrefs}/>
						)
					}}
				</Query>
			</div>
		)
	}
}

export default withRouter(UserProfileContainer)
// export default UserProfileContainer
