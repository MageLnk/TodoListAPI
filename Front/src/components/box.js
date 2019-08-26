import React, { useEffect } from 'react';
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

let actioncontext = null;
let storecontext = null;

const Box = props => {
    return (
        <Context.Consumer>
            {({ store, actions }) => {
                actioncontext = actions;
                storecontext = store;
                return (
                    <div className="row">
                        <div className="col-md-12">
                            <input type="checkbox" className="checks" value="3"></input>
                        </div>
                    </div>
                );
            }}
        </Context.Consumer>
    );
}
Box.propTypes = {
    match: PropTypes.any,
    history: PropTypes.any
};

export default Box;