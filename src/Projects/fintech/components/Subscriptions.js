import React, { useState } from 'react'

import Typography from "@material-ui/core/Typography"

function Subscriptions() {

    const ok = {
        All: true,
        Upcoming: false,
        Pending: false
    }
    const [activeTab, setActiveTab] = useState(ok)

    const handleSetTab = (tabType) => {
        switch(tabType){
            case 'All':
                return setActiveTab(ok);
            case 'Upcoming':
                return setActiveTab({All: false, Upcoming: true, Pending: false});
            case 'Pending':
                return setActiveTab({All: false, Upcoming: false, Pending: true});
            default:
                return setActiveTab(ok);
        }
    }

    return (
        <div id="subscriptions">
            <Typography id="mySubscriptoins">My Subscriptions</Typography>
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
        </div>
    )
}

export default Subscriptions
