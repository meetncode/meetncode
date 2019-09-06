import React, { Component } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 0,
        margin: theme.spacing(0, 10),
        background: "#0f1721",
        fontSize: '1.3rem',
        color: 'white',
    },
    link: {
        margin: theme.spacing(1),
        display: 'inline-flex',
      },
    title: {
        display: 'inline-flex',
    },
    search: {
        width: 280,
        display: 'inline-flex',
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        pointerEvents: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        },
        inputRoot: {
        color: 'inherit',
        },
        inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
            width: 200,
            },
        },
    },
}));

const dudUrl = 'http://www.google.com';
const EventExplorerSearch = (props,match) => {
    // console.log(props);

    // console.log(match.params);
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className = {classes.root} position="static">
                <div className={classes.search}>
                    <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    />
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                </div>
                <Typography className={classes.title}>within</Typography>
                <Link href={dudUrl} className={classes.link}>Link</Link>
                <Typography className={classes.title}>of</Typography>
                <Link href={dudUrl} className={classes.link}>Link</Link>
            </div>
        </React.Fragment>
    )
}

export default EventExplorerSearch;