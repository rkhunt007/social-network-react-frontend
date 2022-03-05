import React, { Fragment } from "react";
import { Route, withRouter } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";

class Dashboard extends React.Component {
  render() {
    const { path } = this.props.match;
    return (
      <Fragment>
        <Header></Header>
        <div className="container py-2">
          <Route path={`${path}`} exact component={Home}></Route>
          <Route path={`${path}/profile`} exact component={Profile}></Route>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Dashboard);
