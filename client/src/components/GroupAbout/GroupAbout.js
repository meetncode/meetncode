import React from 'react'
import UpcomingEvents from '../GroupEvents/UpcomingEvents'
import PastEvents from '../GroupEvents/PastEvents'
import GroupSocial from './GroupSocial'
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

const details = 'HLorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sint inventore. Dolorem a fugit laborum consectetur hic! Sit voluptatem obcaecati impedit, tempore inventore quaerat est ipsa, vero consequatur, hic consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sint inventore. Dolorem a fugit laborum consectetur hic! Sit voluptatem obcaecati impedit, tempore inventore quaerat est ipsa, vero consequatur, hic consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sint inventore. Dolorem a fugit laborum consectetur hic! Sit voluptatem obcaecati impedit, tempore inventore quaerat est ipsa, vero consequatur, hic consequuntur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sint inventore. Dolorem a fugit laborum consectetur hic! Sit voluptatem obcaecati impedit, tempore inventore quaerat est ipsa, vero consequatur, hic consequuntur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sint inventore. Dolorem a fugit laborum consectetur hic! Sit voluptatem obcaecati impedit, tempore inventore quaerat est ipsa, vero consequatur, hic consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sint inventore. Dolorem a fugit laborum consectetur hic! Sit voluptatem obcaecati impedit, tempore inventore quaerat est ipsa, vero consequatur, hic consequuntur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sint inventore. Dolorem a fugit laborum consectetur hic! Sit voluptatem obcaecati impedit, tempore inventore quaerat est ipsa, vero consequatur, hic consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sint inventore. Dolorem a fugit laborum consectetur hic! Sit voluptatem obcaecati impedit, tempore inventore quaerat est ipsa, vero consequatur, hic consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sint inventore. Dolorem a fugit laborum consectetur hic! Sit voluptatem obcaecati impedit, tempore inventore quaerat est ipsa, vero consequatur, hic consequuntur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sint inventore. Dolorem a fugit laborum consectetur hic! Sit voluptatem obcaecati impedit, tempore inventore quaerat est ipsa, vero consequatur, hic consequuntur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sint inventore. Dolorem a fugit laborum consectetur hic! Sit voluptatem obcaecati impedit, tempore inventore quaerat est ipsa, vero consequatur, hic consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sint inventore. Dolorem a fugit laborum consectetur hic! Sit voluptatem obcaecati impedit, tempore inventore quaerat est ipsa, vero consequatur, hic consequuntur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sint inventore. Dolorem a fugit laborum consectetur hic! Sit voluptatem obcaecati impedit, tempore inventore quaerat est ipsa, vero consequatur, hic consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sint inventore. Dolorem a fugit laborum consectetur hic! Sit voluptatem obcaecati impedit, tempore inventore quaerat est ipsa, vero consequatur, hic consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sint inventore. Dolorem a fugit laborum consectetur hic! Sit voluptatem obcaecati impedit, tempore inventore quaerat est ipsa, vero consequatur, hic consequuntur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sint inventore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sint inventore. Dolorem a fugit laborum consectetur hic! Sit voluptatem obcaecati impedit, tempore inventore quaerat est ipsa, vero consequatur, hic consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, sint inventore. Dolorem a fugit laborum consectetur hic! Sit voluptatem obcaecati impedit, tempore inventore quaerat est ipsa, vero consequatur, hic consequuntur!';

class GroupAbout extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
				readMore: false,
				eventIds: []
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		console.log(this.props.events)
    this.setState(state => ({
      readMore: !state.readMore
		}))
	}
	componentDidMount(){
		this.setState({
			eventIds : this.props.events
		})
	}
	render(){
		// const eventId = {id: '5d062fbbd5704179959c7979'}
		// const eventId = '5d062fbbd5704179959c7979'
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
						{/* <Query query={GET_EVENT} variables={{ eventId }}>
								{({ data, loading, error }) => {
									if (loading) return <p>Loading</p>;
									if (error) return <p>ERROR</p>;
									const { name, host, location } = data.getEvent
									const event = {
										name, host, location
									}
									return (
										<UpcomingEvents upcoming={event}/>
								)
							}}
							</Query> */}
						{/* <UpcomingEvents upcoming={this.props.events}/> */}
						<UpcomingEvents/>
						<PastEvents/>
						<GroupSocial/>
					</div>
		)
	}
}

export default GroupAbout
