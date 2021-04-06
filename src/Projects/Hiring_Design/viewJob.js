import React from "react";

import ViewJobHeader from "../../components/Hiring_Design/viewJobHeader";
import JobsWithHeader from "../../components/Hiring_Design/jobsWithHeader"

// import MUI components
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"

function viewJob() {
  const requirements = [
    "5+ years industry experience as a Product Designer at a tech, product-driven company.",
    "Track record in craft and great visual design.",
    "Portfolios that are clear, clean, and easy to navigate.",
    "Extremely high attention to detail. You set the bar for what we strive to do in our products.",
    "Ability to think through complex systems."
  ];

  const responsibilities = [
    "Create a unified, end-to-end experience through close collaboration with cross functional teams (product, marketing, engineering and other business partners).",
    "Influence the shape of the product with research and data while executing design work using high quality wireframes, mockups, user journeys, and cross-platform interactive prototypes.",
    "Working closely with Engineering to ensure a high-quality implementation.",
    "Helping with hiring, mentoring, and establishing a design culture within the company."
  ];

  return (
    <div>
      <Hidden smDown>
        <Grid container>
          <Grid item md={4} lg={4} id="largeScreenJobs">
            <JobsWithHeader header="Recommended For You" />
          </Grid>

          <Grid item md={8} lg={8} id="largeScreenViewJob">
            <ViewJobHeader />
            <div id="viewJob">
              <div className="jobDescription">
                <Typography variant="h3" component="h3" id="jobPosition">
                  {" "}
                  Job Description{" "}
                </Typography>
                <p id="viewJobTextBody">
                  Want to join one of the nation's best employers? Interested in
                  providing small and medium sized businesses with solutions that make
                  them grow? Do you like serving customers and care about people? Then
                  maybe Heartland is for you: We're looking for team members who are
                  excited by our mantra - Entrepreneurs Respectfully Serving
                  Entrepreneurs, and who want to work in a culture built on care,
                  focus and quality.
          </p>
              </div>
              <div className="responsibilities">
                <Typography variant="h3" component="h3" id="jobPosition">
                  {" "}
                  Responsibilities{" "}
                </Typography>

                {responsibilities.map((i, k) => (
                  <ul key={k} id="viewJobTextBodyList">
                    <li key={k}> {i} </li>
                  </ul>
                ))}
              </div>
              <div className="requirements">
                <Typography variant="h3" component="h3" id="jobPosition">
                  {" "}
                  Requirements{" "}
                </Typography>
                {requirements.map((i, k) => (
                  <ul key={k} id="viewJobTextBodyList">
                    <li key={k}> {i} </li>
                  </ul>
                ))}
              </div>
              <Button fullWidth variant="contained" id="applyToJobButton"> Apply to job </Button>
            </div>
          </Grid>
        </Grid>
      </Hidden>

      <Hidden mdUp>
        <ViewJobHeader />
        <div id="viewJob">
          <div className="jobDescription">
            <Typography variant="h3" component="h3" id="jobPosition">
              {" "}
              Job Description{" "}
            </Typography>
            <p id="viewJobTextBody">
              Want to join one of the nation's best employers? Interested in
              providing small and medium sized businesses with solutions that make
              them grow? Do you like serving customers and care about people? Then
              maybe Heartland is for you: We're looking for team members who are
              excited by our mantra - Entrepreneurs Respectfully Serving
              Entrepreneurs, and who want to work in a culture built on care,
              focus and quality.
          </p>
          </div>
          <div className="responsibilities">
            <Typography variant="h3" component="h3" id="jobPosition">
              {" "}
              Responsibilities{" "}
            </Typography>

            {responsibilities.map((i, k) => (
              <ul key={k} id="viewJobTextBodyList">
                <li key={k}> {i} </li>
              </ul>
            ))}
          </div>
          <div className="requirements">
            <Typography variant="h3" component="h3" id="jobPosition">
              {" "}
              Requirements{" "}
            </Typography>
            {requirements.map((i, k) => (
              <ul key={k} id="viewJobTextBodyList">
                <li key={k}> {i} </li>
              </ul>
            ))}
          </div>
          <Button fullWidth variant="contained" id="applyToJobButton"> Apply to job </Button>
        </div>
      </Hidden>
    </div>
  );
}

export default viewJob;
