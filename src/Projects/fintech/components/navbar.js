import React from 'react'

// import MUI components
import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"
import Notification from '@material-ui/icons/NotificationsNone';
import IconButton from "@material-ui/core/IconButton"
import Badge from "@material-ui/core/Badge"

function navbar() {
    return (
        <div id="navbar">
            <span id="navbarHeader">
                <Typography id="navbar-title" component="h5" variant="h6"> Hi, Damilola </Typography>
            </span>
            <span>
                <Avatar style={{marginRight: '4px'}} src="https://material-ui.com/static/images/avatar/2.jpg" />
                <IconButton>
                    <Badge badgeContent={3} color="secondary">
                        <Notification/>
                    </Badge>
                </IconButton>
            </span>
        </div>
    )
}

export default navbar
