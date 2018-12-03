import React, { Fragment } from 'react';
import { Consumer } from '../Provider';
import AutoComplete from './AutoComplete';

const AutoCompleteBox = () => (
  <Consumer>
    {({ state: { data } }) => (
      <Fragment>
        <p>Destino</p>
        <AutoComplete suggestions={data} />
      </Fragment>
    )}
  </Consumer>
);

export default AutoCompleteBox;
