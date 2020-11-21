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

export default function NavDashboard() {
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
                    <u1 className="nav-links">
                        <Link to="/home">
                            <li>Home</li>
                        </Link>
                        <Link to="/introduction-hub">
                            <li>Introduction</li>
                        </Link>
                        <Link to="/player-responses" >
                            <li>Player Responses</li>
                        </Link>
                        <Link to="/conversations">
                            <li>Conversations </li>
                        </Link>
                        <Link to="/conclusions">
                            <li>Conclusions </li>
                        </Link>
                        <Link to="/build">
                            <li>Build</li>
                        </Link>

                    </u1>
                </Toolbar>
            </AppBar>

        </div>
    );
}
