import React, { Component } from 'react';
import { defaultMarioPalette, Mario } from './Mario';
import { MarioContext, MarioContextConsumer } from './MarioContext';
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
    componentDidMount()
    {
        this.context.loadMarios();
    }

    render() {
        const blankMario = {
            boots       : "#6c757d",
            button      : "#6c757d",
            cap         : "#6c757d",
            pants       : "#6c757d",
            shirt       : "#6c757d",
            background  : "#6c757d",
            eyes        : "#6c757d",
            hair        : "#6c757d",
            mustache    : "#6c757d",
            skin        : "#6c757d",
        };

        return (
            <MarioContextConsumer> 
            {
                (value) => {

                    return (
                    <>
                        <h1 className="text-center eightbitfont text-light p-3">Photo Album</h1>
                        <div className="container">
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 p-2">
                                {
                                value.marios.map((aMario) => {
                                    console.log(aMario);
                                    return (
                                        <Link to="/colormario" className="link-dark text-decoration-none">
                                            <div key={aMario.id} className="col">
                                                <div className="card m-2 bg-secondary" style={{ width: "20rem" }} onClick={() => value.handleMarioSelection(aMario)}>
                                                    <div className="card-body border border-dark">
                                                        <Mario palette={aMario} isThumb="true"/>
                                                        <h5 className="text-center m-3 mb-0 eightbitfont">{aMario.title}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    )})
                                }
                                <div key = "-1" className="col">
                                    <Link to="/colormario" className="link-dark text-decoration-none">
                                        <div className="card m-2 bg-secondary" style={{ width: "20rem" }} onClick={() => value.handleMarioSelection({
                                                ...defaultMarioPalette,
                                                id: null,
                                                title: null})
                                        }>
                                            <div className="card-body border border-dark">
                                                <Mario palette={blankMario} isThumb="true"/>
                                                <h5 className="text-center eightbitfont m-3 mb-0">New Mario</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
                    )
                }
            }
            </MarioContextConsumer>
        )
    }
}

Dashboard.contextType = MarioContext;