import React from "react";

// import all project components
import Navbar from "./components/navbar";
import Search from "./components/search";
import JobsWithHeader from "./components/jobsWithHeader"
import Category from "./components/category"

// import MUI components
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"

// import all project css
import "./assets/App.css"

function index() {
  return (
    <div id="index">

      <Hidden smDown>
        <Grid container>
          <Grid item md={8} lg={8} xl={8} id="largeScreenViewJob">
            <Navbar />
            <div className="main">
              <Typography id="heyEric" variant="h6" component="h6">
                Hey, Eric!
        </Typography>
              <Typography id="findAmazingJobs" variant="h5" component="h5">
                Find Amazing Jobs
        </Typography>
              <div className="search">
                <Search />
              </div>
              <JobsWithHeader />
              <Category />
            </div>
          </Grid>
          <Grid item md={4} lg={4} xl={4} id="largeScreenJobs">
            <JobsWithHeader header="Latest Jobs" />
          </Grid>
        </Grid>
      </Hidden>

      <Hidden mdUp>
        <Navbar />
        <div className="main">
          <Typography id="heyEric" variant="h6" component="h6">
            Hey, Eric!
        </Typography>
          <Typography id="findAmazingJobs" variant="h5" component="h5">
            Find Amazing Jobs
        </Typography>
          <div className="search">
            <Search />
          </div>
          <JobsWithHeader />
          <Category />
        </div>
      </Hidden>

    </div>
  );
}

export default index;
