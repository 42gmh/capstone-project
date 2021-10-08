import React, { Component } from 'react';
import ColorPicker from './ColorPicker';
import Dashboard from './Dashboard';
import { Mario } from './Mario';
import { MarioContext, MarioContextConsumer } from './MarioContext';


export default class ColorMario extends Component {

    componentDidMount()
    {
        console.log("CDM");
        this.context.clearSaveStatus();
    }

    handleDelete(value)
    {
        value.handleMarioDelete();

        this.props.history.push('/');
    }

    render() {
        return (
            <MarioContextConsumer> 
            {
                (value) => {
                    if(null === value.selectedMario) // handle refresh
                        return <Dashboard/>
                    else
                        return (
                        <>
                            <Mario palette={value.selectedMario} isThumb="false"/>

                            <form className="text-light" onSubmit={(event) => value.handleMarioEdit(event)}>

                            <div className="container">
                                <div className="row">
                                <div className="col">
                                <div>
                                    <input className="form-control my-3" type="text" id="title" name="title" required
                                    value={value.selectedMario.title} 
                                        onChange={(e) => value.handleMarioChange("title", e.target.value)}
                                    placeholder="Portait Title"/>
                                </div>
                                </div></div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                        <ColorPicker label="Skin" field="skin"/>
                                        </div>
                                        <div className="col">
                                        <ColorPicker label="Mustache" field="mustache"/>
                                        </div>
                                        <div className="col">
                                        <ColorPicker label="Hair" field="hair"/>
                                        </div>
                                        <div className="col">
                                        <ColorPicker label="Eyes" field="eyes"/>
                                        </div>
                                        <div className="col">
                                        <ColorPicker label="Background" field="background"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                        <ColorPicker label="Shirt" field="shirt"/>
                                        </div>
                                        <div className="col">
                                        <ColorPicker label="Pants" field="pants"/>
                                        </div>
                                        <div className="col">
                                        <ColorPicker label="Cap" field="cap"/>
                                        </div>
                                        <div className="col">
                                        <ColorPicker label="Boots" field="boots"/>
                                        </div>
                                        <div className="col">
                                        <ColorPicker label="Buttons" field="button"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </form>
                            <div className="container text-center">
                            <button className="my-3 btn btn-secondary" onClick={() => value.handleMarioSave()}>Save</button>
                            {null === value.selectedMario.id ? null : <button className="my-3 mx-3 btn btn-secondary" onClick={() => this.handleDelete(value)}>Delete</button>}
                            </div>
                            { 
                                null == value.savedStatus ? 
                                    null :value.savedStatus.success ? 
                                        <h5 className="bg-info text-white text-center">Your Marios was successfully saved!</h5> : 
                                        <h5 className="bg-danger text-white text-center">{"Please try again: " + value.savedStatus.msg}</h5>
                            }
                        </>
                        )
                }
            }
            </MarioContextConsumer>
        )
    }
}

ColorMario.contextType = MarioContext;
