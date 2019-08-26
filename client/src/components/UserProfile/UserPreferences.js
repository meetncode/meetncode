import React from 'react'
import { Query } from 'react-apollo'

import GET_USER_CATS from './queryGetCategory.graphql';

const UserPreferences = ({categories}) => {
	return (
		<div>
			<div className="header">
				<h3>Interets</h3>
			</div>
			<ul>
				{
					categories ?
					(
						categories.map((category) => {
							const { id } = category
							return <Query query={GET_USER_CATS} variables={{ id }} key={category.id}>
							{({ data, loading, error }) => {
								if (loading) return <p>Loading</p>;
								if (error) return <p>ERROR</p>;
								const userCategory = data.getCategory
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
