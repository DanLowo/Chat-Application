import React, { useState } from 'react'

import {Link} from "react-router-dom"

import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"

import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

function BottomNav() {
    const pathname = window.location.pathname
    const [value, setValue] = useState(pathname);
    return (
        <div>
            <BottomNavigation id="bottomNav" showLabels value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}>
                <BottomNavigationAction value="/fintech" component={Link} to="/fintech" label="Home" icon={<HomeOutlinedIcon />} />
                <BottomNavigationAction value="/fintech/cards" label="Cards" component={Link} to="/fintech/cards" icon={<PaymentOutlinedIcon />} />
                <BottomNavigationAction value="/fintech/subscriptions" component={Link} to="/fintech/subscriptions" label="Subscriptions" icon={<SubscriptionsOutlinedIcon />} />
                <BottomNavigationAction component={Link} to="/fintech/profile" label="Profile" icon={<PersonOutlineOutlinedIcon />} />
            </BottomNavigation>
        </div>
    )
}

export default BottomNav
