import { Global, css } from '@emotion/react'
import React from 'react';
import Home from './pages';
import { StoreProvider } from './stores/context';
import { RootStore } from './stores/root';

const store = RootStore.create({})

function App() {
  return (
    <StoreProvider store={store}>
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
    </StoreProvider>
  );
}

export default App;
