import React, { Component } from 'react'
import { MarioContextConsumer } from './MarioContext'
import { withRouter } from 'react-router';

class NavBar extends Component {
    render() {
        console.log("HISTORY:", this.props.history);

        return (
            <MarioContextConsumer> 
            {
                (value) => {
                    return (
                        <div className="bg-info">
                            <h1 onClick={() => this.props.history.push('/')}>Nav Bar</h1>
                            {"true" === value.isLoggedIn ? <h3 className="btn" onClick={(e) => value.handleLogout(e)}>Logout</h3> :
                            <h3 className="btn" onClick={() => this.props.history.push('/login')}>Login</h3>
                            }

                    </div>
                )
                }
            }
            </MarioContextConsumer> 
        )
    }
}

export default withRouter(NavBar);
