import React from 'react'
import MessengerNavBar from './components/MessengerNavBar'
import UserMessage from './components/UserMessage'
import Bottombar from './components/Bottombar'

function Messenger() {
    return (
        <div>
            <MessengerNavBar/>
            <UserMessage/>
            <Bottombar/>
        </div>
    )
}

export default Messenger
