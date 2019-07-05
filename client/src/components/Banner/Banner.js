import React from 'react'
import Background from './background.jpg'
import './Banner.css'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: '1em',
  }
}));

const Banner = () => {
	const classes = useStyles();
	return (
		<div style={styles.banner}>
			<h2 className="headline">Lorem Ipsum Dolor Sit Amet</h2>
			<p className="tagline">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
			<div className="call-to-action">
				<Link to="/" className="btn-link"><Button variant="contained" color="primary" className={classes.button}>Get Started</Button></Link>
				<Link to="/" className="btn-link"><Button variant="contained" color="primary" className={classes.button}>Join MeetNCode</Button></Link>
			</div>
		</div>
	)
}

const styles = {
	banner: {
		'background': `url(${Background}) no-repeat`,
		'height': 'calc(100vh - 32em)',
		'backgroundPosition': 'center',
		'backgroundSize': 'cover',
		'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'center',
    'alignItems': 'center'
	}
}

export default Banner;
