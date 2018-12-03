import React, { Component, createContext, useState } from 'react';

export const { Provider, Consumer } = createContext();

export default class ContextProvider extends Component {
  state = {
    data: [
      { country: 'argentina', code: 'ar' },
      { country: 'brasil', code: 'br' },
      { country: 'chile', code: 'cl' },
      { country: 'uruguay', code: 'uy' }
    ],
    roomQuantity: 0
  };

  toggle = () => {
    this.setState(({ theme }) => ({
      theme: theme === 'light' ? 'dark' : 'light'
    }));
  };

  incrementRoom = () =>
    this.setState({ roomQuantity: this.state.roomQuantity + 1 });

  decreaseRoom = () =>
    this.setState({ roomQuantity: this.state.roomQuantity - 1 });

  render() {
    const value = {
      state: this.state,
      actions: {
        toggle: this.toggle,
        incrementRoom: this.incrementRoom,
        decreaseRoom: this.decreaseRoom
      }
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}
