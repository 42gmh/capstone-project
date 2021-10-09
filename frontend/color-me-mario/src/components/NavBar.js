import React, { Component } from 'react'
import { MarioContextConsumer } from './MarioContext'
import { withRouter } from 'react-router';
import thumb from '../thumb.png';
import { Link } from "react-router-dom";

class NavBar extends Component {
    render() {
        console.log("HISTORY:", this.props.history);

        return (
            <MarioContextConsumer> 
            {
                (value) => {
                    return (
                        <nav className="navbar px-3">
                        <Link to="/">
                            <img src={thumb} alt="Mario" className="navbar-brand img-fluid"/>
                        </Link>

                        <Link to="/" className="link-light text-decoration-none">
                            <h1 className="eightbitfont">Color Me Mario!</h1> 
                        </Link>

                        <div>
                            <Link to="/about" className="link-light text-decoration-none">
                                <h3 className="eightbitfont text-light" >About</h3>
                            </Link>
                            {
                                "true" !== value.isLoggedIn ? null :
                                    <h6 className="eightbitfont text-light" onClick={(e) => value.handleLogout(e)}>Logout</h6>
                            }
                        </div>
                    </nav>
                )
                }
            }
            </MarioContextConsumer> 
        )
    }
}

export default withRouter(NavBar);
