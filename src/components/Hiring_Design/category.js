import React from 'react'

//import MUI component
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Button from "@material-ui/core/Button"

// import MUI icons
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';
import LocalAtmOutlinedIcon from '@material-ui/icons/LocalAtmOutlined';
import SecurityOutlinedIcon from '@material-ui/icons/SecurityOutlined';

function category() {

    const categories = [
        {
            icon: LocalHospitalOutlinedIcon,
            title: "Health",
            numberOfJobs: "3.2M",
            color: "#d0e7d1",
            iconColor: "#1f941f"
        },
        {
            icon: LocalAtmOutlinedIcon,
            title: "Finance",
            numberOfJobs: "260K",
            color: "#e1bee7",
            iconColor: "#9c27b0"
        },
        {
            icon: SecurityOutlinedIcon,
            title: "Security",
            numberOfJobs: "1.8M",
            color: "#ffe0b2",
            iconColor: "#ff9800"
        }
    ]

    return (
        <div class="topSpacing">
            <div className="jobHeader">
                <span className="jobHeaderTitle">
                    <Typography id="jobHeaderTitle" component="h4" variant="h5">Categories</Typography>
                </span>
                <span>
                    <Typography id="jobHeaderMore" component="h6" variant="h5">
                        more
                    </Typography>
                </span>
            </div>
            <div className="categoryGrid">
                <Grid container spacing={1}>
                    {categories.map(category => (
                        <Grid item xs={4} md={4} lg={4}>
                            <Paper align="center" id="categoryPaper" style={{backgroundColor: category.color}} >
                                <Paper id="categoryIcon" elevation={0}> <category.icon htmlColor={category.iconColor}/> </Paper>
                                <Typography id="categoryTitle" variant="h4" component="h4">{category.title}</Typography>
                                <Typography id="categoryNumberOfJobs" variant="h2" component="h2">{category.numberOfJobs}</Typography>
                                <Button id="categoryButton" variant="contained" size="small">View Jobs</Button>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    )
}

export default category
