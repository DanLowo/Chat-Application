import React from 'react'

import Grid from "@material-ui/core/Grid"
import Avatar from "@material-ui/core/Avatar"
import ChevronRight from "@material-ui/icons/ChevronRight"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from "@material-ui/core/Divider"

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PaymentIcon from '@material-ui/icons/Payment';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import InfoIcon from '@material-ui/icons/Info';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import WomanImage from "../assets/woman.webp"

function accountView() {

    const listItems = [
        {
            name: "Orders",
            icon: ShoppingBasketIcon
        },
        {
            name: "Payment",
            icon: PaymentIcon
        },
        {
            name: "Address Book",
            icon: PermContactCalendarIcon
        },
        {
            name: "Notifications",
            icon: NotificationsIcon
        },
        {
            name: "Support",
            icon: ChatIcon
        },
        {
            name: "About",
            icon: InfoIcon
        },
        {
            name: "Logout",
            icon: ExitToAppIcon
        }
    ]

    return (
        <div id="account">
            <div id="section">
                <Grid container>
                    <Grid item xs={3} sm={3} md={3}>
                        <Avatar id="avatar" src={WomanImage} alt="woman" />
                    </Grid>
                    <Grid item xs={7} sm={7} md={7}>
                        <h2 id="card-title"> <b>Dee Barti</b> </h2>
                        <p id="email">meusa.barti@gmail.com</p>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2}>
                        <ChevronRight id="icon" fontSize="large" htmlColor="white" />
                    </Grid>
                </Grid>
            </div>

            <div>
                <List>
                    {listItems.map(item => (
                        <div key={item.name}>
                        <ListItem id="listItem" button>
                            <ListItemAvatar>
                                {/* <Avatar> */}
                                    <item.icon htmlColor="grey"/>
                                {/* </Avatar> */}
                            </ListItemAvatar>
                            <ListItemText primary={item.name} />
                        </ListItem>
                        <Divider/>
                        </div>

                    ))}
                </List>
            </div>
        </div>
    )
}

export default accountView
