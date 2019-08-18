import React from 'react'
import UpcomingEvents from '../GroupEvents/UpcomingEvents'
import PastEvents from '../GroupEvents/PastEvents'
import GroupSocial from './GroupSocial'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

import GET_UPCOMING_EVENTS from './queryGetUpcomingEvents.graphql';

const GET_PAST_EVENTS = gql`
{
  getEvents(input: {
    isUpcoming: false,
		groupId: "5d052ee1c5ac64718e2c2803"
  }){
    name,
		date,
    host{
			firstName
		},
		description,
    location{
      address
    }
  }
}`;

const details = 'HLorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sint inventore. Dolorem a fugit laborum consectetur hic! Sit voluptatem obcaecati impedit, tempore inventore quaerat est ipsa, vero consequatur, hic consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sint inventore. Dolorem a fugit laborum consectetur hic! Sit voluptatem obcaecati impedit, tempore inventore quaerat est ipsa, vero consequatur, hic consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sint inventore. Dolorem a fugit laborum consectetur hic! Sit voluptatem obcaecati impedit, tempore inventore quaerat est ipsa, vero consequatur, hic consequuntur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sint inventore. Dolorem a fugit laborum consectetur hic! Sit voluptatem obcaecati impedit, tempore inventore quaerat est ipsa, vero consequatur, hic consequuntur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sint inventore. Dolorem a fugit laborum consectetur hic! Sit voluptatem obcaecati impedit, tempore inventore quaerat est ipsa, vero consequatur, hic consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sint inventore. Dolorem a fugit laborum consectetur hic! Sit voluptatem obcaecati impedit, tempore inventore quaerat est ipsa, vero consequatur, hic consequuntur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sint inventore. Dolorem a fugit laborum consectetur hic! Sit voluptatem obcaecati impedit, tempore inventore quaerat est ipsa, vero consequatur, hic consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sint inventore. Dolorem a fugit laborum consectetur hic! Sit voluptatem obcaecati impedit, tempore inventore quaerat est ipsa, vero consequatur, hic consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sint inventore. Dolorem a fugit laborum consectetur hic! Sit voluptatem obcaecati impedit, tempore inventore quaerat est ipsa, vero consequatur, hic consequuntur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sint inventore. Dolorem a fugit laborum consectetur hic! Sit voluptatem obcaecati impedit, tempore inventore quaerat est ipsa, vero consequatur, hic consequuntur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sint inventore. Dolorem a fugit laborum consectetur hic! Sit voluptatem obcaecati impedit, tempore inventore quaerat est ipsa, vero consequatur, hic consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sint inventore. Dolorem a fugit laborum consectetur hic! Sit voluptatem obcaecati impedit, tempore inventore quaerat est ipsa, vero consequatur, hic consequuntur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sint inventore. Dolorem a fugit laborum consectetur hic! Sit voluptatem obcaecati impedit, tempore inventore quaerat est ipsa, vero consequatur, hic consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sint inventore. Dolorem a fugit laborum consectetur hic! Sit voluptatem obcaecati impedit, tempore inventore quaerat est ipsa, vero consequatur, hic consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sint inventore. Dolorem a fugit laborum consectetur hic! Sit voluptatem obcaecati impedit, tempore inventore quaerat est ipsa, vero consequatur, hic consequuntur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sint inventore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sint inventore. Dolorem a fugit laborum consectetur hic! Sit voluptatem obcaecati impedit, tempore inventore quaerat est ipsa, vero consequatur, hic consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sint inventore. Dolorem a fugit laborum consectetur hic! Sit voluptatem obcaecati impedit, tempore inventore quaerat est ipsa, vero consequatur, hic consequuntur!';

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
		const { id } = this.props;
		return (
					<div className="group-about-wrapper">
						<div>
							<h4>What we're about</h4>
							{
								!this.state.readMore && details.length <= 2100  ?
								<p className="group-details-text">{details} </p> : <p className="group-details-text more-group-details">{details.substring(0,250)}
								<button className="more-group-details-text" onClick={this.handleClick}>Read more</button></p>
							}
						</div>
						<Query
							query={GET_UPCOMING_EVENTS}
							variables={{
								groupId: id
							}}
						>
								{({ data, loading, error }) => {
									if (loading) return <p>Loading</p>;
									if (error) return <p>ERROR</p>;
									const upcomingEvents = data.getEvents
									return (
										<UpcomingEvents upcoming={upcomingEvents}/>
								)
							}}
						</Query>
						<Query query={GET_PAST_EVENTS}>
								{({ data, loading, error }) => {
									if (loading) return <p>Loading</p>;
									if (error) return <p>ERROR</p>;
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
