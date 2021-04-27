import React from 'react'

import {makeStyles} from "@material-ui/core/styles"

const customStyles = makeStyles(() => ({
    root: {
        marginTop: 15
    },
    message: {
        padding: 15,
        backgroundColor: 'blue',
        color: 'white',
        maxWidth: '55vw',
        width: 'max-content',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        borderTopRightRadius: 35
    }
}))

function FirstUser({message}) {
    const styles = customStyles()
    return (
        <div className={styles.root} align="right">
            <div className={styles.message}>
                {message}
            </div>
        </div>
    )
}

export default FirstUser
