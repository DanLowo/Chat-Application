import React, { useContext } from "react";
import ChatContext from "../context/ChatContext"

import { makeStyles } from "@material-ui/core/styles";
// import { useHistory } from "react-router-dom"

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider"
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/SendRounded"

const customStyles = makeStyles(() => ({
  card: {
    borderRadius: '0px',
    // padding: 0
  },
  userImage: {
    width: '60px',
    height: '60px'
  }
}));

function NewChatList() {

  const context = useContext(ChatContext)
  let chats = context.users
//   const history = useHistory()

//   const enterChat = username => {
//     context.setUser(username)
//     history.push('/chat')
//   }

  const styles = customStyles();
  return (
    <div className="userMessage">
      {
        chats.map((chat, k) => (
          <div key={k}>
            <Card className={styles.card} elevation={0}>
              <CardHeader
                avatar={<Avatar src={chat.userImage} className={styles.userImage} />}
                action={
                  <div align="right" style={{marginRight: 2}}>
                    <IconButton style={{paddingTop: "25px"}}>
                        <SendIcon/>
                    </IconButton>
                  </div>
                }
                title={
                  <span>
                    <b> {chat.userName} </b>
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

export default NewChatList;
