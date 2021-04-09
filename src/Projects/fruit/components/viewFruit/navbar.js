import React from 'react'

import { Link } from "react-router-dom"

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import FavoriteIcon from '@material-ui/icons/Favorite';

function navbar() {
    return (
        <div id="navbar">
            <span id="navbar-title">
                <Link to="/fruit">
                    <ChevronLeftIcon />
                </Link> </span>
            <span> <FavoriteIcon htmlColor="green" /> </span>
        </div>
    )
}

export default navbar
