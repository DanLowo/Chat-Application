import React, {useReducer} from 'react'

import ChatContext from "./ChatContext"
import ChatReducer from "./ChatReducer"

import {
    SEND_MESSAGE,
    SET_SEARCH_BAR
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
        chats: [
            {
                userName: "Godaddy Inc.",
                messageExcerpt: "I have sent my resume to your email",
                userImage: "",
                time: "12:33pm",
                unread: false
            },
            {
                userName: "Galvin Belson",
                messageExcerpt: "Data creation is exploding..",
                userImage: "",
                time: "Yesterday",
                unread: false
            },
            {
                userName: "Emmanuel Israel",
                messageExcerpt: "Have you sent the documents?",
                userImage: "",
                time: "Sun",
                unread: true
            },
            {
                userName: "Zameria",
                messageExcerpt: "Good Morning Daniel",
                userImage: "",
                time: "Thur",
                unread: true
            },
            // {
            //     userName: "Ajadi Peter",
            //     messageExcerpt: "Hey",
            //     userImage: "",
            // time: "Thur",
            //     unread: false
            // },
            // // {
            // //     userName: "United Bank Of Africa",
            // //     messageExcerpt: "Have you solved the issue now?",
            // //     userImage: "",
            // time: "Thur",
            // //     unread: false
            // // },
            // // {
            // //     userName: "Blessing Akpan",
            // //     messageExcerpt: "I'm waiting for you now",
            // //     userImage: "",
            // time: "Thur",
            // //     unread: false
            // // },
            // // {
            // //     userName: "Samuel John",
            // //     messageExcerpt: "Good luck in your exams",
            // //     userImage: "",
            // time: "Thur",
            // //     unread: false
            // // },
            {
                userName: "Sarah Udeh",
                messageExcerpt: "Happy birthday ma",
                userImage: "",
                time: "Thur",
                unread: false
            },
            {
                userName: "Elton Babalola",
                messageExcerpt: "Why haven't you returned my calls",
                userImage: "",
                time: "Wed",
                unread: true
            },
            {
                userName: "Abimbola Adeyemo",
                messageExcerpt: "is typing...",
                userImage: "",
                time: "Wed",
                unread: false
            }
        ],
        users: [],
        user: [],
        posts: [],
        searchBar: false
    }

    const [state, dispatch] = useReducer(ChatReducer, initialState)

    const setSearchBar = () => {
        dispatch({
            type: SET_SEARCH_BAR
        })
    }

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
            chats: state.chats,
            searchBar: state.searchBar,
            sendMessage,
            setSearchBar
        }}
    >
        {props.children}
    </ChatContext.Provider>

}

export default ChatState;