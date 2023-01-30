import { Global, css, ThemeProvider } from '@emotion/react'
import { observer } from 'mobx-react-lite';
import Home from './pages';
import { StoreProvider } from './stores/context';
import { RootStore } from './stores/root';
import { Div } from './styles';
import { themeDark, themeLight } from './variables';

const store = RootStore.create({})

function App() {

  return (
    <ThemeProvider theme={store.darkTheme ? themeLight : themeDark}>
      <StoreProvider store={store}>
        <Div>
          <Global
            styles={css`
         body{
            margin: 0;
            padding: 0;
          }
        `}
          />
          <Home />
        </Div>
      </StoreProvider>
    </ThemeProvider>
  );
}

export default observer(App);
