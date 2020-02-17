import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import NoSsr from '@material-ui/core/NoSsr';

import { actions as appActions, selectors as appSelectors } from 'redux/modules/app';
import { selectors as userSettingsSelectors } from 'redux/modules/userSettings';
import theme, { darkTheme } from 'commons/styles/theme';
import enUS from 'locale/en-US';
import ptBR from 'locale/pt-BR';

import Loading from './components/Loading/Loading';
import AppTabs from './components/AppTabs/AppTabs';
import { BackgroudPrimary, BackgroudSecondary } from './styles/Background';
import { Container, Content } from './styles/Container';

import 'typeface-roboto';

const localeMessages = {
  'en-US': enUS,
  'pt-BR': ptBR,
};

const themes = {
  light: theme,
  dark: darkTheme,
};

function App() {
  const dispatch = useDispatch();

  const isWebsocketConnected = useSelector(appSelectors.getWebsocketConnected);
  const interfaceColor = useSelector(userSettingsSelectors.getInterfaceColor);
  const language = useSelector(userSettingsSelectors.getLanguage);

  useEffect(() => {
    dispatch(appActions.connectWebsocket());
  }, [dispatch]);

  const selectedTheme = themes[interfaceColor];

  return (
    <IntlProvider locale={language} messages={localeMessages[language]}>
      <NoSsr>
        <MuiThemeProvider theme={selectedTheme}>
          <ThemeProvider theme={selectedTheme}>
            <Container>
              <BackgroudPrimary />
              <Content>
                {
                  isWebsocketConnected
                    ? <AppTabs />
                    : <Loading />
                }
              </Content>
              <BackgroudSecondary />
            </Container>
          </ThemeProvider>
        </MuiThemeProvider>
      </NoSsr>
    </IntlProvider>
  );
}

export default App;
