import React from 'react'

import "./assets/App.css"

import Navbar from "./components/navbar"
import Card from "./components/card"
import Subscriptions from "./components/Subscriptions"
import BottomNav from "./components/bottomNav"

function index() {
    return (
        <div>
            <div id="fintech">
                <Navbar/>
                <Card/>
                <Subscriptions/>
            </div>
            <div id="bottomNavSpacing">
                <BottomNav/>
            </div>
        </div>
    )
}

export default index
