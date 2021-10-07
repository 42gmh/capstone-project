import React, { Component } from 'react';
import ColorPicker from './ColorPicker';
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
                    return (
                    <>
                        <div className="container">
                            <Mario palette={value.selectedMario} isThumb="false"/>
                        </div>

                        <form onSubmit={(event) => value.handleMarioEdit(event)}>

                        <div>
                            <input type="text" id="title" name="title" required
                            value={value.selectedMario.title} 
                                onChange={(e) => value.handleMarioChange("title", e.target.value)}
                            />
                            <label htmlFor="title">Title</label>

                        </div>
                        <ColorPicker label="Skin" field="skin"/>
                        <ColorPicker label="Mustache" field="mustache"/>
                        <ColorPicker label="Hair" field="hair"/>
                        <ColorPicker label="Eyes" field="eyes"/>
                        <ColorPicker label="Background" field="background"/>
                        <ColorPicker label="Shirt" field="shirt"/>
                        <ColorPicker label="Pants" field="pants"/>
                        <ColorPicker label="Cap" field="cap"/>
                        <ColorPicker label="Boots" field="boots"/>
                        <ColorPicker label="Buttons" field="button"/>
                        </form>
                        <button className="my-3 btn btn-info" onClick={() => value.handleMarioSave()}>Save</button>
                        {null === value.selectedMario.id ? null : <button className="my-3 btn btn-info" onClick={() => this.handleDelete(value)}>Delete</button>}

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
