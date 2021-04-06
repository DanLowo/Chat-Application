import React from 'react'
import {Link} from "react-router-dom"

// import MUI components
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import Grid from "@material-ui/core/Grid"
import Typography from '@material-ui/core/Typography';

function viewJobHeader() {
    return (
        <div id="viewJobHeader">
            <Grid container>
                <Grid item xs={2} md={4} lg={4}>
                    <Link to="/">
                        <ArrowBackOutlinedIcon fontSize="large" className="topSpacing" />
                    </Link>
                </Grid>
                <Grid item xs={10} md={8} lg={8}>
                    <div align="center" id="viewJobHeaderDesign">
                        <Typography variant="h3" id="viewJobPosition" component="h3">Product Desginer</Typography>
                        <Typography variant="h4" id="viewJobCompany" component="h4">Skuri Bebo  Inc.</Typography>
                        <Typography variant="h4" id="viewJobLocation" component="h4">Lagos, Nigeria</Typography>
                    </div>
                </Grid>
            </Grid>

        </div>
    )
}

export default viewJobHeader
