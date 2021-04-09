import React from 'react'

import "./assets/App.css"

import Typography from "@material-ui/core/Typography"


import AccountView from "./components/accountView"
import BottomNav from "./components/BottomNav"

function account() {
    return (
        <div id="fruit">
            <Typography align="center" id="cartTitle">Account</Typography>
            <AccountView/>
            <div id="bottomNavSpacing">
                <BottomNav />
            </div>
        </div>
    )
}

export default account
