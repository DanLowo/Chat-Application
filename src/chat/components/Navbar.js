import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import Badge from "@material-ui/core/Badge"
import Notifications from "@material-ui/icons/NotificationsOutlined"
import Search from "@material-ui/icons/SearchOutlined"

const customStyles = makeStyles(() => ({
    navbar: {
        display: 'flex'
    },
    navbarHeader: {
        display: 'inline',
        flexGrow: 1
    },
    navbarSpan: {
        marginTop: "22px"
    },
    navbarIcon: {
        color: "grey",
        marginLeft: "15px"
    }
    
}))

function Navbar() {

    const styles = customStyles()

    return (
        <div className={styles.navbar}>
            <h1 className={styles.navbarHeader}>Twifi</h1>
            <span className={styles.navbarSpan}>
                <Badge badgeContent={0} showZero color="secondary">
                    <Notifications fontSize="large" className={styles.navbarIcon}/>
                </Badge>
            </span>
            <span className={styles.navbarSpan}>
                <Search fontSize="large" className={styles.navbarIcon} />
            </span>
        </div>
    )
}

export default Navbar
