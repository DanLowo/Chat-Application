import React from 'react'

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper"
import IconButton from "@material-ui/core/IconButton"

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import VideoIcon from "@material-ui/icons/VideoCallOutlined"
import CallIcon from '@material-ui/icons/CallOutlined'
import InfoIcon from "@material-ui/icons/InfoOutlined"

const customStyles = makeStyles(() => ({
    root: {
        top: 0,
        position: 'fixed'
    },
    paper: {
        borderRadius: "0px",
        display: 'flex'
    },
    userBar: {
        display: 'inline-block',
        flexGrow: 1
    },
    userName: {
        fontSize: '16px',
        marginBottom: 0,
        marginTop: 14
    },
    userLastSeen: {
        fontSize: '13px',
        color: 'grey',
        marginBottom: 14,
        marginTop: 0
    },
    backButton: {
        display: 'inline-block',
        // marginTop: '-20px'
    }
}))

function ChatNavBar() {
    const styles = customStyles()
    return (
        <div>
           <Paper className={styles.paper}>
                <IconButton className={styles.backButton}>
                    <ChevronLeftIcon/>
                </IconButton>
                <span className={styles.userBar}>
                    <p className={styles.userName}> <b>Godaddy Inc.</b> </p>
                    <p className={styles.userLastSeen}>Last seen 22 seconds ago</p>
                </span>
                <IconButton>
                    <VideoIcon/>
                </IconButton>
                <IconButton>
                    <CallIcon/>
                </IconButton>
                <IconButton>
                    <InfoIcon/>
                </IconButton>
           </Paper> 
        </div>
    )
}

export default ChatNavBar;
