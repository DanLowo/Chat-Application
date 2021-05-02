import React, { useContext, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {useHistory} from "react-router-dom"
import Chat from "@material-ui/icons/ChatBubbleOutline"
import Search from "@material-ui/icons/SearchOutlined";
import Person from "@material-ui/icons/PersonOutline"
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton"

import ChatContext from "../context/ChatContext"
import SearchBar from "./SearchBar";

const customStyles = makeStyles(() => ({
  paper: {
    borderRadius: '0px',
    top: 0,
    position: 'fixed',
    zIndex: 999,
    width: '100vw !important'
  },
  navbar: {
    display: "flex",
    marginLeft: 10,
    marginRight: 10
  },
  navbarHeader: {
    display: "inline",
    flexGrow: 1,
    fontSize: '18px',
    padding: 5,
    paddingLeft: 0
  },
  navbarSpan: {
    marginTop: "3px",
    marginRight: '-10px'
  },
  navbarIcon: {
    color: "grey",
  },
}));

function MessengerNavBar() {
  const history = useHistory()
  const context = useContext(ChatContext)

  const styles = customStyles();

  return (
    <Paper className={styles.paper}>
      <div className={styles.navbar}>
        {
          context.searchBar ? 
            <div className="search">
              <SearchBar />
            </div>
          :
            <Fragment>
              <h1 className={styles.navbarHeader}> Messenger </h1>
              <span className={styles.navbarSpan}>
                <IconButton onClick={() => history.push('/new-chat')}>
                  <Chat className={styles.navbarIcon} />
                </IconButton>
              </span>
              <span className={styles.navbarSpan}>
                <IconButton onClick={() => history.push('/profile')}>
                  <Person className={styles.navbarIcon} />
                </IconButton>
              </span>
              <span className={styles.navbarSpan}>
                <IconButton onClick={() => context.setSearchBar()}>
                  <Search className={styles.navbarIcon} />
                </IconButton>
              </span>
            </Fragment>
        }
      </div>
    </Paper>
  );
}

export default MessengerNavBar;
