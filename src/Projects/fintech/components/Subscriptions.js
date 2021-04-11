import React, { useState } from 'react'

import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Divider from "@material-ui/core/Divider"
import Paper from "@material-ui/core/Paper"
import Button from "@material-ui/core/Button"

import AddIcon from "@material-ui/icons/AddCircle"

// import imagese
import Netflix from "../assets/netflix.jpeg"
import Spotify from "../assets/spotify.png"
import Medium from "../assets/medium.png"
import Adobe from "../assets/adobe.png"
import Dstv from "../assets/dstv.jpg"
import LinkedIn from "../assets/linkedin.webp"
import NoSubscription from "../assets/subscriptions.png"

function Subscriptions({ show, sectionTitle, showTabs }) {

    const ok = {
        All: true,
        Upcoming: false,
        Pending: false
    }
    const [activeTab, setActiveTab] = useState(ok)

    const allSubscription = [
        {
            name: 'Netflix',
            price: '4,400',
            due: 'Today',
            type: 'Monthly',
            img: Netflix
        },
        {
            name: 'Medium',
            price: '5,600',
            due: '12/03',
            type: 'Bi-Weekly',
            img: Medium
        },
        {
            name: 'LinkedIn',
            price: '10,000',
            due: '14/04',
            type: 'Yearly',
            img: LinkedIn
        },
        {
            name: 'DSTV',
            price: '2,000',
            due: '1/03',
            type: 'Monthly',
            img: Dstv
        },
    ]

    const UpcomingSubscription = [
        {
            name: 'Spotify',
            price: '10,000',
            due: '14/04',
            type: 'Yearly',
            img: Spotify
        },
        {
            name: 'DSTV',
            price: '2,000',
            due: '1/03',
            type: 'Monthly',
            img: Dstv
        }
    ]

    const PendingSubscription = [
        {
            name: 'Adobe Lightroom',
            price: '4,000',
            due: '14/04',
            type: 'Yearly',
            img: Adobe
        }
    ]

    const handleSetTab = (tabType) => {
        switch (tabType) {
            case 'All':
                return setActiveTab(ok);
            case 'Upcoming':
                return setActiveTab({ All: false, Upcoming: true, Pending: false });
            case 'Pending':
                return setActiveTab({ All: false, Upcoming: false, Pending: true });
            default:
                return setActiveTab(ok);
        }
    }

    return (
        <div id="subscriptions">
            <Typography id="mySubscriptoins"> {sectionTitle} </Typography>

            {show ? (
                <div>
                    {showTabs ? (
                        <div id="subscriptionTabs">
                            <div id="subscriptionTab" className={activeTab.All ? 'activeTab' : ''} align="center" onClick={() => handleSetTab('All')}>
                                <span className={activeTab.All ? 'activeTabItem' : ''} id="subscriptionTabItem" align="center">All</span>
                            </div>
                            <div id="subscriptionTab" className={activeTab.Upcoming ? 'activeTab' : ''} align="center" onClick={() => handleSetTab('Upcoming')}>
                                <span className={activeTab.Upcoming ? 'activeTabItem' : ''} id="subscriptionTabItem">Upcoming</span>
                            </div>
                            <div id="subscriptionTabLast" className={activeTab.Pending ? 'activeTab' : ''} align="center" onClick={() => handleSetTab('Pending')}>
                                <span className={activeTab.Pending ? 'activeTabItem' : ''} id="subscriptionTabItem">Pending</span>
                            </div>
                        </div>
                    ) : ''}

                    <div id="subscriptionPlans">
                        {activeTab.All &&
                            allSubscription.map(subscription => (
                                <div key={subscription.name}>
                                    <Grid container id="subscriptionPlansItem">
                                        <Grid item xs={2} sm={2} md={2}>
                                            <Paper id="paper">
                                                <img alt={subscription.name} src={subscription.img} />
                                            </Paper>
                                        </Grid>
                                        <Grid item xs={7} sm={7} md={7} id="details">
                                            <Typography id="name"> {subscription.name} </Typography>
                                            <Typography id="type"> {subscription.type} </Typography>
                                        </Grid>
                                        <Grid item xs={3} sm={3} md={3} id="price">
                                            <Typography id="name"> N {subscription.price} </Typography>
                                            <Typography className={subscription.due === 'Today' ? 'dueToday' : ''} id="due"> Due: {subscription.due} </Typography>
                                        </Grid>
                                    </Grid>
                                    <Divider />
                                </div>
                            ))
                        }

                        {activeTab.Upcoming &&
                            UpcomingSubscription.map(subscription => (
                                <div key={subscription.name}>
                                    <Grid container id="subscriptionPlansItem">
                                        <Grid item xs={2} sm={2} md={2}>
                                            <Paper id="paper">
                                                <img alt={subscription.name} src={subscription.img} />
                                            </Paper>
                                        </Grid>
                                        <Grid item xs={7} sm={7} md={7} id="details">
                                            <Typography id="name"> {subscription.name} </Typography>
                                            <Typography id="type"> {subscription.type} </Typography>
                                        </Grid>
                                        <Grid item xs={3} sm={3} md={3} id="price">
                                            <Typography id="name"> N {subscription.price} </Typography>
                                            <Typography className={subscription.due === 'Today' ? 'dueToday' : ''} id="due"> Due: {subscription.due} </Typography>
                                        </Grid>
                                    </Grid>
                                    <Divider />
                                </div>
                            ))
                        }

                        {activeTab.Pending &&
                            PendingSubscription.map(subscription => (
                                <div key={subscription.name}>
                                    <Grid container id="subscriptionPlansItem">
                                        <Grid item xs={2} sm={2} md={2}>
                                            <Paper id="paper">
                                                <img alt={subscription.name} src={subscription.img} />
                                            </Paper>
                                        </Grid>
                                        <Grid item xs={7} sm={7} md={7} id="details">
                                            <Typography id="name"> {subscription.name} </Typography>
                                            <Typography id="type"> {subscription.type} </Typography>
                                        </Grid>
                                        <Grid item xs={3} sm={3} md={3} id="price">
                                            <Typography id="name"> N {subscription.price} </Typography>
                                            <Typography className={subscription.due === 'Today' ? 'dueToday' : ''} id="due"> Due: {subscription.due} </Typography>
                                        </Grid>
                                    </Grid>
                                    <Divider />
                                </div>
                            ))
                        }
                    </div>
                </div>
            ) : (
                    <div align="center">
                        <img alt="no subscriptions" src={NoSubscription} id="noSubscriptionsImg" />
                        <Typography id="noSubscriptionsText">Looks like you don't have any subscription add yet</Typography>
                        <Button startIcon={<AddIcon />} fullWidth variant="outlined" color="primary" id="noSubscriptionsButton">Add new subscription</Button>
                    </div>
                )
            }
        </div>
    )
}

export default Subscriptions
