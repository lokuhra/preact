import React from 'react';
import './styles.css'

import Autocomplete from './Autocomplete';

function App() {
  return (
    <div>
      <h1>React Autocomplete Demo</h1>
      <h2>Start typing and experience the autocomplete wizardry!</h2>
      <Autocomplete
        suggestions={[
          { country: 'argentina', code: 'ar' },
          { country: 'brasil', code: 'br' },
          { country: 'chile', code: 'cl' },
          { country: 'uruguay', code: 'uy' },
        ]}
      />
    </div>
  );
}

export default App;
