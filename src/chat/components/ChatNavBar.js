import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chat from "@material-ui/icons/ChatBubbleOutline"
import Search from "@material-ui/icons/SearchOutlined";
import Person from "@material-ui/icons/PersonOutline"
import Paper from "@material-ui/core/Paper";

const customStyles = makeStyles(() => ({
  paper: {
    borderRadius: '0px',
    paddingLeft: '10px',
    paddingRight: '10px'
  },
  navbar: {
    display: "flex",
  },
  navbarHeader: {
    display: "inline",
    flexGrow: 1,
    fontSize: '25px'
  },
  navbarSpan: {
    marginTop: "22px",
  },
  navbarIcon: {
    color: "grey",
    marginLeft: "12px",
  },
}));

function ChatNavBar() {
  const styles = customStyles();

  return (
    <Paper className={styles.paper}>
      <div className={styles.navbar}>
        <h1 className={styles.navbarHeader}> Messenger </h1>
        <span className={styles.navbarSpan}>
            <Chat className={styles.navbarIcon} />
        </span>
        <span className={styles.navbarSpan}>
          <Person className={styles.navbarIcon} />
        </span>
        <span className={styles.navbarSpan}>
          <Search className={styles.navbarIcon} />
        </span>
      </div>
    </Paper>
  );
}

export default ChatNavBar;
