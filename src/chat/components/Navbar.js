import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import Notifications from "@material-ui/icons/NotificationsOutlined";
import Search from "@material-ui/icons/SearchOutlined";
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
    fontSize: '22px'
  },
  navbarSpan: {
    marginTop: "17px",
  },
  navbarIcon: {
    color: "grey",
    marginLeft: "18px",
  },
}));

function Navbar() {
  const styles = customStyles();

  return (
    <Paper className={styles.paper}>
      <div className={styles.navbar}>
        <h1 className={styles.navbarHeader}>
            <span style={{color:'blue'}}>twi</span>
            <span style={{color: 'grey'}} >fi</span>
        </h1>
        <span className={styles.navbarSpan}>
          <Badge badgeContent={1} color="secondary">
            <Notifications className={styles.navbarIcon} />
          </Badge>
        </span>
        <span className={styles.navbarSpan}>
          <Search className={styles.navbarIcon} />
        </span>
      </div>
    </Paper>
  );
}

export default Navbar;
