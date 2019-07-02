import React from 'react'
import UpcomingEvents from '../GroupEvents/UpcomingEvents'
import PastEvents from '../GroupEvents/PastEvents'
import GroupSocial from './GroupSocial'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
// import { gql } from 'apollo-boost';
// import { Query } from 'react-apollo';

// const GET_EVENT = gql`
// query Event($id: ID!){
//   getEvent(id: $id){
// 		name,
// 		date,
//     host {
// 			email
// 		},
// 		location {
// 				address
// 		},
// 		attendees {
// 			email,
// 			firstName
// 		}
//   }
// }`;

const GET_UPCOMING_EVENTS = gql`
{
  getEvents(input: {
    isUpcoming: true
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

const GET_PAST_EVENTS = gql`
{
  getEvents(input: {
    isUpcoming: false
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
		console.log(this.props.events)
    this.setState(state => ({
      readMore: !state.readMore
		}))
	}
	// componentDidMount(){
	// 	this.setState({
	// 		upcomingEvents : this.props.events
	// 	})
	// }
	render(){
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
						{/* {
						host?
						console.log('host', host) :
						console.log('name', name)	
						<Query query={GET_EVENT} variables={{ eventId }}>
					} */}
						<Query query={GET_UPCOMING_EVENTS}>
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
