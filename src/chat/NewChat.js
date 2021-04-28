import React from 'react'
import NewChatNavBar from './components/NewChatNavBar'
import Bottombar from './components/Bottombar'
import NewChatList from './components/NewChatList'

function NewChat() {
    return (
        <div>
          <NewChatNavBar/>  
          <NewChatList/>
          <Bottombar/>
        </div>
    )
}

export default NewChat
