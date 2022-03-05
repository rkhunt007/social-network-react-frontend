import React from "react";
import { connect } from "react-redux";
import { getCurrentProfile, updateProfileImg } from "../../actions/profiles";
import "./Profile.css";
class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      image: null,
    };
  }

  // image = null;

  componentDidMount() {
    this.props.getCurrentProfile();
    // setTimeout(() => {
    //   this.props.getCurrentProfile();
    // }, 5000);
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
  };

  addDefaultSrc(ev) {
    ev.target.src = `${process.env.REACT_APP_BASE_URL}/user.png`;
  }

  onFileSelect(e) {
    // validate file type
    let file = e.target.files[0];
    this.setState({ image: file });
  }

  uploadFile = () => {
    let imgFormData = new FormData();
    imgFormData.append("profilePic", this.state.image);
    this.props.updateProfileImg(imgFormData);
  };

  render() {
    return (
      <div className="">
        <p className="h3">My Profile</p>
        <div className="profile-container">
          <div className="img-wrapper">
            <img
              src={`${process.env.REACT_APP_API_URL}/${this.props.profile?.user?.image}`}
              className="user-img"
              alt="User"
              onError={this.addDefaultSrc}
            />
            <form className="my-2">
              <div className="form-group">
                <label htmlFor="exampleFormControlFile1">Select Image</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="exampleFormControlFile1"
                  onChange={(e) => this.onFileSelect(e)}
                />
              </div>
            </form>
            <div>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                disabled={!this.state.image}
                onClick={this.uploadFile}
              >
                Upload
              </button>
            </div>
          </div>
          <div className="info-wrapper"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { profile: state.profiles.profile };
};

export default connect(mapStateToProps, { getCurrentProfile, updateProfileImg })(Profile);

// public/profile/2022-03-05T00:12:22.421ZXzA2NjI5MjYuanBn.jpg
// public/profile/2022-03-05T00:12:22.421ZXzA2NjI5MjYuanBn.jpg
