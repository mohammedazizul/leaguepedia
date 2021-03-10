import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from "./components/NoMatch/NoMatch";
import Navigation from "./components/Navigation/Navigation";
import CardDetails from "./components/CardDetails/CardDetails";

function App() {
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/leagueDetails/:id">
          <CardDetails/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
