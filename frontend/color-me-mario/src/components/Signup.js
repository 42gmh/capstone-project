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
                    <>
                    <div className="text-light fs-5 pt-5 px-5">
                        <p>
                            Please create a user so that you can save your Marios to an album.
                        </p>
                    </div>

                    { 
                            null == value.signUpStatus ? 
                                null :value.signUpStatus.success ? 
                                    <h5 className="bg-secondary text-white text-center p-1">Success! Please proceed to <Link className="link-light text-decoration-none fw-bold" to="/login">login</Link>.</h5> : 
                                    <h5 className="bg-danger text-white text-center">{"Please try again. Error with signup: " + value.signUpStatus.msg}</h5>
                        }


                    <div className="container py-3 my-0">
                        <form onSubmit={(event) => value.handleSignup(event)}>
                            <div className="form-group py-3">
                                <input type="text" id="firstname" name="firstname" className="form-control" placeholder="First Name" required/>
                            </div>
                            <div className="form-group pb-3">
                                <input type="lastname" id="lastname" name="lastname" className="form-control" placeholder="Last Name" required/>
                            </div>
                            <div className="form-group pb-3">
                                <input type="email" id="email" name="email" className="form-control" placeholder="em@il" required/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <input type="password" id="password" name="password" className="form-control" placeholder="Password" required/>
                            </div>
                            <input type="submit" className="my-3 btn btn-secondary" value="Register"/>
                        </form>
                        </div>
                    </>
                )}
            }
            </MarioContextConsumer>
        )
    }
}
