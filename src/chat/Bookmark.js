import React, {useContext} from 'react'
import Post from './components/Post'
import ChatContext from './context/ChatContext'
import Bottombar from './components/Bottombar'
import NewChatNavBar from './components/NewChatNavBar'

function Bookmark() {
    const context = useContext(ChatContext)
    let posts = context.posts
    let savedPosts = []
    savedPosts.push(posts[1])
    return (
        <div>
            <NewChatNavBar title="Saved Posts" />
            <div style={{ marginTop: 58}}>
            {
                savedPosts.map((post, k) => (
                    <Post post={post} key={k} />
                ))
            }
            </div>
            <Bottombar/>
        </div>
    )
}

export default Bookmark
