import React, {useReducer} from 'react'

import ChatContext from "./ChatContext"
import ChatReducer from "./ChatReducer"

import {
    SEND_MESSAGE
} from './types'

const ChatState = props => {
    const initialState = {
        messages: [
            {
                sender: "other",
                message: "Hello Daniel, Godaddy here. We saw your works lately and we would like to know if you're available to work with us as a frontend engineer."
            },
            {
                sender: "me",
                message: "Hello, thanks for reaching out. How is the terms"
            },
            {
                sender: "me",
                message: "Hello, thanks for reaching out. How is the terms"
            },
            {
                sender: "other",
                message: "Hello Daniel, Godaddy here. We saw your works lately and we would like to know if you're available to work with us as a frontend engineer."
            },
            {
                sender: "other",
                message: "Hello Daniel, Godaddy here. We saw your works lately and we would like to know if you're available to work with us as a frontend engineer."
            },
        ],
        users: [],
        user: [],
        chat: [],
        posts: []
    }

    const [state, dispatch] = useReducer(ChatReducer, initialState)


    const sendMessage = (text) => {
        let msg = {
            sender: 'me',
            message: text
        }

        let updateMessage = [...state.messages, msg]

        dispatch({
            type: SEND_MESSAGE,
            payload: updateMessage
        })
    }
    
    return <ChatContext.Provider
        value={{
            users: state.users,
            user: state.user,
            messages: state.messages,
            posts: state.posts,
            sendMessage
        }}
    >
        {props.children}
    </ChatContext.Provider>

}

export default ChatState;