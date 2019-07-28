import React from 'react'
import UserPreferences from './UserPreferences'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
		marginTop: '1em',
		display: 'block',
    maxwidth: '100%',
		margin: '0 auto',
		marginBottom: '1em'
  }
}));

// class UserPreferencesContainer extends React.Component {
// 	// constructor(props) {
// 	// 	super(props);

// 	// 	this.state = {
// 	// 			editing: false
// 	// 	}
// 	// 	this.handleClickEdit = this.handleClickEdit.bind(this);
// 	// }

// 	// handleClickEdit() {
// 	// 	// this.setState({
// 	// 	// 	editing: !this.state.editing
// 	// 	// })
// 	// 	<Redirect to="/"/>
// 	// }
// 	render() {
// 		const classes = useStyles();
// 		return (
// 			<div className="user-preferences">
// 				<Button color="primary" className={classes.button} onClick={this.handleClickEdit}>Edit Profile</Button>
// 				<div className="profile">
// 					<img src="https://via.placeholder.com/180" alt=""/>
// 					<Button variant="outlined" color="primary" className={classes.button}>Remove Photo</Button>
// 				</div>
// 				<UserPreferences />
// 			</div>
// 		)
// 	}
// }

// export default UserPreferencesContainer;

const UserPreferencesContainer = () => {

		const classes = useStyles();
		return (
			<div className="user-preferences">
				<Button color="primary" className={classes.button} >Edit Profile</Button>
				<div className="profile">
					<img src="https://via.placeholder.com/180" alt=""/>
					<Button variant="outlined" color="primary" className={classes.button}>Remove Photo</Button>
				</div>
				<UserPreferences />
			</div>
		)
}

export default UserPreferencesContainer;
