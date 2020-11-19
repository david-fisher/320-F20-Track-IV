import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core/';
import { Link } from 'react-router-dom';
import HomeIcon from "../Images/home-icon.png";
import './Nav.css';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "100%",
        margin: theme.spacing(0),
        padding: theme.spacing(0),
        
    },
}
));

export default function NavHome() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <h3>
                        <Link to="/home">
                            <img src={HomeIcon} alt="Return to home page" />
                        </Link>
                    </h3>
                </Toolbar>
            </AppBar>

        </div>
    );
}
