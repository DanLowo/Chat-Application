import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Add from "@material-ui/icons/Add";
import Paper from "@material-ui/core/Paper";

const customStyles = makeStyles(() => ({
  root: {
    padding: "13px",
  },
  storiesHeader: {
    fontSize: "20px",
    color: "blue",
  },
  storiesDiv: {
    overflowX: "auto",
    overflowY: "hidden",
    whiteSpace: "nowrap",
  },
  storyAvatar: {
    display: "inline-block",
    marginRight: "15px",
    padding: "18px",
  },
}));

function Stories() {
  const styles = customStyles();

  const stories = ["A", "B", "C", "D", "E"];

  return (
    <Paper>
      <div className={styles.root}>
        <h1 className={styles.storiesHeader}> Short Stories</h1>
        <div className={styles.storiesDiv}>
          <Avatar className={styles.storyAvatar} align="center">
            <Add fontSize="large" />
          </Avatar>
          {stories.map((story, k) => (
            <Avatar className={styles.storyAvatar} key={k} align="center">
              {" "}
              {story}{" "}
            </Avatar>
          ))}
        </div>
      </div>
    </Paper>
  );
}

export default Stories;
