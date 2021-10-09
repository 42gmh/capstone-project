import React, { Component } from 'react'
import { MarioContext, MarioContextConsumer } from './MarioContext'
import { Link } from "react-router-dom";
import Reason from './Reason';


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
                        {null == value.errMsg? null : <h5 className="py-1 my-5 bg-danger text-white text-center">Error logging in. Please try again.</h5>}

                        <div className="container py-0 my-0">
                        <form onSubmit={(event) => this.handleLogin(event, value)}>
                            <div className="form-group">
                                <label htmlFor="email" className="text-light">Email address</label>
                                <input type="email" id="email" name="email" className="form-control" required/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="password"className="text-light" >Password</label>
                                <input type="password" id="password" name="password" className="form-control" required/>
                            </div>
                            <input type="submit" className="my-3 btn btn-secondary" value="Login"/>
                        </form>
                        <p className="text-light">OR</p>
                        <Link to="/singup">
                            <button className="btn btn-secondary">
                                Sign up as a new user
                            </button>
                        </Link>                        
                        </div>
                        <Reason/>
                    </div>
                )}
            }
            </MarioContextConsumer>
        )
    }
}

Login.contextType = MarioContext;

