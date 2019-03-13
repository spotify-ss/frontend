import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import App from './containers/App';
import rootReducer from './reducers';
import Reset from './components/Reset';
import { createGlobalStyle } from 'styled-components';

// Adding 80px padding to bottom of body to account for
// spotify player size
const BodyStyle = createGlobalStyle`
  body {
    padding-bottom: 80px;
  }
`;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

ReactDOM.render(
  <Provider store={store}>
    <Reset />
    <BodyStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);
