import React from 'react'

const UserPreferences = (props) => {
	const { categories } = props
	return (
		<div>
			<div className="header">
				<h3>categories</h3>
			</div>
			<ul>
				{
					categories ?
					(
						categories.map((category, index) => {
							return <li key={index}>{category}</li>
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
