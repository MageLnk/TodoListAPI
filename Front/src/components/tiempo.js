import React from 'react';
import { Context } from "../store/appContext";

const Tiempo = () => {
  return (
    <Context.Consumer>
      {({ store, actions }) => {
        //let actioncontext = actions;
        //let storecontext = store;
        return (
          <div className="col-md-12">
            <p>Eliga fecha de vencimiento:</p>
            <input
              type="date"
              name="time"
              onChange={e => actions.obtenerInfo(e)}
            >
            </input>
          </div>
        );
      }}
    </Context.Consumer>
  );
}

export default Tiempo;