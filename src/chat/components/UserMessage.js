import React, { useContext } from "react";
import ChatContext from "../context/ChatContext"

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom"

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider"
import Avatar from "@material-ui/core/Avatar";

import Image from "../assets/avatar1.jpeg";

const customStyles = makeStyles(() => ({
  card: {
    marginTop: "10px",
    borderRadius: '0px'
  },
  userImage: {
    width: '60px',
    height: '60px'
  },
  messageTime: {
    marginBottom: "0px",
    marginRight: '3px',
    color: 'grey'
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

  const context = useContext(ChatContext)
  let chats = context.chats
  let searchList = context.messengerSearchList
  let showList = []
  if(searchList.length !== 0){
    showList = searchList
  } else {
    showList = chats
  }

  const styles = customStyles();
  return (
    <div className="userMessage">
      {
        showList.map((chat, k) => (
          <div key={k}>
            <Card component={Link} to="/chat" className={styles.card} elevation={0}>
              <CardHeader
                avatar={<Avatar src={Image} className={styles.userImage} />}
                action={
                  <div align="right" style={{marginRight: 2}}>
                    <p className={styles.messageTime}>{chat.time}</p>
                    <p className={styles.messageCount}>
                      {chat.unread && <Avatar className={styles.messageCountAvatar}>2</Avatar>}
                    </p>
                  </div>
                }
                title={
                  <span>
                    <b> {chat.userName} </b>
                  </span>
                }
                subheader={chat.messageExcerpt+'..'}
              />
            </Card>
            <Divider />
          </div>
        ))
      }
    </div>
  );
}

export default UserMessage;
