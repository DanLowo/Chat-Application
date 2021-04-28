import React, { useState } from "react";

import { useHistory } from "react-router-dom"

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Fab from "@material-ui/core/Fab"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles";

import Home from "@material-ui/icons/Home";
import Chat from "@material-ui/icons/Chat";
import Add from "@material-ui/icons/Add";
import Bookmark from "@material-ui/icons/Bookmark";
import CreateMessage from "@material-ui/icons/ChatBubbleOutlineOutlined"
import Person from "@material-ui/icons/Person"


const customStyles = makeStyles(() => ({
  root: {
    bottom: 0,
    position: "fixed",
    width: '100vw !important',
    zIndex: 999
  },

  addButton: {
    backgroundColor: "grey",
    padding: "9px",
    paddingRight: '10px',
    paddingLeft: "10px",
    borderRadius: '50%'
  },

  fabDiv: {
    marginRight: '10px',
    marginBottom: "10px"
  },
  paper: {
    paddingRight: 15,
    paddingLeft: 18
  }
}));

function Bottombar() {

  let history = useHistory()

  let path = window.location.pathname;

  let message = false

  if (path === "/chats") {
    message = true
  } else {
    message = false
  }

  const [value, setValue] = useState(path);
  const styles = customStyles();

  const handleLink = (pathname) => {
    switch (pathname) {
      case 'home':
        history.push('/')
        break;
      case 'chats':
        history.push('/chats')
        break;
      case 'create':
        history.push('/')
        break;
      case 'bookmark':
        history.push('/')
        break;
      case 'profile':
        history.push('/')
        break;
      case 'new-chat':
        history.push('/new-chat')
        break;
      default:
        history.push('/')
    }
  }

  return (
    <div className={styles.root}>
      {message &&
        <div align="right" className={styles.fabDiv}>
          <Fab className={styles.fab} color="primary" onClick={() => handleLink('new-chat')}>
            <CreateMessage />
          </Fab>
        </div>
      }

      <Paper className={styles.paper}>
        <BottomNavigation showLabels value={value} onChange={(e, newValue) => {
          setValue(newValue)
        }}>
          <BottomNavigationAction value="/" label="Home" icon={<Home />} onClick={() => handleLink('home')} />
          <BottomNavigationAction value="/chats" label="Chats" icon={<Chat />} onClick={() => handleLink('chats')} />
          <BottomNavigationAction
            onClick={() => handleLink('create')}
            value="/create"
            icon={
              <div className={styles.addButton}>
                <Add htmlColor="white" />
              </div>
            }
          />
          <BottomNavigationAction
            onClick={() => handleLink('bookmark')}
            value="/bookmark"
            label="Bookmarks"
            icon={<Bookmark />}
          />
          <BottomNavigationAction
            onClick={() => handleLink('profile')}
            value="/profile"
            label="Me"
            icon={<Person />}
          />
        </BottomNavigation>
      </Paper>

    </div>
  );
}

export default Bottombar;
