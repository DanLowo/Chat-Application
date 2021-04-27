import React from "react";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Stories from "./components/Stories";
import Bottombar from "./components/Bottombar";

function index() {
  return (
    <div>
      <Navbar />
      <Stories />
      <div style={{marginBottom: 80}}>
      {[1, 2, 3].map((i) => (
        <Post key={i} />
      ))}
      </div>

      <Bottombar/>
    </div>
  );
}

export default index;
