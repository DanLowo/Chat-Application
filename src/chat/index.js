import React from "react";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Stories from "./components/Stories";

function index() {
  return (
    <div>
      <Navbar />
      <Stories />
      {[1, 2, 3].map((i) => (
        <Post key={i} />
      ))}

    </div>
  );
}

export default index;
