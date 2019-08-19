import React from "react";
import { Context } from "../store/appContext";
import Tiempo from "../components/tiempo";

const InputModal = () => {
    return (
        <Context.Consumer>
            {({ store, actions }) => {
                return (
                    <div className="row">
                        <div className="col-md-12">
                            <p>No olvides la fecha!</p>
                        </div>
                        <div className="col-md-7">
                            <input
                                type="text"
                                className="form-control"
                                id="inputTodo"
                                placeholder="Ingrese su Todo"
                                name="inputTodo"
                                required
                            />
                        </div>
                        <div className="col-md-5">
                            <Tiempo />
                        </div>
                    </div>
                );
            }}
        </Context.Consumer>
    );
}

export default InputModal;

{/*onChange={e => this.actioncontext.obtenerDataCamp(e)
                                                */}