import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { setConfiguration } from 'react-grid-system';

import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from './redux/configureStore';

setConfiguration({
  maxScreenClass: 'xl',
  breakpoints: [600, 960, 1280, 1920],
  gutterWidth: 0,
  gridColumns: 24,
});

const { store, persistor } = configureStore();
// declare module '@material-ui/core/styles/createMuiTheme' {
//   // eslint-disable-next-line no-unused-vars
//   export interface Theme {
//     status: {
//       danger: string;
//     };
//   }
//   // eslint-disable-next-line no-unused-vars
//   export interface ThemeOptions {
//     status?: {
//       danger?: string;
//     };
//   }
// }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
