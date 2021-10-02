import React, { Component } from 'react'
import { MarioContext, MarioContextConsumer } from './MarioContext'


export default class Dashboard extends Component {
    componentDidMount()
    {
        this.context.loadMarios();

    }

    render() {
        return (
            <MarioContextConsumer> 
            {
                (value) => {
                    return (
                        <div>
                            <h1>{"Mario Dashboard" + JSON.stringify(value.marios)}</h1>
                        </div>
                    )
                }
            }
            </MarioContextConsumer>
        )
    }
}

Dashboard.contextType = MarioContext;
