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
                        <div>
                            <input 
                                type="color" 
                                className="form-control form-control-color"
                                id={field} 
                                name={field} 
                                value={value.selectedMario[field]} 
                                onChange={(e) => value.handleMarioChange([field], e.target.value)}
                            />
                            <label className="form-label" htmlFor={field}>{label}</label>
                        </div>
                    )
                }
            }
            </MarioContextConsumer>
        )
    }
}