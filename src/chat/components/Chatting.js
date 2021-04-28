import React, {useContext} from 'react'

import {makeStyles} from "@material-ui/core/styles"
import SecondUser from './Chatting/SecondUser'
import FirstUser from './Chatting/FirstUser'

import ChatContext from "../context/ChatContext"

const customStyles = makeStyles(() => ({
    root: {
        margin: 10,
        marginTop: 77,
        marginBottom: 80
    },
    chatSectionDay: {
        backgroundColor: 'blue',
        borderRadius: "20px",
        padding: 8,
        width: 70,
        color: 'white',
        fontSize: 13
    }
}))

function Chatting() {

    let context = useContext(ChatContext)
    let messageList = context.messages
    
    const styles = customStyles()
    return (
        <div className={styles.root}>
            <div align="center"> <p className={styles.chatSectionDay}> <b>TODAY</b> </p> </div>
            {
                messageList.map((msg, k) => {
                    if(msg.sender === 'me'){
                        return <FirstUser key={k} message={msg.message} />
                    } else {
                        return <SecondUser key={k} message={msg.message} />
                    }
                })
            }
        </div>
    )
}

export default Chatting
