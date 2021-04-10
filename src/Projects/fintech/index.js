import React from 'react'

import "./assets/App.css"

import Navbar from "./components/navbar"
import Card from "./components/card"

function index() {
    return (
        <div>
            <div id="fintech">
                <Navbar/>
                <Card/>
            </div>
            
        </div>
    )
}

export default index
