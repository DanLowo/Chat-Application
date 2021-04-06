import React from 'react'

// import project component
import Jobs from "./jobs"

//import MUI component
import Typography from "@material-ui/core/Typography"

// import MUI icons

// import MUI color
// import Green from "@material-ui/core/colors/green"

function jobsWithHeader({header}) {
    return (
        <div>
            <div className="jobHeader">
                <span className="jobHeaderTitle">
                    <Typography id="jobHeaderTitle" component="h4" variant="h5"> {header || 'Job Matches' }</Typography>
                </span>
                <span>
                    <Typography id="jobHeaderMore" component="h6" variant="h5">
                        more
                    </Typography>
                </span>
            </div>
            <Jobs />
        </div>
    )
}

export default jobsWithHeader
