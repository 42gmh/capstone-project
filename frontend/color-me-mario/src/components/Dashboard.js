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

                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                            <div key = "-1" className="col">
                                <Link to="/colormario" className="link-dark text-decoration-none">
                                    <div className="card m-2 bg-secondary" style={{ width: "20rem" }} onClick={() => value.handleMarioSelection({
                                            ...defaultMarioPalette,
                                            id: null,
                                            title: null})
                                    }>
                                        <div className="card-body border border-dark">
                                            <Mario palette={blankMario} isThumb="true"/>
                                            <h5 className="text-center eightbitfont m-3 mb-0">Create New Mario</h5>
                                        </div>
                                    </div>
                                </Link>
                             </div>
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
                        </div>
                    )
                }
            }
            </MarioContextConsumer>
        )
    }
}

Dashboard.contextType = MarioContext;

{/* <table className="table table-bordered table-sm table-responsive">
<thead>
    <tr className = "text-center align-middle">
        <th scope="col">Mario</th>
        <th scope="col text-center">Title</th>
        <th scope="col text-center">Delete</th>
        <th scope="col" hidden={true}>Id</th>
    </tr>
</thead>
<tbody>
{value.marios.map((aMario) => {
    return (
    <tr className="text-center align-middle">
        <td colSpan="1"><Mario /></td>
        <td >{aMario.title}</td>
        <td>&#128465;</td>
        <td hidden={true}>aMario.id</td>
    </tr>);
})}
</tbody>
</table> */}
