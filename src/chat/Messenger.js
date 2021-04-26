import React from 'react'
import MessengerNavBar from './components/MessengerNavBar'
import UserMessage from './components/UserMessage'

function Messenger() {
    return (
        <div>
            <MessengerNavBar/>
            <UserMessage/>
        </div>
    )
}

export default Messenger
