import React from 'react'
import ChatNavBar from './components/ChatNavBar'
import Chatting from './components/Chatting'
import InputField from './components/Chatting/InputField'

function Chat() {
    return (
        <div>
            <ChatNavBar/>
            <Chatting/>
            <InputField/>
        </div>
    )
}

export default Chat
