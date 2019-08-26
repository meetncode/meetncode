import React from 'react'
import UserPreferences from './UserPreferences'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  button: {
		marginTop: '1em',
		display: 'block',
    maxwidth: '100%',
		margin: '0 auto',
		marginBottom: '1em'
  }
}));

const UserPreferencesContainer = (props) => {
	const classes = useStyles();
	const { categories, id } = props.userPrefs;

	return (
		<div className="user-preferences">
			<Link to ={`/edit/members/${id}/`}>Edit Profile</Link>
			<div className="profile">
				<img src="https://via.placeholder.com/180" alt=""/>
				<Button variant="outlined" color="primary" className={classes.button}>Remove Photo</Button>
			</div>
			<UserPreferences categories={categories}/>
		</div>
	)
}

export default UserPreferencesContainer;
