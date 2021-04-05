import React from "react";
import { AppBar, IconButton, Toolbar, Avatar } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

function navbar() {
  return (
    <div style={{ display: "flex" }}>
      <span className="icon">
        <IconButton>
          <Menu />
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
