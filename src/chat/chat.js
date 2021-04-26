import React from 'react'
import ChatNavBar from './components/ChatNavBar'
import UserMessage from './components/UserMessage'

function chat() {
    return (
        <div>
            <ChatNavBar/>
            <UserMessage/>
        </div>
    )
}

export default chat
