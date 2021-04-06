import React from 'react'

// import MUI components
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Chip from '@material-ui/core/Chip'

// import MUI icons
import ScheduleIcon from '@material-ui/icons/Schedule';

function jobs() {
    const jobs = [
        {
            company: "Skuri Bebo  Inc.",
            position: "Product Designer",
            location: "Osun, Nigeria",
            type: "Contract",
            time: "4 Hours Ago"
        },
        {
            company: "Zameria.",
            position: "Content Developer",
            location: "Lagos, Nigeria",
            type: "Full time",
            time: "5 Hours Ago"
        },
        {
            company: "Flutterwave",
            position: "Fullstack Web Developer",
            location: "Lagos, Nigeria",
            type: "Full time",
            time: "2 Days Ago"
        },
        {
            company: "Access Bank.",
            position: "Network Engineer",
            location: "Abuja, Nigeria",
            type: "Full time",
            time: "1 Hour Ago"
        }
    ]
    return (
        <div>
            <Grid container spacing={1}>
                {jobs.map((job, i) => (
                    <Grid key={i} item xs={6} md={6} lg={3} >
                        <Paper id="jobPaper">
                            <Typography id="jobCompany" component="h5" variant="h5">{job.company}</Typography>
                            <Typography id="jobPosition" component="h4" variant="h5">{job.position}</Typography>
                            <Typography id="jobLocation" component="h6" variant="h6">{job.location}</Typography>
                            <Chip id="jobType" label={job.type} />
                            <Typography id="beAnEarlyApplicant" component="h6" variant="h6">
                                <ScheduleIcon id="beAnEarlyApplicationIcon"/>
                                Be an early application
                            </Typography>
                            <Typography id="jobTime" component="h6" variant="h6">Posted: {job.time}</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default jobs
