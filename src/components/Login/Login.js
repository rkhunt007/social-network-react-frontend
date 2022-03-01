import React from 'react'
import './Login.css';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

class Login extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state)
    }

    render() {
        return (
            <div className="shadow-sm login-form bg-body rounded">
                <form autoComplete="off" onSubmit={(e) => this.onSubmit(e)}>
                    <div className="mb-2">
                        <input className="form-control" type="email" id="email" name="email"
                            placeholder="Email address" value={this.state.email} onChange={(e) => this.onChange(e)}>
                        </input>
                    </div>
                    <div className="mb-2">
                        <input className="form-control" type="password" id="password" name="password"
                            placeholder="Password" value={this.state.password} onChange={(e) => this.onChange(e)}>
                        </input>
                    </div>
                    <div className="d-grid my-3">
                        <button type="submit" className="btn btn-primary fw-bold">Log in</button>
                    </div>
                    <div className="text-center">
                        <a href="#0">Forgot Password?</a>
                    </div>
                    <hr></hr>
                    <div className="text-center my-3">
                        <button type="button" className="btn btn-success fw-bold" onClick={this.props.toggleMode}>Creat New Account</button>
                    </div>
                </form>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { login })(Login);
