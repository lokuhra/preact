import React from 'react';


import ContextProvider from './Provider';
import Autocomplete from './AutoComplete';
import Calendar from './Calendar';
import Dropdown from './Dropdown';
import Modal from './Modal';

const Context = () => (
  <ContextProvider>
    <Autocomplete />
    <Calendar />
    <Dropdown />
    <Modal />
  </ContextProvider>
);

export default Context;
