import React from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";
import "./Auth.css";
import { connect } from "react-redux";
import Spinner from "../../spinner.svg";

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "login",
    };
  }

  toggleMode = () => {
    this.setState({
      mode: this.state.mode === "login" ? "register" : "login",
    });
  };

  renderLoginOrRegister = () => {
    if (this.state.mode === "login") {
      return <Login toggleMode={this.toggleMode}></Login>;
    } else if (this.state.mode === "register") {
      return <Register toggleMode={this.toggleMode}></Register>;
    }
  };

  render() {
    if (this.props.auth.loading) {
      return (
        <div className="align-items-center d-flex justify-content-center" style={{ height: "100vh" }}>
          <img src={Spinner} alt="Spinner" style={{ maxHeight: "50px" }}></img>
        </div>
      );
    } else {
      return (
        <div className="login container">
          <div className="row login-container align-items-center flex-column flex-sm-row justify-content-center">
            <div className="col-12 col-sm mb-4 mb-sm-0 text-center text-sm-start">
              <p className="fs-1 fw-bolder text-primary mb-0">Social Network</p>
              <p className="fs-3 d-none d-sm-block">We help you connect and share with the people in your life.</p>
            </div>
            <div className="col-12 col-sm">{this.renderLoginOrRegister()}</div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(Auth);
