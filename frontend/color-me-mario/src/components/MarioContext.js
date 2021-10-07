import React, { Component } from 'react'

const MarioContext = React.createContext();

const serverURL = "api/v1";

export default class MarioContextProvider extends Component {

    state = {
        isLoggedIn: window.localStorage.getItem("marioLoggedIn"),
        errMsg: null,
        signUpStatus: null,
        marios: [],
        selectedMario: null,
        saveStatus: null
    }

    handleMarioSelection = (aMario) => {

        console.log("Selected Mario!!!:" + JSON.stringify(aMario));
        this.setState(() => {
            return {
                ...this.state,
                selectedMario: aMario
            };
        });
    }

    handleMarioSave = () => {

        const mario = {
            mario: this.state.selectedMario
        }

        fetch(serverURL + "/savemario", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(mario)
        }).then(httpResponse => {
            if(httpResponse.ok)
            {
                httpResponse.json().then((payload) => {
                    const savedMario = this.state.selectedMario;
                    savedMario.id = payload.id;
                    this.setState(() => {
                        return {
                            ...this.state,
                            selectedMario: savedMario,
                            savedStatus : {
                                success: true,
                                msg: null
                            }
                        };
                    });    
                })
            }
            else {
                httpResponse.json().then((payload) => {
                    this.setState(() => {
                        return {
                            ...this.state,
                            savedStatus: {
                                success: false,
                                msg: payload
                            }
                        };
                    });
                })
            }
        });

    }

    handleMarioDelete = () => {
        fetch(serverURL + "/deletemario", {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                marioId: this.state.selectedMario.id
            })
        }).then(httpResponse => {
            if(httpResponse.ok) {
                this.setState(() => {
                    return {
                        ...this.state,
                        selectedMario: null
                    };
                });
            }
            else {
                httpResponse.json().then((payload) => {
                    this.setState(() => {
                        return {
                            ...this.state,
                            savedStatus: {
                                success: false,
                                msg: payload
                            }
                        };
                    });
                })
            }
        });
    }

    handleMarioChange = (field, color) => {

        const updatedMario = this.state.selectedMario;
        updatedMario[field] = color;
        this.setState(() => {
            return {
                ...this.state,
                selectedMario: updatedMario,
                savedStatus: null
            };
        }, () => console.log(this.state));
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

    clearSaveStatus = () => {

        console.log("Clearing save status...")
        this.setState(() => {
            return {
                ...this.state,
                savedStatus: null
            };
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
            else if(401 === httpResponse.status) {
                window.localStorage.setItem("marioLoggedIn", "false");

                this.setState(() => {
                    return {
                        ...this.state,
                        isLoggedIn: "false",
                    };
                });
            
            }
            else {
                console.log(httpResponse);
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
                handleMarioSelection: this.handleMarioSelection,
                handleMarioChange: this.handleMarioChange,
                handleMarioSave: this.handleMarioSave,
                handleMarioDelete: this.handleMarioDelete,
                loadMarios : this.loadMarios,
                clearSaveStatus : this.clearSaveStatus,
              }}>
    
                {this.props.children}
            </MarioContext.Provider>
        )
    }
}

const MarioContextConsumer = MarioContext.Consumer;

export { MarioContextProvider, MarioContextConsumer, MarioContext };