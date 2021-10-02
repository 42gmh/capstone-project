import React, { Component } from 'react'
import { MarioContextConsumer } from './MarioContext'
import { Link } from "react-router-dom";


export default class Signup extends Component {
    render() {
        
        return (
            <MarioContextConsumer> 
            {
                (value) => {
                    return (
                    <div>
                        <form onSubmit={(event) => value.handleSignup(event)}>
                            <div className="form-group">
                                <label htmlFor="firstname">First Name</label>
                                <input type="text" id="firstname" name="firstname" className="form-control" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastname">Last Name</label>
                                <input type="lastname" id="lastname" name="lastname" className="form-control" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" id="email" name="email" className="form-control" required/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" name="password" className="form-control" required/>
                            </div>
                            <input type="submit" className="my-3 btn btn-info" value="Register"/>
                        </form>

                        { 
                            null == value.signUpStatus ? 
                                null :value.signUpStatus.success ? 
                                    <h5 className="bg-info text-white text-center">Success! Please proceed to <Link to="/login">login</Link>.</h5> : 
                                    <h5 className="bg-danger text-white text-center">{"Please try again. Error with signup: " + value.signUpStatus.msg}</h5>
                        }
                    </div>
                )}
            }
            </MarioContextConsumer>
        )
    }
}
