import React, { Component } from 'react';
import { MarioContextConsumer } from './MarioContext';


export default class ColorPicker extends Component {
    render() {
        return (
            <MarioContextConsumer> 
            {
                (value) => {

                    const {field, label} = this.props;

                    return (
                        <>
                            <div className="col">
                            <input 
                                type="color" 
                                className="form-control form-control-color p-0 m-0"
                                id={field} 
                                name={field} 
                                value={value.selectedMario[field]} 
                                onChange={(e) => value.handleMarioChange([field], e.target.value)}/>
                            <label className="form-label p-0 my-1" htmlFor={field}>{label}</label>
                            </div>
                        </>
                    )
                }
            }
            </MarioContextConsumer>
        )
    }
}