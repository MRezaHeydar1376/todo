import { Global, css } from '@emotion/react'
import React from 'react';
import Home from './pages';
import { GlobalStyles } from './styles';

function App() {
  return (
    <div>
      <Global
        styles={css`
         body{
            margin: 0;
            padding: 0;
          }
        `}
      />
      <Home />
    </div>
  );
}

export default App;
