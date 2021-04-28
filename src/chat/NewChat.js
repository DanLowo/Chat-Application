import React from 'react'
import NewChatNavBar from './components/NewChatNavBar'
import Bottombar from './components/Bottombar'
import NewChatList from './components/NewChatList'

function NewChat() {
    return (
        <div>
          <NewChatNavBar title='New Message' />  
          <NewChatList/>
          <Bottombar/>
        </div>
    )
}

export default NewChat
