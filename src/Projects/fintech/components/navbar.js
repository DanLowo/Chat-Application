import React from 'react'

import {Link} from "react-router-dom"

// import MUI components
import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"
import Notification from '@material-ui/icons/NotificationsNone';
import IconButton from "@material-ui/core/IconButton"
import Badge from "@material-ui/core/Badge"

function navbar() {
    return (
        <div>
            <div id="navbar">
                <span id="navbarHeader">
                    <Typography id="navbar-title" component="h5" variant="h6"> Hi, Damilola </Typography>
                </span>
                <span>
                    <Avatar id="avatar" src="https://material-ui.com/static/images/avatar/2.jpg" />
                    <IconButton component={Link} to="/fintech/notifications" id="notification">
                        <Badge badgeContent={0} showZero color="secondary">
                            <Notification fontSize="medium" />
                        </Badge>
                    </IconButton>
                </span>
            </div>
            <Typography id="keepTrack">Keep track of your subscription effectively</Typography>
        </div>
    )
}

export default navbar
