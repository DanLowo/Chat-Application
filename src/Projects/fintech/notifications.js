import React from 'react'

import Typography from "@material-ui/core/Typography"

import DynamicBar from "./components/dynamicBar"
import BottomNav from "./components/bottomNav"

import Notification from "./assets/notification.png"

function notifications() {
    return (
        <div>
            <div id="fintech">
                <DynamicBar title="Notifications" />
                <div id="noNotification" align="center">
                    <img alt="no notification" src={Notification} />
                    <Typography id="noSubscriptionsText">
                        Your notification will appear here when you have new activity
                    </Typography>
                </div>
            </div>
            <div id="bottomNavSpacing">
                <BottomNav/>
            </div>
        </div>
    )
}

export default notifications
