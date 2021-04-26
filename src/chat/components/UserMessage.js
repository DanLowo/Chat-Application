import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {Link} from "react-router-dom"

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider"
import Avatar from "@material-ui/core/Avatar";

import Image from "../assets/avatar1.jpeg";

const customStyles = makeStyles(() => ({
  root: {
      marginTop: "10px",
      borderRadius: '0px'
  },
  userImage: {
    width: '60px',
    height: '60px'
  },
  messageTime: {
    marginBottom: "0px",
    marginRight: '3px'
  },
  messageCount: {
    marginTop: "3px",
    marginRight: '3px'
  },
  messageCountAvatar: {
    backgroundColor: "blue",
    width: "20px",
    height: "20px",
    fontSize: "15px"
  }
}));

function UserMessage() {
  const styles = customStyles();
  return (
    <div className="userMessage">
      <Card component={Link} to="/chat" className={styles.root} elevation={0}>
        <CardHeader
          avatar={<Avatar src={Image} className={styles.userImage} />}
          action={
            <div align="right">
              <p className={styles.messageTime}>12:33</p>
              <p className={styles.messageCount}>
                <Avatar className={styles.messageCountAvatar}>3</Avatar>
              </p>
            </div>
          }
          title={
            <span>
              <b> Godaddy Inc. </b>
            </span>
          }
          subheader="Hello Daniel, How are you ..."
        />
      </Card>
      <Divider/>
    </div>
  );
}

export default UserMessage;
