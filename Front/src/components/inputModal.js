import React from "react";
import { Context } from "../store/appContext";
import Tiempo from "../components/tiempo";

const InputModal = () => {
    return (
        <Context.Consumer>
            {({ store, actions }) => {
                return (
                    <div className="row">
                        <div className="col-md-6">
                            <p>No olvides la fecha!</p>
                        </div>
                        <div className="col-md-12">
                            <input
                                type="text"
                                className="form-control"
                                id="usernametodo"
                                placeholder="Ingrese su Todo"
                                name="usernametodo"
                                onChange={e => actions.obtenerInfo(e)}
                            />
                        </div>
                        <div className="col-md-12">
                            <Tiempo />
                        </div>
                    </div>
                );
            }}
        </Context.Consumer>
    );
}

export default InputModal;