import React from 'react'

import {makeStyles} from "@material-ui/core/styles"
import SecondUser from './Chatting/SecondUser'
import FirstUser from './Chatting/FirstUser'

const customStyles = makeStyles(() => ({
    root: {
        margin: 10,
        marginTop: 77,
        marginBottom: 80
    },
    chatSectionDay: {
        backgroundColor: 'blue',
        borderRadius: "20px",
        padding: 10,
        width: 70,
        color: 'white'
    }
}))

function Chatting() {
    const styles = customStyles()
    return (
        <div className={styles.root}>
            <div align="center"> <p className={styles.chatSectionDay}> <b>TODAY</b> </p> </div>
            <SecondUser/>
            <FirstUser/>
            <SecondUser/>
            <FirstUser/>
            <SecondUser/>
            <FirstUser/>
            <SecondUser/>
            <FirstUser/>
            <SecondUser/>
            <FirstUser/>
            <SecondUser/>
        </div>
    )
}

export default Chatting
