import React from 'react'

import Navbar from "./components/navbar"
import Subscriptions from "./components/Subscriptions"
import BottomNav from "./components/bottomNav"

function subscriptions() {
    return (
        <div>
            <div id="fintech">
                <Navbar/>
                <Subscriptions show={false}/>
            </div>
            <div id="bottomNavSpacing">
                <BottomNav/>
            </div> 
        </div>
    )
}

export default subscriptions
