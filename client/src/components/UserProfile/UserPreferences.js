import React from 'react'
import { Query } from 'react-apollo'

import GET_USER_CATS from './queryGetUserInterests.graphql';

const UserPreferences = (props) => {
	const { categories } = props
	return (
		<div>
			<div className="header">
				<h3>Interets</h3>
			</div>
			<ul>
				{
					categories ?
					(
						categories.map((category, index) => {
							const { id } = category
							return <Query query={GET_USER_CATS} variables={{ id }} key={category.id}>
							{({ data, loading, error }) => {
								if (loading) return <p>Loading</p>;
								if (error) return <p>ERROR</p>;
								const userCategory = data.getCategory
								console.log(userCategory)
								return (
									<React.Fragment>
										<li>
											{userCategory.name}
										</li>
									</React.Fragment>
								)
							}
						}
						</Query>
						})
					)
					: 
					'No interests selected'
				}
			</ul>
		</div>
	)
}

export default UserPreferences;
