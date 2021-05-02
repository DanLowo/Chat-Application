import React from "react";

import { useHistory } from "react-router-dom"

import { makeStyles } from "@material-ui/core/styles";
import ChevronLeft from "@material-ui/icons/ChevronLeft"
import IconButton from "@material-ui/core/IconButton"
import Paper from "@material-ui/core/Paper";

const customStyles = makeStyles(() => ({
  paper: {
    borderRadius: '0px',
    paddingLeft: '10px',
    paddingRight: '10px',
    top: 0,
    position: 'fixed',
    width: '100vw !important',
    zIndex: 999
  },
  navbar: {
    display: "flex",
  },
  navbarHeader: {
    display: "inline",
    flexGrow: 1,
    fontSize: '18px',
    padding: 5,
    paddingLeft: 0
  },
  navbarSpan: {
    marginTop: "22px",
  },
  navbarIcon: {
    color: "grey",
    marginLeft: "-15px",
  },
}));

function NewChatNavBar({title}) {
  const styles = customStyles();
  const history = useHistory()

  return (
    <Paper className={styles.paper}>
      <div className={styles.navbar}>
          <IconButton className={styles.navbarIcon} onClick={() => history.goBack()}>
              <ChevronLeft />
          </IconButton>
        <h1 className={styles.navbarHeader}> {title} </h1>
      </div>
    </Paper>
  );
}

export default NewChatNavBar;
