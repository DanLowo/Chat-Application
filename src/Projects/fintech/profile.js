import React from 'react'

import "./assets/App.css"

import DynamicBar from "./components/dynamicBar"
import BottomNav from "./components/bottomNav"
import LinkedAccounts from './components/linkedAccounts'
import Typography from '@material-ui/core/Typography'
import Button from "@material-ui/core/Button"


function profile() {
    return (
        <div>
            <div id="fintech">
                <DynamicBar title="Your Bank Accounts" />
                <Typography id="bvn" align="center"> These are the bank accounts retrieved from your BVN </Typography>
                <LinkedAccounts />
                <Button fullWidth variant="contained" color="primary" id="noSubscriptionsButton">Done</Button>
            </div>
            <div id="bottomNavSpacing">
                <BottomNav/>
            </div>    
        </div>
    )
}

export default profile
