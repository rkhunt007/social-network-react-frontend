import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = (props) => {
  const condition = props.auth.loggedIn;

  return condition ? <Route path={props.path} component={props.component} {...props} /> : <Redirect to="/" />;
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, {})(PrivateRoute);
