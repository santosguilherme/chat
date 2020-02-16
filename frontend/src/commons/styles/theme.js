import { createMuiTheme, darken } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    chat: {
      content: '#E5DDD5',
      send: '#f0f0f0',
      loggedMessage: '#DCF8C6'
    }
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    chat: {
      content: darken('#E5DDD5', 0.8),
      send: '#424242',
      loggedMessage: '#009688'
    }
  },
});
