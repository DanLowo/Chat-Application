// import all chat pages
import "./chat/assets/app.css"

import Index from "./chat/index"
import Chat from "./chat/chat"

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
              <Chat/>
          </Route>

      </Switch>

      <Bottombar/>
  </div>;
}

export default App;
