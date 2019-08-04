import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  button: {
    marginRight: '1em',
  }
}));

const EventHeaderActions = () => {
	const classes = useStyles();
	return (
		<div>
			<div className="event-attendance">
				{/*Check if user is already attending*/}
				<p className="event-action-question">Are you going?</p>
				<span className="spots-left">8 spots left</span>
			</div>
			<div className="event-actions">
				<Button variant="contained" color="primary" className={classes.button}>Attend</Button>
				<Button variant="contained" color="primary" className={classes.button}>Skip</Button>
			</div>
			<div className="event-share">
				<p>Share</p>
				<ul className="social-share">
					<li><Link to="/"><i className="fab fa-facebook-square"></i></Link></li>
					<li><Link to="/"><i className="fab fa-twitter-square"></i></Link></li>
					<li><Link to="/"><i className="fab fa-linkedin"></i></Link></li>
					<li><Link to="/"><i className="fas fa-reply"></i></Link></li>
				</ul>
			</div>
		</div>
	)
}
export default EventHeaderActions
