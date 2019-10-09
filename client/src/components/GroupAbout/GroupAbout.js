import React from 'react'
import UpcomingEvents from '../GroupEvents/UpcomingEvents'
import PastEvents from '../GroupEvents/PastEvents'
import GroupSocial from './GroupSocial'
import { Query } from 'react-apollo'

import GET_UPCOMING_EVENTS from './queryGetUpcomingEvents.graphql';
import GET_PAST_EVENTS from './queryGetPastEvents.graphql';
import GET_GROUP from './queryGetGroup.graphql'

class GroupAbout extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
				readMore: false
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
    this.setState(state => ({
      readMore: !state.readMore
		}))
	}

	render(){
		const { group } = this.props;
		return (
					<div className="group-about-wrapper">
						<div>
							<h4>What we're about</h4>
							{
								!this.state.readMore && group.description.length <= 2100  ?
								<p className="group-details-text">{group.description} </p> : <p className="group-details-text more-group-details">{group.description.substring(0,250)}
								<button className="more-group-details-text" onClick={this.handleClick}>Read more</button></p>
							}
						</div>
						{/* <Query
							query={GET_GROUP}
							variables={{
								id
							}}
						>
								{({ data, loading, error }) => {
									if (loading) return <p>Loading</p>;
									if (error) return <p>ERROR</p>;
									const group = data.getGroup
									return (
										<div>
											<h4>What we're about</h4>
											{
												!this.state.readMore && group.description.length <= 2100  ?
												<p className="group-details-text">{group.description} </p> : <p className="group-details-text more-group-details">{group.description.substring(0,250)}
												<button className="more-group-details-text" onClick={this.handleClick}>Read more</button></p>
											}
										</div>
								)
							}}
						</Query> */}


						<Query
							query={GET_UPCOMING_EVENTS}
							variables={{
								groupId: id
							}}
						>
								{({ data, loading, error }) => {
									if (loading) return <p>Loading</p>;
									// if (error) return <p>ERROR</p>;
									if (error) return <UpcomingEvents />;
									const upcomingEvents = data.getEvents
									return (
										<UpcomingEvents upcoming={upcomingEvents}/>
								)
							}}
						</Query>
						<Query query={GET_PAST_EVENTS} variables={{
								groupId: id
							}}>
								{({ data, loading, error }) => {
									if (loading) return <p>Loading</p>;
									// if (error) return <p>ERROR</p>;
									if (error) return <PastEvents/>
									const pastEvents = data.getEvents
									return (
										<PastEvents past={pastEvents}/>
								)
							}}
						</Query>
						<GroupSocial/>
					</div>
		)
	}
}

export default GroupAbout
