import React from 'react';
import './Register.css';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';

class Register extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
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
        this.props.register(this.state)
    }

    render() {
        return (
            <div className="shadow-sm login-form bg-body rounded">
                <p className="h3 fw-bold">Sign Up</p>
                <p>It's quick and easy.</p>
                <form autoComplete="off" onSubmit={this.onSubmit}>
                    <div className="mb-2">
                        <input className="form-control" type="name" id="name" name="name"
                            placeholder="Email name" value={this.state.name} onChange={this.onChange}>
                        </input>
                    </div>
                    <div className="mb-2">
                        <input className="form-control" type="email" id="email" name="email"
                            placeholder="Email address" value={this.state.email} onChange={this.onChange}>
                        </input>
                    </div>
                    <div className="mb-2">
                        <input className="form-control" type="password" id="password" name="password"
                            placeholder="Password" value={this.state.password} onChange={this.onChange}>
                        </input>
                    </div>
                    <div className="text-center my-3">
                        <button type="submit" className="btn btn-success fw-bold">Sign up</button>
                    </div>
                    <div className="text-center">
                        <a href="#0" onClick={this.props.toggleMode}>Already have an account? Log in</a>
                    </div>
                </form>
            </div>
        )
    }

}

export default connect(null, { register })(Register);
