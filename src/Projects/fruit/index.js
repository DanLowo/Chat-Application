import React from 'react'

import "./assets/App.css"

// import Project components
import Navbar from "./components/navbar"
import Search from "./components/search"
import FruitSlide from "./components/fruitSlide"
import CallToAction from "./components/callToAction"
import FruitGrid from "./components/fruitGrid"

function index() {
    return (
        <div id="fruit">
            <Navbar/>
            <Search/>
            <FruitSlide/>
            <CallToAction/>
            <FruitGrid/>
        </div>
    )
}

export default index
