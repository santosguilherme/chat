/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';

import theme from 'commons/styles/theme';

const defaultTestMessages = {
  'CHAT.SEND_MESSAGE.BUTTON.LABEL': 'send message button label',
  'CHAT.SEND_MESSAGE.INPUT.PLACEHOLDER': 'send message input placeholder',
};

const AllTheProviders = ({ children }) => (
  <IntlProvider locale="en-US" messages={defaultTestMessages}>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </MuiThemeProvider>
  </IntlProvider>
);

AllTheProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export function customRender(ui, options) {
  return render(ui, { wrapper: AllTheProviders, ...options });
}
