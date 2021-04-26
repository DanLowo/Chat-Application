// import all chat pages
import "./chat/assets/app.css"

import Index from "./chat/index"
import Messenger from "./chat/Messenger"
import Chat from "./chat/Chat"

import { Switch, Route } from "react-router-dom"
import Bottombar from "./chat/components/Bottombar"

function App() {
  return <div className="App">
      <Switch>
        {/* set all chat design routes */}
          <Route exact path="/">
              <Index/>
          </Route>
          <Route path="/chats">
              <Messenger/>
          </Route>
          <Route path="/chat">
            <Chat/>
          </Route>
      </Switch>

      {window.location.pathname !== '/chat' && <Bottombar/>}
      
  </div>;
}

export default App;
