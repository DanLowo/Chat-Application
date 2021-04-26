import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Button from "@material-ui/core/Button"
// import Grid from "@material-ui/core/Grid"

import MoreVertIcon from "@material-ui/icons/MoreVert"
import LikeIcon from "@material-ui/icons/ThumbUpAltOutlined"
import CommentIcon from "@material-ui/icons/CommentOutlined"
import ShareIcon from "@material-ui/icons/ShareOutlined"

import Image from "../assets/avatar.png"
import Image2 from "../assets/avatar.png"
import Image3 from "../assets/avatar1.jpeg"
import Image4 from "../assets/avatar2.png"

const customStyles = makeStyles(() => ({
  root: {
      margin: '15px'
  },
  avatar: {
    width: '50px',
    height: '50px'
  },
  body: {
      marginTop: '0px',
      fontSize: '16px'
  },
  card: {
      borderRadius: '14px'
  },
  actionText: {
      fontSize: '14px',
      textTransform: 'lowercase'
  },
  actionText1: {
    fontSize: '14px',
    marginRight: 'auto',
    textTransform: 'lowercase'
  },
  viewedUserImages: {
    display: 'inline-block',
    border: '2px solid rgb(233, 228, 228)',
  },
  viewedUserImages1: {
    display: 'inline-block',
    border: '2px solid rgb(233, 228, 228)',
    marginLeft: '-15px'
  }
}));

function Post() {
  const styles = customStyles();

  const viewedUserImages = [Image2, Image4]

  return (
    <div className={styles.root}>
      <Card className={styles.card}>
        <CardHeader
          avatar={<Avatar src={Image} className={styles.avatar} />}
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={
              <span style={{fontSize: '16px'}}>
                  <b>Daniel Olulowo</b>
              </span>
          }
          subheader="45 mins ago"
        />
        <CardContent style={{paddingTop: 5}}>
            <p className={styles.body}>
                When desiging user experience, the user always comes first. I mean, it's
                in the name- USER experience. An app must be useable, useful and enjoyable
                to the user. And yes i speak un poco espanol.
            </p>
            <div>
            <Avatar className={styles.viewedUserImages} src={Image3} />
          {viewedUserImages.map(user => (
              <Avatar key={user} className={styles.viewedUserImages1} src={user} />
          ))}
        </div>
        </CardContent>

        <CardActions>
          <Button className={styles.actionText} startIcon={ <LikeIcon/> }>
              2.2k likes
          </Button>
          <Button className={styles.actionText1}  startIcon={ <CommentIcon/> }>
              177 thoughts
          </Button>
          <Button startIcon={ <ShareIcon/> } />
        </CardActions>
      </Card>
    </div>
  );
}

export default Post;
