import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Button from "@material-ui/core/Button"
import CardMedia from "@material-ui/core/CardMedia"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogAction from "@material-ui/core/DialogActions"

import MoreVertIcon from "@material-ui/icons/MoreVert"
import LikeIcon from "@material-ui/icons/ThumbUpAltOutlined"
import CommentIcon from "@material-ui/icons/CommentOutlined"
import ShareIcon from "@material-ui/icons/ShareOutlined"

// import Image from "../assets/avatar.png"
import Image2 from "../assets/avatar.png"
import Image3 from "../assets/avatar1.jpeg"
import Image4 from "../assets/avatar2.png"
import ChatContext from "../context/ChatContext";

const customStyles = makeStyles(() => ({
  root: {
    margin: '10px',
  },
  avatar: {
    width: '50px',
    height: '50px'
  },
  body: {
    marginTop: '0px',
    fontSize: '15px'
  },
  card: {
    borderRadius: '14px'
  },
  actionText: {
    fontSize: '13px',
    textTransform: 'lowercase'
  },
  actionText1: {
    fontSize: '13px',
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
    marginLeft: '-20px'
  }
}));

function Post({ post }) {
  const styles = customStyles();
  const [menu, setMenu] = useState(false)
  const [dialog, setDialog] = useState({status: false, data: ''})
  const context = useContext(ChatContext)
  const bookmarkList = context.bookmarks

  const bookmark = () => {
    bookmarkList.includes(post) ? alert('Already Bookmarked') : context.addToBookMark(post)
    setMenu(null)
    setDialog({status: true, data: 'Post Saved'})
  }

  const removeFromBookmark = () => {
    bookmarkList.includes(post) ? context.removeFromBookmark(post) : alert('Not Bookmarked')
    setMenu(null)
    setDialog({status: true, data: 'Post Unsaved'})
  }

  const viewedUserImages = [Image2, Image4]

  return (
    <div className={styles.root}>
      <Dialog open={dialog.status} onClose={() => setDialog({status: false, data: ''})}>
        <DialogTitle> {dialog.data} </DialogTitle>
        <DialogAction>
          <Button onClick={() => setDialog({status: false, data: ''})} size="small" variant="contained" color="primary">Close</Button>
        </DialogAction>
      </Dialog>
      <Card className={styles.card}>
        <CardHeader
          avatar={<Avatar src={post.userImage} className={styles.avatar} />}
          action={
            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={(e) => setMenu(e.currentTarget)}>
              <MoreVertIcon />
            </IconButton>
          }
          title={
            <span style={{ fontSize: '16px' }}>
              <b> {post.userName} </b>
            </span>
          }
          subheader={post.time}
        />
        <Menu
          id="simple-menu"
          anchorEl={menu}
          keepMounted
          open={Boolean(menu)}
          onClose={(e) => setMenu(null)}
        >
          <MenuItem onClick={(e) => setMenu(null)}>User Profile</MenuItem>
          { bookmarkList.includes(post) ? <MenuItem onClick={removeFromBookmark}>Unsave</MenuItem> : <MenuItem onClick={bookmark}>Save</MenuItem> }
        </Menu>
        {post.bodyImg ? <CardMedia component="img" image={post.bodyImg} alt={post.userName} /> : <></>}
        <CardContent style={{ paddingTop: 15 }}>
          <p className={styles.body}>
            {post.body}
          </p>
          <div>
            <Avatar className={styles.viewedUserImages} src={Image3} />
            {viewedUserImages.map(user => (
              <Avatar key={user} className={styles.viewedUserImages1} src={user} />
            ))}
          </div>
        </CardContent>

        <CardActions>
          <Button className={styles.actionText} startIcon={<LikeIcon />}>
            {post.likes} likes
          </Button>
          <Button className={styles.actionText1} startIcon={<CommentIcon />}>
            {post.thoughts} thoughts
          </Button>
          <Button startIcon={<ShareIcon />} />
        </CardActions>
      </Card>
    </div>
  );
}

export default Post;
