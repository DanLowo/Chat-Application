// import all chat pages

import "./chat/assets/app.css"

import Chat from "./chat/index"

import { Switch, Route } from "react-router-dom"

function App() {
  return <div className="App">
      <Switch>
        {/* set all chat design routes */}
          <Route exact path="/">
              <Chat/>
          </Route>

      </Switch>
  </div>;
}

export default App;
