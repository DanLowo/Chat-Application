import React, { useContext } from "react";
import ChatContext from "../context/ChatContext"

import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom"

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider"
import Avatar from "@material-ui/core/Avatar";

const customStyles = makeStyles(() => ({
  card: {
    marginTop: "10px",
    borderRadius: '0px'
  },
  userImage: {
    width: '55px',
    height: '55px'
  },
  messageTime: {
    marginBottom: "0px",
    marginRight: '3px',
    color: 'grey',
    fontSize: 13
  },
  messageCount: {
    marginTop: "3px",
    marginRight: '3px'
  },
  messageCountAvatar: {
    backgroundColor: "blue",
    width: "15px",
    height: "15px",
    fontSize: "11px",
    padding: 2,
    paddingTop: 3
  },
  subheader: {
    fontSize: 12
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

  const history = useHistory()

  const enterChat = username => {
    context.setUser(username)
    history.push('/chat')
  }

  const styles = customStyles();
  return (
    <div className="userMessage">
      {
        showList.map((chat, k) => (
          <div key={k}>
            <Card onClick={() => enterChat(chat.userName)} className={styles.card} elevation={0}>
              <CardHeader
                avatar={<Avatar src={chat.userImage} className={styles.userImage} />}
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
                subheader={
                  <span className={styles.subheader}>
                    {chat.messageExcerpt+'..'}
                  </span>
                }
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
