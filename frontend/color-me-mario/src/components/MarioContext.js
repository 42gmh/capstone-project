import React, { Component } from 'react'

const MarioContext = React.createContext();

const serverURL = "api/v1";

export default class MarioContextProvider extends Component {

    state = {
        isLoggedIn: window.localStorage.getItem("marioLoggedIn"),
        errMsg: null,
        signUpStatus: null,
        marios: []
    }

    handleSignup = (e) => {
        console.log("handleSignup...");

        e.preventDefault();

        const newUser = { user:{
            email: e.target.email.value,
            password: e.target.password.value,
            firstname: e.target.firstname.value, 
            lastname: e.target.lastname.value
        }};

        console.log("New User!:" + JSON.stringify(newUser));

        fetch(serverURL + "/signup", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(newUser)
        })
        .then(httpResponse => {
            if(httpResponse.ok)
            {
                this.setState(() => {
                    return {
                        ...this.state,
                        signUpStatus: {
                            success: true,
                            msg: null
                        }
                    };
                });
            }
            else {
                httpResponse.json().then((payload) => {
                    this.setState(() => {
                        return {
                            ...this.state,
                            signUpStatus: {
                                success: false,
                                msg: payload
                            }
                        };
                    });
                })
            }
        });
    }

    handleLogin = (e) => {
        console.log("handleLogin...");

        e.preventDefault();

        fetch(serverURL + "/signin", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: e.target.email.value, 
                password: e.target.password.value})
        })
        .then(httpResponse => {
            if(httpResponse.ok)
            {
                this.setState(() => {
                    window.localStorage.setItem("marioLoggedIn", "true");
                    return {
                        ...this.state,
                        isLoggedIn: "true",
                        errMsg: null
                    };
                });
            }
            else {

                httpResponse.json().then((payload) => {
                    window.localStorage.setItem("marioLoggedIn", "false");
                    this.setState(() => {
                        return {
                            ...this.state,
                            isLoggedIn: "false",
                            errMsg: payload
                        };
                    });
                })
            }
        });
    }

    handleLogout = (e) => {
        console.log("Logging out...");

        if(e) {
            e.preventDefault();
        }

        fetch(serverURL + "/signout", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
        })
        .then(httpResponse => {
            if(httpResponse.ok)
            {
                this.setState(() => {
                    window.localStorage.setItem("marioLoggedIn", "false");
                    return {
                        ...this.state,
                        isLoggedIn: "false",
                        errMsg: null
                    };
                });
            }
            else {
                httpResponse.json().then((payload) => {
                    console.log("There was an error logging out:", payload);
                })
            }
        });
    }

    loadMarios = () => {
        fetch(serverURL + "/getMarios")
        .then(httpResponse => {
            if(httpResponse.ok)
            {
                httpResponse.json().then(payload => {
                    this.setState(() => {
                        return {
                            ...this.state,
                            marios: payload
                        };
                    });
                })
            }
            else {
                httpResponse.json().then((payload) => {
                    console.log("There was an error fetching Marios:", payload);
                })
            }
        })
    }

    render() {
        console.log("Rendering context:" + this.state.isLoggedIn);
        return (
            <MarioContext.Provider value={{
                ...this.state,
                handleLogin : this.handleLogin,
                handleLogout : this.handleLogout,
                handleSignup : this.handleSignup,
                loadMarios : this.loadMarios
              }}>
    
                {this.props.children}
            </MarioContext.Provider>
        )
    }
}

const MarioContextConsumer = MarioContext.Consumer;

export { MarioContextProvider, MarioContextConsumer, MarioContext };