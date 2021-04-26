import React from 'react'
import Navbar from "./components/Navbar"
import Stories from './components/Stories'


// import { makeStyles } from "@material-ui/core/styles"


// const customStyles = makeStyles(() => ({
//     root: {
//         backgroundColor: 'grey',
//         height: '100vh'
//     }
// }))

function index() {

    // const classes = customStyles()

    return (
        <div>
            <Navbar/>
            <Stories/>
        </div>
    )
}

export default index
