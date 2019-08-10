import React from 'react'
import UserPreferencesContainer from './UserPreferencesContainer'
import UserBioContainer from './UserBioContainer';
import './UserProfile.css'
import { withRouter } from 'react-router-dom';
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const token = localStorage.getItem('token')
const GET_USER = gql`
{
  getUser(input: {
		id: "5d2f387c885d7512ee803b74"
  }){
    firstName,
    email
  }
}`;
class UserProfileContainer extends React.Component {
	componentDidMount(){
		console.log(this.props.history)
		const { id } = this.props.match.params
		console.log('token', token)
	}
	render(){
		return (
			<div className="user-profile-container">
				<Query query={GET_USER}>
						{({ data, loading, error }) => {
							if (loading) return <p>Loading</p>;
							if (error) return <p>ERROR</p>;
							// const userData = data.getUser
							return (
								<React.Fragment>
									<UserBioContainer />
									<UserPreferencesContainer />
								</React.Fragment>
						)
					}}
				</Query>
			</div>
		)
	}
}

export default withRouter(UserProfileContainer);
// export default UserProfileContainer;
