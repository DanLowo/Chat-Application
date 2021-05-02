import React from 'react'

import { makeStyles } from "@material-ui/core/styles"

import Paper from "@material-ui/core/Paper"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Avatar from "@material-ui/core/Avatar"

// import icons
import UsernameIcon from "@material-ui/icons/VerifiedUser"
import PrivacyIcon from "@material-ui/icons/Security"
import PhotoIcon from "@material-ui/icons/Image"
import NotificationIcon from "@material-ui/icons/Notifications"
import ContactIcon from "@material-ui/icons/Person"
import SettingsIcon from "@material-ui/icons/Settings"
import HelpIcon from "@material-ui/icons/Help"
import LegalIcon from "@material-ui/icons/FileCopy"
import VideaIcon from "@material-ui/icons/VideoCall"
import MessageIcon from "@material-ui/icons/Message"
import SwitchIcon from "@material-ui/icons/SwitchCamera"
import ReportIcon from "@material-ui/icons/Report"
import Verified from "@material-ui/icons/VerifiedUser"

import Image from "../assets/avatar1.jpeg"

const customStyles = makeStyles(() => ({
    root: {
        marginTop: 55,
        padding: 10,
        marginBottom: 70
    },
    paper: {
        padding: 10
    },
    userImage: {
        width: "100px",
        height: "100px"
    },
    listHeader: {
        color: 'grey',
        marginBottom: '0px',
        fontSize: 15
    },
    icon: {
        padding: 7,
        borderRadius: "50%",
        color: 'white',
        fontSize: 20
    },
    title: {
        fontSize: "10px !important"
    }
}))

function Profile() {
    const styles = customStyles()
    return (
        <div className={styles.root}>
            <Paper align="center" className={styles.paper}>
                <Avatar src={Image} className={styles.userImage} />
                <h3 style={{ marginBottom: 5 }}> Daniel Olulowo <Verified fontSize="small" htmlColor="blue" style={{ marginBottom: '-5px' }} /> </h3>
                <p style={{ margin: 3 }} >@danlowo</p>
            </Paper>
            <br/>
            <h3 className={styles.listHeader}>Profile</h3>
            <List>
                <ListItem button divider>
                    <ListItemIcon> <MessageIcon className={styles.icon} style={{backgroundColor: 'green'}}  /> </ListItemIcon>
                    <ListItemText className={styles.title}> <b> Active Status </b> </ListItemText>
                </ListItem>
            </List>
            <List>
                <ListItem button divider>
                    <ListItemIcon> <UsernameIcon className={styles.icon} style={{backgroundColor: 'red'}} /> </ListItemIcon>
                    <ListItemText className={styles.title}> <b>Username</b> </ListItemText>
                </ListItem>
            </List>

            <h3 className={styles.listHeader}>Prefrences</h3>
            <List>
                <ListItem button divider>
                    <ListItemIcon> <PrivacyIcon className={styles.icon} style={{backgroundColor: 'lightblue'}} /> </ListItemIcon>
                    <ListItemText className={styles.title}> <b> Privacy </b> </ListItemText>
                </ListItem>
            </List>
            <List>
                <ListItem button divider>
                    <ListItemIcon> <NotificationIcon className={styles.icon} style={{backgroundColor: 'purple'}} /> </ListItemIcon>
                    <ListItemText className={styles.title}> <b>Notifications & Sounds</b> </ListItemText>
                </ListItem>
            </List>
            <List>
                <ListItem button divider>
                    <ListItemIcon> <VideaIcon className={styles.icon} style={{backgroundColor: 'blue'}} /> </ListItemIcon>
                    <ListItemText className={styles.title}> <b>Story</b> </ListItemText>
                </ListItem>
            </List>
            <List>
                <ListItem button divider>
                    <ListItemIcon> <ContactIcon className={styles.icon} style={{backgroundColor: 'grey'}} /> </ListItemIcon>
                    <ListItemText className={styles.title}> <b>Phone Contacts</b> </ListItemText>
                </ListItem>
            </List>
            <List>
                <ListItem button divider>
                    <ListItemIcon> <PhotoIcon className={styles.icon} style={{backgroundColor: 'cyan'}} /> </ListItemIcon>
                    <ListItemText className={styles.title}> <b>Photos & Media</b> </ListItemText>
                </ListItem>
            </List>


            <h3 className={styles.listHeader}>Account</h3>
            <List>
                <ListItem button divider>
                    <ListItemIcon> <SwitchIcon className={styles.icon} style={{backgroundColor: 'pink'}} /> </ListItemIcon>
                    <ListItemText className={styles.title}> <b> Switch Account </b> </ListItemText>
                </ListItem>
            </List>
            <List>
                <ListItem button divider>
                    <ListItemIcon> <SettingsIcon className={styles.icon} style={{backgroundColor: 'black'}} /> </ListItemIcon>
                    <ListItemText className={styles.title}> <b>Account Settings</b> </ListItemText>
                </ListItem>
            </List>
            <List>
                <ListItem button divider>
                    <ListItemIcon> <ReportIcon className={styles.icon} style={{backgroundColor: 'red'}} /> </ListItemIcon>
                    <ListItemText className={styles.title}> <b>Report Technical Problem</b> </ListItemText>
                </ListItem>
            </List>
            <List>
                <ListItem button divider>
                    <ListItemIcon> <HelpIcon className={styles.icon} style={{backgroundColor: 'lightblue'}} /> </ListItemIcon>
                    <ListItemText className={styles.title}> <b>Help</b> </ListItemText>
                </ListItem>
            </List>
            <List>
                <ListItem button divider>
                    <ListItemIcon> <LegalIcon className={styles.icon} style={{backgroundColor: 'orange'}} /> </ListItemIcon>
                    <ListItemText className={styles.title}> <b>Legal & Policies</b> </ListItemText>
                </ListItem>
            </List>
        </div>
    )
}

export default Profile
