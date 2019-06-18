import React from 'react'
import UpcomingEvents from '../GroupEvents/UpcomingEvents'
import PastEvents from '../GroupEvents/PastEvents'

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
    }));
  }

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
				<UpcomingEvents/>
				<PastEvents/>
			</div>
		)
	}
}

export default GroupAbout
