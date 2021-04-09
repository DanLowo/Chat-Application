import React from 'react'

// import MUI components
import Typography from "@material-ui/core/Typography"
import NotificationsIcon from '@material-ui/icons/Notifications';

function navbar() {
    return (
        <div>
            <div id="navbar">
                <span id="navbar-title"> <Typography component='h5' variant="h5">Hey Dee</Typography> </span>
                <span>
                    <NotificationsIcon htmlColor="grey" fontSize="large"></NotificationsIcon>
                </span>
            </div>
            <div>
                <Typography id="letGetVitamins">Let's get Vitamins</Typography>
            </div>
        </div>
    )
}

export default navbar
