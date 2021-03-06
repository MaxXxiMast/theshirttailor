// REACT
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { loadComponents } from 'loadable-components';
// REACT-ROUTER
import { BrowserRouter } from 'react-router-dom';
//import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// IMPORT COMBINED REDUCERS
import reducers from './reducers/index';

// STEP 1 create the store
const middleware = applyMiddleware(thunk, logger);
// WE WILL PASS INITIAL STATE FROM SERVER STORE
const initialState = window.INITIAL_STATE;
const store = createStore(reducers, initialState, middleware);

import routes from './routes';

const Routes = (
  <Provider store={store}>
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  </Provider>
);

loadComponents().then(() => {
  render(Routes, document.getElementById('app'));
});