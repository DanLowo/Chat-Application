import React from 'react'

import {makeStyles} from "@material-ui/core/styles"

const customStyles = makeStyles(() => ({
    message: {
        padding: 15,
        backgroundColor: 'blue',
        color: 'white',
        maxWidth: '55vw',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        borderTopRightRadius: 35
    }
}))

function FirstUser() {
    const styles = customStyles()
    return (
        <div className={styles.root} align="right">
            <div className={styles.message}>
                Thank you very much. I really appreciate it.
            </div>
        </div>
    )
}

export default FirstUser
