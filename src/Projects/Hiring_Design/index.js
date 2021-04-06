import React from "react";

import "../../css/Hiring_Design/App.css"

// import all project components
import Navbar from "../../components/Hiring_Design/navbar";
import Search from "../../components/Hiring_Design/search";
import JobsWithHeader from "../../components/Hiring_Design/jobsWithHeader"
import Category from "../../components/Hiring_Design/category"

// import MUI components
import Typography from "@material-ui/core/Typography";



function index() {
  return (
    <div>
      <Navbar />
      <div className="main">
        <Typography id="heyEric" variant="h6" component="h6">
          Hey, Eric!
        </Typography>
        <Typography id="findAmazingJobs" variant="h5" component="h5">
          Find Amazing Jobs
        </Typography>
        <div className="search">
            <Search/>
        </div>
        <JobsWithHeader/>
        <Category/>
      </div>
    </div>
  );
}

export default index;
