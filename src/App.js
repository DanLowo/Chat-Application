import HiringDesign from './Projects/Hiring_Design/index'
import ViewJob from './Projects/Hiring_Design/viewJob'

import { Switch, Route } from "react-router-dom"

function App() {
  return <div className="App">
      <Switch>
        <Route exact path="/">
          <HiringDesign/>
        </Route>
        <Route path="/view-job">
          <ViewJob/>
        </Route>
      </Switch>
  </div>;
}

export default App;
