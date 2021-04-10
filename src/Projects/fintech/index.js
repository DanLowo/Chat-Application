import React from 'react'

import "./assets/App.css"

import Navbar from "./components/navbar"
import Card from "./components/card"
import Subscriptions from "./components/Subscriptions"

function index() {
    return (
        <div>
            <div id="fintech">
                <Navbar/>
                <Card/>
                <Subscriptions/>
            </div>
            
        </div>
    )
}

export default index
