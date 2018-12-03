import React, { Fragment } from 'react';
import { Consumer } from '../Provider';
// let's create a functional componente called App
export default () => {
  return (
    <Consumer>
      {({
        state: { roomQuantity },
        actions: { incrementRoom, decreaseRoom }
      }) => (
        <Fragment>
          <span>Numero de habitaciones: {roomQuantity}</span>
          <button onClick={() => incrementRoom()}>+</button>
          <button onClick={() => decreaseRoom()}>-</button>
          <divider />
          <p>asd</p>
        </Fragment>
      )}
    </Consumer>
  );
};
