import React from 'react'
import {Link} from "react-router-dom"

import "./assets/App.css"

import Button from "@material-ui/core/Button"
import AddIcon from "@material-ui/icons/AddCircle"

import Card from "./components/card"
import Subscriptions from "./components/Subscriptions"
import BottomNav from "./components/bottomNav"
import DynamicBar from './components/dynamicBar'

function Cards() {
    return (
        <div>
            <div id="fintech">
                <DynamicBar title="My Cards" />
                <Card name="Damilola Francis" expiryDate="02/24" number="5696 **** **** **69"/>
                <Button component={Link} to="/fintech/new-card" startIcon={<AddIcon />} fullWidth variant="outlined" color="primary" id="noSubscriptionsButton">Add New Card</Button>
                <Subscriptions show={true} sectionTitle="Linked Subscriptions" showTabs={false}/>
            </div>
            <div id="bottomNavSpacing">
                <BottomNav/>
            </div>  
        </div>
    )
}

export default Cards
