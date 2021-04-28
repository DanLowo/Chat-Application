import React, {useContext} from "react";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Stories from "./components/Stories";
import Bottombar from "./components/Bottombar";
import ChatContext from "./context/ChatContext";

function Index() {

  const context = useContext(ChatContext)
  return (
    <div>
      <Navbar />
      <Stories />
      <div style={{marginBottom: 80}}>
      {context.posts.map((eachPost, k) => (
        <Post key={k} post={eachPost} />
      ))}
      </div>

      <Bottombar/>
    </div>
  );
}

export default Index;
