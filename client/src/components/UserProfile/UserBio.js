import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import dayjs from 'dayjs'

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: '1em',
  }
}));

const UserBio = (props) => {
	const classes = useStyles();
	const { firstName, lastName, location, createdAt, bio } = props.bio;
	const fullname = `${firstName} ${lastName}`
	return (
		<div>
			<span className="user-bio-header">
				<h3>{fullname}</h3>
			</span>
			<ul>
				<li>
					<strong>Location</strong>
					<p>{location || 'N/A'}</p>
				</li>
				<li>
					<strong>Member Since</strong>
					<p>{dayjs(Number(createdAt)).format('MMMM D YYYY') || 'N/A'}</p>
				</li>
				<li className="social-accounts">
					<strong>Social Profiles</strong>
					<ul className="social-accounts-links">
					<li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
					<li><a href="#"><i className="fab fa-twitter-square"></i></a></li>
					<li><a href="#"><i className="fab fa-linkedin"></i></a></li>
					<li><a href="#"><i className="fas fa-reply"></i></a></li>
					</ul>
				</li>
			</ul>
			{
				bio ?
				<p>{bio}</p>
				:
				<Button variant="contained" color="primary" className={classes.button}>Write something about yourself</Button>
			}
		</div>
	)
}

export default UserBio;
