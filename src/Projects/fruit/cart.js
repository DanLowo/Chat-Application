import React from "react";

import "./assets/App.css";

import Typography from "@material-ui/core/Typography";

import BottomNav from "./components/BottomNav";
import CartGrid from "./components/cartGrid";

function Cart() {
  return (
    <div>
      <div id="fruit">
        <Typography align="center" id="cartTitle">
          My Cart
        </Typography>
        <CartGrid />
      </div>
      <div id="bottomNavSpacing">
        <BottomNav />
      </div>
    </div>
  );
}

export default Cart;
