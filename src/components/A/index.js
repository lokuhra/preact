import React from 'react';
import './styles.css'

import Autocomplete from './Autocomplete';

function App() {
  return (
      <Autocomplete
        suggestions={[
          { country: 'argentina', code: 'ar' },
          { country: 'brasil', code: 'br' },
          { country: 'chile', code: 'cl' },
          { country: 'uruguay', code: 'uy' },
        ]}
      />
  );
}

export default App;
