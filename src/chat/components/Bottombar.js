import React, { useState } from "react";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { makeStyles } from "@material-ui/core/styles";

import Home from "@material-ui/icons/Home";
import Chat from "@material-ui/icons/Chat";
import Add from "@material-ui/icons/Add";
import Bookmark from "@material-ui/icons/Bookmark";
import Person from "@material-ui/icons/Person"

const customStyles = makeStyles(() => ({
  root: {
    bottom: 0,
    position: "fixed",
    width: '100vw !important'
  },

  addButton: {
    backgroundColor: "grey",
    padding: "9px",
    paddingRight: '10px',
    paddingLeft: "10px",
    borderRadius: '50%'
  }
}));

function Bottombar() {
  let path = window.location.pathname;

  const [value, setValue] = useState(path);
  const styles = customStyles();

  const handle = () => {
    setValue(path)
  }
  
  return (
    <div className={styles.root}>
      <BottomNavigation showLabels value={value}>
        <BottomNavigationAction value="/" label="Home" icon={<Home />} onInput={handle} />
        <BottomNavigationAction value="/chat" label="Chat" icon={<Chat />} />
        <BottomNavigationAction
          value="/create"
          icon={
            <div className={styles.addButton}>
              <Add htmlColor="white" />
            </div>
          }
        />
        <BottomNavigationAction
          value="/bookmark"
          label="Bookmarks"
          icon={<Bookmark />}
        />
        <BottomNavigationAction
          value="/profile"
          label="Me"
          icon={<Person/>}
        />
      </BottomNavigation>
    </div>
  );
}

export default Bottombar;
