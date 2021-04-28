import React from 'react'

import NewChatNavBar from './components/NewChatNavBar'
import Bottombar from './components/Bottombar'
import ProfileComponent from "./components/Profile"

function Profile() {
    return (
        <div>
            <NewChatNavBar title="Profie" />
            <ProfileComponent />
            <Bottombar />
        </div>
    )
}

export default Profile
