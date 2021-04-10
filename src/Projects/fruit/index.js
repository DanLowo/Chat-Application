import React from 'react'

import "./assets/App.css"

// import Project components
import Navbar from "./components/navbar"
import Search from "./components/search"
import FruitSlide from "./components/fruitSlide"
import CallToAction from "./components/callToAction"
import FruitGrid from "./components/fruitGrid"
import BottomNav from "./components/BottomNav"

function index() {
    return (
        <div>
        <div id="fruit">
            <Navbar/>
            <Search/>
            <FruitSlide/>
            <CallToAction/>
            <FruitGrid/>
        </div>

            <div id="bottomNavSpacing">
                <BottomNav/>
            </div>
        </div>
    )
}

export default index
