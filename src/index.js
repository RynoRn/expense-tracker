import './index.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Root from './containers/Root';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <MuiThemeProvider>
    <Root store={ store } />
  </MuiThemeProvider>,
  document.getElementById('root')
);
