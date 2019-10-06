import React from 'react'
import { Query } from 'react-apollo'
import PropTypes from 'prop-types'
import GET_USER_GROUPS from './queryGetUserGroups.graphql'

const UserGroups = (props) => {
	const { groups } = props
	return (
		<div>
			<h3>Your Groups</h3>
			<ul className="groups">
			{
				groups.map((group) => {
					const { id } = group
					return <Query query={GET_USER_GROUPS} variables={{ id }} key={group.id}>
					{({ data, loading, error }) => {
						if (loading) return <p>Loading</p>;
						if (error) return <p>ERROR</p>;
						const userGroups = data.getGroup
						return (
							<React.Fragment>
								<li>
									<img src="https://via.placeholder.com/50" alt=""/>
									<h5>{userGroups.name}</h5>
								</li>
							</React.Fragment>
					)
					}}
				</Query>
				})
			}
			</ul>
		</div>
	)
}

UserGroups.propTypes = {
  groups: PropTypes.object
}

export default UserGroups;
