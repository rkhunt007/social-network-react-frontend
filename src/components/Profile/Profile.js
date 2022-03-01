import React from "react";
import { connect } from "react-redux";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="">
        <p className="h3">Profile</p>
      </div>
    );
  }
}

export default connect(null, {})(Profile);
