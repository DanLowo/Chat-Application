import React, {useContext} from 'react'
import Post from './components/Post'
import ChatContext from './context/ChatContext'
import Bottombar from './components/Bottombar'
import NewChatNavBar from './components/NewChatNavBar'
import {makeStyles} from "@material-ui/core/styles"

import BookmarkImage from "./assets/bookmark.png"

const customStyles = makeStyles(() => ({
    img: {
        width: "100px !important",
        height: "100px !important",
        marginTop: "150px",
        marginBottom: '-15px'
    },
    root: {
        marginBottom: 80,
        paddingTop: 10
    }
}))

function Bookmark() {
    const context = useContext(ChatContext)
    let posts = context.bookmarks
    const styles = customStyles()
    return (
        <div className={styles.root}>
            <NewChatNavBar title="Bookmarked" />
            <div style={{ marginTop: 58}}>
            {
                posts.length !== 0 ?
                posts.map((post, k) => (
                    <Post post={post} key={k} />
                ))
                : 
                <div align="center">
                    <img src={BookmarkImage} alt="no bookmakr" className={styles.img} />
                    <h4>No Bookmarks</h4>
                </div>
            }
            </div>
            <Bottombar/>
        </div>
    )
}

export default Bookmark
