import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions/users";
import { format } from "date-fns";
class Home extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  addDefaultSrc(ev) {
    ev.target.src = `${process.env.REACT_APP_BASE_URL}/user.png`;
  }

  renderUsers = () => {
    if (!this.props.users.loading && this.props.users.users.length > 0) {
      return this.props.users.users.map((user) => (
        <div className="col-sm-6 col-md-4 col-lg-3 mb-3" key={user._id}>
          <div className="card">
            <img
              src={`http://localhost:5000/${user.image}`}
              onError={this.addDefaultSrc}
              className="card-img-top user-image"
              alt="User"
            ></img>
            <div className="card-body py-1">
              <h5 className="card-title mb-1 text-break">{user.name}</h5>
              <p className="card-text mb-0 text-break">{user.email}</p>
              <p className="card-text mb-0 text-break">
                <small className="text-muted"></small>Joined{" "}
                {format(new Date(user.date), "MMMM do, yyyy")}
              </p>
              <div className="d-grid my-2">
                <button className="btn btn-outline-primary">Add Friend</button>
              </div>
            </div>
          </div>
        </div>
      ));
    }
  };

  render() {
    return (
      <div>
        <p className="fs-3">Welcome {this.props.auth.user.name}</p>

        {/* Add friend requests here */}
        <p className="fs-5">People you can connect with</p>
        <div className="mb-3">
          <div className="row">{this.renderUsers()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    users: state.users,
  };
};

export default connect(mapStateToProps, { fetchUsers })(Home);
