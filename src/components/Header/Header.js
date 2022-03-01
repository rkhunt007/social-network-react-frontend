import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';

class Header extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#0">
                        Social Network
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard/profile" href="#0">
                                {this.props.auth.user.name}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#0" onClick={() => this.props.logout()}>Logout</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        )
    }

}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { logout })(Header);
