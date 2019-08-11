import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: '1em',
  }
}));

const UserBio = () => {
	const classes = useStyles();
	// const { firstname, lastname, location, createdAt } = this.PaymentResponse;
	// const fullname = `${firstname} ${lastname}`
	return (
		<div>
			<span className="user-bio-header">
				<h3>John Smith</h3>
				{/* <h3>{fullname}</h3> */}
			</span>
			<ul>
				<li>
					<strong>Location</strong>
					<p>Gnjkmas</p>
				</li>
				<li>
					<strong>Member Since</strong>
					<p>Gnjkmas</p>
					{/* <p>{createdAt}</p> */}
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
			{/* {
				UserBio ?
				<p>{userbio}</p>
				:
				<Button variant="contained" color="primary" className={classes.button}>Write something about yourself</Button>
			} */}
		</div>
	)
}

export default UserBio;
