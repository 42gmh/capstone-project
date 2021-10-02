import React, { Component } from 'react'
import { MarioContext, MarioContextConsumer } from './MarioContext'
import { Link } from "react-router-dom";


export default class Login extends Component {

    // componentDidMount()
    // {
    //     let value = this.context;
    //     value.handleLogout(null);
    // }

    handleLogin(event, value)
    {
        console.log("calling x", value);

        value.handleLogin(event);

        this.props.history.push('/');
    }

    render() {
        return (
            <MarioContextConsumer> 
            {
                (value) => {
                    return (
                    <div>
                        <form onSubmit={(event) => this.handleLogin(event, value)}>
                        <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" id="email" name="email" className="form-control" required/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" name="password" className="form-control" required/>
                            </div>
                            <input type="submit" className="my-3 btn btn-info" value="Login"/>
                        </form>
                        <h3>OR</h3>
                        <Link to="/singup">
                            <button className="btn btn-info">
                                Sign up as a new user
                            </button>
                        </Link>                        
                        {null == value.errMsg? null : <h5 className="py-1 bg-danger text-white text-center">Error logging in. Please try again.</h5>}
                    </div>
                )}
            }
            </MarioContextConsumer>
        )
    }
}

Login.contextType = MarioContext;

