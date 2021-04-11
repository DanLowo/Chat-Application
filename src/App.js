
// import all pages for hiring design
import HiringDesign from './Projects/hiring/index'
import ViewJob from './Projects/hiring/viewJob'


// import all pages for fruit design
import FruitDesign from "./Projects/fruit/index"
import ViewFruit from "./Projects/fruit/viewFruit"
import Cart from "./Projects/fruit/cart"
import Account from "./Projects/fruit/account" 


// import all pages from fintech design
import FintechDesign from "./Projects/fintech/index"
import Subscriptions from "./Projects/fintech/subscriptions"
import Notifications from "./Projects/fintech/notifications"
import Cards from "./Projects/fintech/cards"
import NewCard from "./Projects/fintech/newCard"


import { Switch, Route } from "react-router-dom"

function App() {
  return <div className="App">
      <Switch>

      {/* set all hirign design routes */}
        <Route exact path="/">
          <HiringDesign/>
        </Route>
        <Route path="/view-job">
          <ViewJob/>
        </Route>


      {/* set all fruit design routes */}
        <Route path="/fruit">
          <FruitDesign/>
        </Route>
        <Route path="/fruits/view-fruit">
          <ViewFruit/>
        </Route>
        <Route path="/fruits/cart">
          <Cart/>
        </Route>
        <Route path="/fruits/account">
          <Account/>
        </Route>


        {/* set all fintech design routes */}
          <Route exact path="/fintech">
              <FintechDesign/>
          </Route>
          <Route path="/fintech/subscriptions">
              <Subscriptions/>
          </Route>
          <Route path="/fintech/notifications">
              <Notifications/>
          </Route>
          <Route path="/fintech/cards">
              <Cards/>
          </Route>
          <Route path="/fintech/new-card">
              <NewCard/>
          </Route>

      </Switch>
  </div>;
}

export default App;
