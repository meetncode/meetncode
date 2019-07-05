import React from 'react'
import './CreateGroup.css'
import image from './background.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: '1em',
  }
}));

const CreateGroup = () => {
	const classes = useStyles();
	return (
		<div className="create-group">
			<div className="create-group-wrapper">
				<div className="create-group-info">
					<h3>Take the leap, without the risk</h3>
					<p>Teach your craft, grow a following, or start a movement—without quitting your day job. Use Meetup to reach new audiences and organize local events that will help you take your passion to the next level.</p>
					<Button variant="contained" color="primary" className={classes.button}>Start a group</Button>
					<Button variant="contained" color="primary" className={classes.button}>Learn more</Button>
				</div>
				<div className="create-group-image">
					<img src={image} alt=""/>
				</div>
			</div>
		</div>
	)
}

export default CreateGroup;
