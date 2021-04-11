import React from 'react'

import {useHistory} from "react-router-dom"

import ChevronLeft from "@material-ui/icons/ChevronLeft"
import IconButton from "@material-ui/core/IconButton"
import Typography from '@material-ui/core/Typography'

function DynamicBar({title}) {
    const history = useHistory()
    return (
        <div id="dynamicBar">
            <span id="dynamicBarIcon">
                <IconButton onClick={history.goBack}>
                    <ChevronLeft htmlColor="black" fontSize="large" />
                </IconButton>
            </span>

          <Typography id="dynamicBarText"> {title} </Typography>
        </div>
    )
}

export default DynamicBar
