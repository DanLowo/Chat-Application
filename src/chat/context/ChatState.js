import React, { useReducer } from 'react'

import ChatContext from "./ChatContext"
import ChatReducer from "./ChatReducer"


//import user images
import Img1 from "../assets/avatar.png"
import Img2 from "../assets/avatar1.jpeg"
import Img3 from "../assets/avatar2.png"
import Img4 from "../assets/avatar2.jpeg"
import Ajr from "../assets/ajr.jpg"

import {
    SEND_MESSAGE,
    SET_SEARCH_BAR,
    SET_MESSENGER_SEARCH,
    SET_USER,
    ADD_TO_BOOKMARK
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
                userImage: Img2,
                time: "12:33pm",
                unread: false
            },
            {
                userName: "Galvin Belson",
                messageExcerpt: "Data creation is exploding..",
                userImage: Img1,
                time: "Yesterday",
                unread: false
            },
            {
                userName: "Emmanuel Israel",
                messageExcerpt: "Have you sent the documents?",
                userImage: Img3,
                time: "Sun",
                unread: true
            },
            {
                userName: "Zameria",
                messageExcerpt: "Good Morning Daniel",
                userImage: Img4,
                time: "Thur",
                unread: true
            },
            {
                userName: "Sarah Udeh",
                messageExcerpt: "Happy birthday ma",
                userImage: Img1,
                time: "Thur",
                unread: false
            },
            {
                userName: "Elton Babalola",
                messageExcerpt: "Why haven't you returned my calls",
                userImage: Img2,
                time: "Wed",
                unread: true
            },
            {
                userName: "Abimbola Adeyemo",
                messageExcerpt: "is typing...",
                userImage: Img4,
                time: "Wed",
                unread: false
            }
        ],
        users: [
            {
                userName: "Ajadi Peter",
                messageExcerpt: "Hey",
                userImage: Img1,
                time: "Thur",
                unread: false
            },
            {
                userName: "United Bank Of Africa",
                messageExcerpt: "Have you solved the issue now?",
                userImage: Img4,
                time: "Thur",
                unread: false
            },
            {
                userName: "Blessing Akpan",
                messageExcerpt: "I'm waiting for you now",
                userImage: Img3,
                time: "Thur",
                unread: false
            },
            {
                userName: "Samuel John",
                messageExcerpt: "Good luck in your exams",
                userImage: Img2,
                time: "Thur",
                unread: false
            },
            {
                userName: "Zameria",
                messageExcerpt: "Good Morning Daniel",
                userImage: Img4,
                time: "Thur",
                unread: true
            },
            {
                userName: "Sarah Udeh",
                messageExcerpt: "Happy birthday ma",
                userImage: Img1,
                time: "Thur",
                unread: false
            },
            {
                userName: "Elton Babalola",
                messageExcerpt: "Why haven't you returned my calls",
                userImage: Img2,
                time: "Wed",
                unread: true
            }
        ],
        user: {},
        posts: [
            {
                userName: "Daniel Olulowo",
                userImage: Img2,
                body:  `                When desiging user experience, the user always comes first. I mean, it's
                in the name- USER experience. An app must be useable, useful and enjoyable
                to the user. And yes i speak un poco espanol.`,
                time: "45 mins ago",
                likes: "2.2k",
                thoughts: "177"
            },
            {
                userName: "AJR",
                userImage: Img1,
                body:  `Thank you all for coming to my birthday party, I'm one minute old today 
                and seriously, everything has been going great. I hope it continues that way`,
                time: "1 mins ago",
                bodyImg: Ajr,
                likes: "43k",
                thoughts: "5K"
            },
            {
                userName: "T.O.P",
                userImage: Img3,
                body:  `I've seen the street you're working down. Good luck, lol`,
                time: "5 hours ago",
                likes: "600",
                thoughts: "240"
            },
            {
                userName: "Emmanuel Johnson",
                userImage: Img4,
                body:  `I know a man with nothing in his house, he told me about how his house burnt down and how he lost everything he owns.
                Now that the money is gone, life will carry on.`,
                time: "2 days ago",
                likes: "2k",
                thoughts: "17"
            }
        ],
        bookmarks: [],
        searchBar: false,
        messengerSearchList: []
    }

    const [state, dispatch] = useReducer(ChatReducer, initialState)

    const setUser = (username) => {
        let currentUsers = [...state.chats]

        let getUser = currentUsers.find(user => user.userName === username)

        dispatch({
            type: SET_USER,
            payload: getUser
        })
    }

    const addToBookMark = (post) => {
        let currentBookmarks = [...state.bookmarks]
        currentBookmarks.push(post)
        dispatch({ type: ADD_TO_BOOKMARK, payload: currentBookmarks})
    }

    const removeFromBookmark = (post) => {
        let currentBookmarks = [...state.bookmarks]
        let inds = currentBookmarks.indexOf(post)
        currentBookmarks.splice(inds, 1)
        dispatch({ type: ADD_TO_BOOKMARK, payload: currentBookmarks})
    }

    const setSearchBar = () => {
        dispatch({
            type: SET_SEARCH_BAR
        })
    }

    const setMessengerSearch = (text) => {
        let currentMessengerList = [...state.chats]

        let filteredMessenger = currentMessengerList.filter(message => {
            const regex = new RegExp(`${text}`, "gi");
            return message.userName.match(regex)
        });

        dispatch({
            type: SET_MESSENGER_SEARCH,
            payload: filteredMessenger
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
            bookmarks: state.bookmarks,
            messengerSearchList: state.messengerSearchList,
            sendMessage,
            setSearchBar,
            setMessengerSearch,
            setUser,
            addToBookMark,
            removeFromBookmark
        }}
    >
        {props.children}
    </ChatContext.Provider>

}

export default ChatState;