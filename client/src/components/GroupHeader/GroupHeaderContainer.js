import React, { Component } from 'react'
import GroupHeaderBanner from './GroupHeaderBanner'
import GroupHeaderMenu from './GroupHeaderMenu'
import './GroupHeader.css'
// export default class GroupHeaderContainer extends Component {
// 	render() {
// 		return (
// 			<Query query={GET_GROUPDETAILS}>
// 				{({ data, loading, error }) => {
// 					if (loading) return <p>Loading</p>
// 					if (error) return <p>ERROR</p>
// 					const { name, 
// 									admin,
// 									events,
// 									members 
// 								} = data.getGroup
					
// 					const groupHeaderDetails = {
// 						name, 
// 						admin,
// 						events,
// 						members 
// 					}
// 					return (
// 						<div>
// 						<GroupHeaderBanner groupHeaderDetails={groupHeaderDetails}></GroupHeaderBanner>
// 					</div>
// 					)
// 				}}
// 			</Query>
// 		)
// 	}
// }

export default class GroupHeaderContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
				member: true
		}

}
	render() {
		return (
			<div className='group-header-container'> 
				<GroupHeaderBanner />
				<GroupHeaderMenu member={this.state.member}/>
			</div>
		)
	}
}
