import React from "react";

// import MUI components
import IconButton from "@material-ui/core/IconButton"
import Avatar from "@material-ui/core/Avatar"

// import color
import Grey from "@material-ui/core/colors/grey"

// import icons
import Menu from '@material-ui/icons/Menu'

function navbar() {
  const black = Grey[900]
  return (
    <div className="navbar">
      <span className="icon">
        <IconButton>
          <Menu htmlColor={black} fontSize="large" />
        </IconButton>
      </span>
      <span>
        <IconButton>
          <Avatar src="https://material-ui.com/static/images/avatar/2.jpg" />
        </IconButton>
      </span>
    </div>
  );
}

export default navbar;
