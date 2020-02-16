import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import NoSsr from '@material-ui/core/NoSsr';

import {actions as appActions, selectors as appSelectors} from 'redux/modules/app';
import {selectors as userSettingsSelectors} from 'redux/modules/userSettings';
import theme, { darkTheme } from 'commons/styles/theme';

import Loading from './components/Loading/Loading';
import AppTabs from './components/AppTabs/AppTabs';
import {BackgroudPrimary, BackgroudSecondary} from './styles/Background';
import {Container, Content} from './styles/Container';

import 'typeface-roboto';


function App() {
  const dispatch = useDispatch();

  const isWebsocketConnected = useSelector(appSelectors.getWebsocketConnected);
  const interfaceColor = useSelector(userSettingsSelectors.getInterfaceColor);

  useEffect(() => {
    dispatch(appActions.connectWebsocket());
  }, [dispatch]);

  const selectedTheme = interfaceColor === 'light' ? theme : darkTheme;

  return (
    <NoSsr>
      <MuiThemeProvider theme={selectedTheme}>
        <ThemeProvider theme={selectedTheme}>
          <Container>
            <BackgroudPrimary/>
            <Content>
              {
                isWebsocketConnected
                  ? <AppTabs/>
                  : <Loading/>
              }
            </Content>
            <BackgroudSecondary/>
          </Container>
        </ThemeProvider>
      </MuiThemeProvider>
    </NoSsr>
  );
}

export default App;
