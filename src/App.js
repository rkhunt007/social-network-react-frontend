import { useEffect } from "react";
import { Route, Router, Switch } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth/Auth";
import Dashboard from "./components/Dashboard/Dashboard";
// import Profile from "./components/Profile/Profile";
import history from "./components/history";
import PrivateRoute from "./components/PrivateRoute";
import { authUser } from "./actions/auth";
import store from "./store";

function App() {
  useEffect(() => {
    store.dispatch(authUser());
  }, []);

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Auth}></Route>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        {/* <PrivateRoute path="/dashboard/profile" component={Profile} /> */}
      </Switch>
    </Router>
  );
}

export default App;
