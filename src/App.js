// import all chat pages
import "./chat/assets/app.css"

import Index from "./chat/index"
import Messenger from "./chat/Messenger"
import Chat from "./chat/Chat"

import { Switch, Route } from "react-router-dom"

import ChatState from './chat/context/ChatState'
import NewChat from "./chat/NewChat"
import Bookmark from "./chat/Bookmark"
import Profile from "./chat/Profile"

function App() {

  return <div className="App">
    <ChatState>
      <Switch>
        {/* set all chat design routes */}
        <Route exact path="/">
          <Index />
        </Route>
        <Route path="/chats">
          <Messenger />
        </Route>
        <Route path="/chat">
          <Chat />
        </Route>
        <Route path="/new-chat">
          <NewChat />
        </Route>
        <Route path="/bookmark">
          <Bookmark />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </ChatState>


  </div>;
}

export default App;
