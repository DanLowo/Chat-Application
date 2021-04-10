import React, { useState } from 'react'

import {Link} from "react-router-dom"

import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"

import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

function BottomNav() {

    const [value, setValue] = useState(0);
    return (
        <div>
            <BottomNavigation id="bottomNav" showLabels value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}>
                <BottomNavigationAction component={Link} to="/fruit" label="Home" icon={<HomeOutlinedIcon />} />
                <BottomNavigationAction label="Cards" icon={<PaymentOutlinedIcon />} />
                <BottomNavigationAction component={Link} to="/fruits/cart" label="Subscriptions" icon={<SubscriptionsOutlinedIcon />} />
                <BottomNavigationAction component={Link} to="/fruits/account" label="Profile" icon={<PersonOutlineOutlinedIcon />} />
            </BottomNavigation>
        </div>
    )
}

export default BottomNav
