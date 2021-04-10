import React from 'react'

import Button from "@material-ui/core/Button"
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

function callToAction() {
    return (
        <div>
            <div id="dealsSection">
                <span id="dealsSectionText">
                    Take advantage <br /> of the best deals
                </span>
                <span>
                    <Button size="small" variant="contained" id="callToActionButton" endIcon={ <ChevronRightIcon htmlColor="black"/> } > Check deals</Button>
                </span>
            </div>
        </div>
    )
}

export default callToAction
