import React, { Component } from 'react';
import ColorPickerPanel from './ColorPickerPanel';
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

    { 
        null == value.savedStatus ? 
            null :value.savedStatus.success ? 
                <h5 className="bg-secondary text-white text-center my-3">Your Marios was successfully saved!</h5> : 
                <h5 className="bg-danger text-white text-center my-3">{"Please try again: " + value.savedStatus.msg}</h5>
    }

    <form className="text-light" onSubmit={(event) => value.handleMarioEdit(event)}>
        <div className="container">
            <div className="row row-col-auto">
                <div>
                    <input className="form-control my-3" type="text" id="title" name="title" required
                    value={value.selectedMario.title} 
                        onChange={(e) => value.handleMarioChange("title", e.target.value)}
                    placeholder="Portait Title"/>
                </div>
            </div>
            <ColorPickerPanel/>
        </div>
    </form>
    
    <div className="container text-center">
        <button className="my-3 btn btn-secondary" onClick={() => value.handleMarioSave()}>Save</button>
        {null === value.selectedMario.id ? null : 
            <button className="my-3 mx-3 btn btn-secondary" 
                    onClick={() => this.handleDelete(value)}>Delete</button>}
    </div>
</>)
                }
            }
            </MarioContextConsumer>
        )
    }
}

ColorMario.contextType = MarioContext;
