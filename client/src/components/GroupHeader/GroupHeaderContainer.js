import React, { Component } from 'react'
import GroupHeaderBanner from './GroupHeaderBanner'
import GroupHeaderMenu from './GroupHeaderMenu'
import './GroupHeader.css'
import { withRouter } from 'react-router-dom';
import { Query } from 'react-apollo'

import GET_GROUP from './queryGetGroup.graphql';

class GroupHeaderContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
				member: true
		};

}
	render() {
		const { id } = this.props.match.params

		return (
			<Query query={GET_GROUP} variables={{ id }}>
				{({ data, loading, error }) => {
					if (loading) return <p>Loading</p>;
					if (error) return <p>ERROR</p>;
					const group = data.getGroup
					return (
						<div className="group-header-container"> 
							<GroupHeaderBanner group={group}/>
							{/*TODO:: check if current user is a member of the group*/}
							<GroupHeaderMenu member={this.state.member}/>
						</div>
				)
			}}
		</Query>
		)
	}
}

export default withRouter(GroupHeaderContainer)
