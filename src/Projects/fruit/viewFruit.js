import React from 'react'

import "./assets/App.css"

// import all components for view fruit
import NavBar from "./components/viewFruit/navbar"
import Details from "./components/viewFruit/details"

import BottomNav from "./components/BottomNav"

function viewFruit() {
    return (
        <div id="fruit">
            <NavBar/>
            <Details/>
            <div id="bottomNavSpacing">
            <BottomNav/>
            </div>
        </div>
    )
}

export default viewFruit
